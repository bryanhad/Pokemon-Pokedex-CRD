import { POKEMONS_FETCH_SUCCESSFUL, POKEMON_DETAIL_FETCH_BY_ID_SUCCESSFUL } from "./pokemonAction"

const INITIAL_STATE = {
    pokemons: [],
    pokemonDetail: {},
}

export default function pokemonReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case POKEMONS_FETCH_SUCCESSFUL:
            return { ...state, pokemons: action.payload }
        case POKEMON_DETAIL_FETCH_BY_ID_SUCCESSFUL:
            return {...state, pokemonDetail: action.payload}
        default:
            return state
    }
}
