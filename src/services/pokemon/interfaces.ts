import { PokemonListItem, PokemonDetail } from "../../pages/pokemon/interfaces";

export interface PokemonListResponse {
  // total number of items
  count: number;
  // next url
  next: string;
  // previous url
  previous: string;
  // Actual list
  results: PokemonListItem[];
}

export type PokemonDetailResponse = PokemonDetail;
