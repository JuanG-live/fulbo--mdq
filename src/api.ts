import { Match } from './types';
import { Player } from './types';

const api = {
    match: {
        list: async (): Promise<Match[]> => {
            return fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQGuRjh8ZgUgJe9TWISFXqFisqIK1oWG9DOMu746Q-kywOfhT2bGSyGCisIY6GQqFZPPyYeE6Iovmmb/pub?output=tsv',
                { next: { revalidate: 0 } })
                .then((res) => res.text())
                .then(text => {
                    return text.split('\n').slice(1).map(row => {
                        const [date, team1, team2, score1, score2] = row.split('\t')
                        return {
                            date,
                            team1,
                            team2,
                            score1: parseInt(score1),
                            score2: parseInt(score2),
                        }
                    })
                });
        },
    },
    player: {
        list: async (): Promise<Player[]> => {
            
            const matches = await api.match.list();
            const players = new Map<string, Player>();

            for (let { team1, team2, score1, score2 } of matches) {
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
            return Array.from(players.values());
        },
    },
};
export default api;