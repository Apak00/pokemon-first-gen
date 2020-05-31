// I would normally prefer immer but for the sake of simplicity lets keep plain reducers

import { PokemonReducerState } from "./interfaces";
import { pokemonActionTypes, AnyPokemonAction } from "./actions";

const initialState: PokemonReducerState = {
  pokemonList: [],
  pokemonDetail: undefined,
  isPokemonListFetching: false,
  isPokemonDetailFetching: false,
};

export const pokemonReducer = (
  state: PokemonReducerState = initialState,
  action: AnyPokemonAction
) => {
  switch (action.type) {
    case pokemonActionTypes.GET_POKEMON_LIST: {
      return {
        ...state,
        isPokemonListFetching: true,
      };
    }
    case pokemonActionTypes.SET_POKEMON_LIST: {
      return {
        ...state,
        pokemonList: action.pokemonList,
        isPokemonListFetching: false,
      };
    }
    case pokemonActionTypes.GET_POKEMON_DETAIL: {
      return {
        ...state,
        isPokemonDetailFetching: true,
      };
    }
    case pokemonActionTypes.SET_POKEMON_DETAIL: {
      return {
        ...state,
        pokemonDetail: action.pokemonDetail,
        isPokemonDetailFetching: false,
      };
    }
    default:
      return state;
  }
};
