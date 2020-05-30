import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { getPokemonListAC } from "../actions";
import { numberOfFirstGenerationPokemon } from "./constants";
import { PokemonListItem } from "../interfaces";
import { GlobalState } from "../../../store/interfaces";

export const PokemonList = () => {
  const dispatch: Dispatch = useDispatch();

  const pokemonList: GlobalState["pokemon"]["pokemonList"] = useSelector(
    (state: GlobalState) => state.pokemon.pokemonList
  );

  useEffect(() => {
    console.log("PAGE LANDED");
    dispatch(getPokemonListAC(numberOfFirstGenerationPokemon));
  }, []);

  return (
    <div>
      List page
      {pokemonList.map((item: PokemonListItem) => (
        <div>{item.name}</div>
      ))}
    </div>
  );
};
