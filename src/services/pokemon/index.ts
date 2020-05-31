import axios from "axios";
import endpoints from "../endpoints";

// We could use qs library to create query string
export default {
  getPokemonList: (limit: number, searchText: string) => {
    const searchParams = new URLSearchParams();
    searchParams.set("searchText", searchText);
    searchParams.set("limit", String(limit));
    const searchQuery: string = searchParams.toString() || "";

    return axios.get(`${endpoints.pokemonList}?${searchQuery}`);
  },
  getPokemonDetail: (name: string) => axios.get(endpoints.pokemonDetail(name)),
};
