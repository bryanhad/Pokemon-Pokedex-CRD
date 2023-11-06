// Action Types
export const POKEMONS_FETCH_SUCCESSFUL = "pokemons/fetchSuccessful"
export const POKEMON_DETAIL_FETCH_BY_ID_SUCCESSFUL =
    "pokemonDetail/fetchByIdSuccessful"

let url = "http://localhost:3000/pokemon"
export class PokemonAction {
    static async fetchAll(type) {
        const fetchUrl = type ? url + `?type=${type}` : url
        try {
            const res = await fetch(fetchUrl)
            const pokemons = await res.json()
            return (dispatch) => {
                dispatch({ type: POKEMONS_FETCH_SUCCESSFUL, payload: pokemons })
            }
        } catch (err) {
            throw { err }
        }
    }
    static async addNew(formObj) {
        try {
            await fetch(url, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formObj),
            })
            return async (dispatch) => {
                dispatch(await this.fetchAll())
            }
        } catch (err) {
            throw { err }
        }
    }
    static async fetchById(id) {
        try {
            const res = await fetch(url + `/${id}`)
            const pokemonDetail = await res.json()
            return (dispatch) => {
                dispatch({
                    type: POKEMON_DETAIL_FETCH_BY_ID_SUCCESSFUL,
                    payload: pokemonDetail,
                })
            }
        } catch (err) {
            throw { err }
        }
    }
    static async deleteById(id) {
        try {
            await fetch(url + `/${id}`, {
                method: "DELETE"
            })
            return async (dispatch) => {
                dispatch(await this.fetchAll())
            }
        } catch (err) {
            throw {err}
        }
    }
}
