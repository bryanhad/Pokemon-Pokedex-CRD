import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import pokemonReducer from "./pokemonReduces";
import thunk from "redux-thunk";

const rootReducer = combineReducers({pokemonStore: pokemonReducer})

export const store = createStore(rootReducer, applyMiddleware(thunk))