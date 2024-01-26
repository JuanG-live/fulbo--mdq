import { Match } from './types';
import { Player } from './types';

const api = {
    match: {
        list: async (): Promise<Match[]> => {
            return fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vTUOQDD1R6O6BnhjaT75WqN28x5J3fB5JQkZcRVhBRvwPWMOsgf1r2DcBVz3BIKXQRy2aYV6FMZQnFa/pub?output=tsv",
                {next: {tags: ["matches"]}},
            )
                .then((res) => res.text())
                .then((text) => {
                    return text
                        .split('\n')
                        .slice(1)
                        .map(row => {
                            const [date, team1, team2, score1, score2] = row.split('\t');

                            return {
                                date,
                                team1,
                                team2,
                                score1: parseInt(score1),
                                score2: parseInt(score2),
                            };
                        });
                });
        },
    },
    player: {
        list: async (): Promise<Player[]> => {

            const matches = await api.match.list();
            const players = new Map<string, Player>();

            for (const {team1, team2, score1, score2} of matches) {
                if (!team1 || !team2) break;

                const players1 = team1.split(', ');
                const players2 = team2.split(', ');

                for (let name of players1) {
                    name = name.trim();

                    const player = players.get(name) || {
                        name,
                        matches: 0,
                        score: 0
                    };

                    player.matches++;
                    player.score += score1 - score2;

                    players.set(name, player);
                }

                for (let name of players2) {
                    name = name.trim();

                    const player = players.get(name) || {
                        name,
                        matches: 0,
                        score: 0
                    };

                    player.matches++;
                    player.score += score2 - score1;

                    players.set(name, player);
                }
            };
            return Array.from(players.values())
            .sort((a, b) => b.score - a.score)
            .map((players) => ({ 
                ...players, 
                score: Math.round(players.score / players.matches) * 30/100,
            }));
        },
    },
};
export default api;