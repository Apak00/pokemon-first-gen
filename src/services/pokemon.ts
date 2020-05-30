import axios from "axios";
import endpoints from "./endpoints";

export default {
  pokemonList: (limit: number) =>
    axios.get(`endpoints.pokemonList${limit ? `limit?=${limit}` : ""}`),
  pokemonDetail: (name: string) => axios.get(endpoints.pokemonDetail(name)),
};
