import { PokemonListItem, PokemonDetail } from "./interfaces";

export enum pokemonActionTypes {
  GET_POKEMON_LIST = "GET_POKEMON_LIST",
  SET_POKEMON_LIST = "SET_POKEMON_LIST",
  GET_POKEMON_DETAIL = "GET_POKEMON_DETAIL",
  SET_POKEMON_DETAIL = "SET_POKEMON_DETAIL",
}

export interface GetPokemonListAction {
  type: pokemonActionTypes.GET_POKEMON_LIST;
  limit: number;
  searchText: string;
}
export const getPokemonListAC: (
  limit: number,
  searchText: string
) => GetPokemonListAction = (limit, searchText) => ({
  type: pokemonActionTypes.GET_POKEMON_LIST,
  limit,
  searchText,
});

export interface SetPokemonListAction {
  type: pokemonActionTypes.SET_POKEMON_LIST;
  pokemonList: PokemonListItem[];
}
export const setPokemonListAC: (
  pokemonList: PokemonListItem[]
) => SetPokemonListAction = (pokemonList) => ({
  type: pokemonActionTypes.SET_POKEMON_LIST,
  pokemonList,
});

export interface GetPokemonDetailAction {
  type: pokemonActionTypes.GET_POKEMON_DETAIL;
  name: string;
}
export const getPokemonDetailAC: (name: string) => GetPokemonDetailAction = (
  name
) => ({
  type: pokemonActionTypes.GET_POKEMON_DETAIL,
  name,
});

export interface SetPokemonDetailAction {
  type: pokemonActionTypes.SET_POKEMON_DETAIL;
  pokemonDetail: PokemonDetail;
}
export const setPokemonDetailAC: (
  pokemonDetail: PokemonDetail
) => SetPokemonDetailAction = (pokemonDetail) => ({
  type: pokemonActionTypes.SET_POKEMON_DETAIL,
  pokemonDetail,
});

export type AnyPokemonAction =
  | GetPokemonListAction
  | SetPokemonListAction
  | GetPokemonDetailAction
  | SetPokemonDetailAction;
