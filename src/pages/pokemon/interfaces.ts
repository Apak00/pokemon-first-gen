export interface PokemonReducerState {
  pokemonList: PokemonListItem[];
  pokemonDetail?: PokemonDetail;
  isPokemonListFetching: boolean;
  isPokemonDetailFetching: boolean;
}

export interface PokemonListItem {
  name: string;
}

export interface PokemonDetail {
  id: number;
  types: string[];
  height: number;
  abilities: string[];
}
