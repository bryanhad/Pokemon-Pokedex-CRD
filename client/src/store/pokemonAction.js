// Action Types
export const POKEMONS_FETCH_SUCCESSFUL = 'pokemons/fetchSuccessful'


let url = 'http://localhost:3000/pokemon'
export class PokemonAction {
    static async fetchAll() {
        try {
            const res = await fetch(url)
            const pokemons = await res.json()
            return (dispatch) => {
                dispatch({type: POKEMONS_FETCH_SUCCESSFUL, payload: pokemons})
            }
        } catch (err) {
            throw {err}
        }
    }
}