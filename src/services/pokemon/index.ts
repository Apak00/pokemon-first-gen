import axios from "axios";
import endpoints from "../endpoints";

// We could use qs library to create query string
export default {
  getPokemonList: (limit: number) =>
    axios.get(`${endpoints.pokemonList}${limit ? `?limit=${limit}` : ""}`),
  getPokemonDetail: (name: string) => axios.get(endpoints.pokemonDetail(name)),
};
