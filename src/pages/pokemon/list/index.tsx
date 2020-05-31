import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { getPokemonListAC } from "../actions";
import { numberOfFirstGenerationPokemon } from "./constants";
import { PokemonListItem } from "../interfaces";
import { GlobalState } from "../../../store/interfaces";
import { generateImgUrl } from "../../../utils/image-url-generator";
import pokemonLogo from "../../../assets/pokemon.png";
import styles from "./styles.scss";
import { Link } from "react-router-dom";
import appRoutes from "../../../app-routes";
import { LoadingIndicator } from "../../../components/loading-indicator";

export const PokemonList = () => {
  const dispatch: Dispatch = useDispatch();

  const pokemonList: GlobalState["pokemon"]["pokemonList"] = useSelector(
    (state: GlobalState) => state.pokemon.pokemonList
  );
  const isPokemonListFetching: GlobalState["pokemon"]["isPokemonListFetching"] = useSelector(
    (state: GlobalState) => state.pokemon.isPokemonListFetching
  );

  useEffect(() => {
    dispatch(getPokemonListAC(numberOfFirstGenerationPokemon));
  }, []);

  return (
    <div className={styles.listPageContainer}>
      <div className={styles.listPageHeader}>
        <img src={pokemonLogo} alt={"pokemon logo"} />
        <span className={styles.headerText}>Generation 1</span>
        <span>{pokemonList?.length} Pokemon</span>
      </div>
      {isPokemonListFetching ? (
        <LoadingIndicator />
      ) : (
        <div className={styles.listWrapper}>
          {pokemonList.map(({ name }: PokemonListItem) => (
            <Link
              key={name}
              className={styles.pokemonListItem}
              to={appRoutes.pokemonDetail(name)}
            >
              <img
                src={generateImgUrl(name)}
                loading='lazy'
                alt={`image-${name}`}
              />
              <span>{name}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
