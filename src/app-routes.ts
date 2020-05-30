export default {
  pokemonList: "/pokemon",
  pokemonDetail: (name: string = ":name") => `/pokemon/${name}`,
};
