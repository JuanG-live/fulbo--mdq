import { text } from 'stream/consumers';
import { Match } from './types';

const api = {
    match: {
        list: async (): Promise<Match[]> => {
            return fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQGuRjh8ZgUgJe9TWISFXqFisqIK1oWG9DOMu746Q-kywOfhT2bGSyGCisIY6GQqFZPPyYeE6Iovmmb/pub?output=tsv',
            {next: {revalidate:0}})
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
                })
        }
    }
}

export default api;