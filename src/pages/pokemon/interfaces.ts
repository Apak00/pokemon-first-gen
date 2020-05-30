export interface PokemonReducerState {
  pokemonList: PokemonListItem[];
  pokemonDetail?: PokemonDetail;
  isPokemonListFetching: boolean;
  isPokemonDetailFetching: boolean;
}

export interface PokemonListItem {
  name: string;
}
export interface PokemonDetail extends PokemonListItem {
  year: number;
}
