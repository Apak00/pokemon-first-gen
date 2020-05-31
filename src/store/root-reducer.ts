import { combineReducers, CombinedState } from "redux";
import { pokemonReducer } from "../pages/pokemon/reducer";
import { GlobalState } from "./interfaces";

export const rootReducer = combineReducers<GlobalState>({
  pokemon: pokemonReducer,
});
