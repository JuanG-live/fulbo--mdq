import { Match } from './types';

const api = {
    match: {
        list: async (): Promise<Match[]> => {
            return fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQGuRjh8ZgUgJe9TWISFXqFisqIK1oWG9DOMu746Q-kywOfhT2bGSyGCisIY6GQqFZPPyYeE6Iovmmb/pub?output=tsv',)
            .then((res) => res.text())
            .
        }
    }

}
export default api;