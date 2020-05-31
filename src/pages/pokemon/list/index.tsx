import React, { useEffect, ChangeEvent } from "react";
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

export const PokemonList = (props: any) => {
  const dispatch: Dispatch = useDispatch();

  // Redux connections
  const pokemonList: GlobalState["pokemon"]["pokemonList"] = useSelector(
    (state: GlobalState) => state.pokemon.pokemonList
  );
  const isPokemonListFetching: GlobalState["pokemon"]["isPokemonListFetching"] = useSelector(
    (state: GlobalState) => state.pokemon.isPokemonListFetching
  );

  // Router connections
  const urlParams = new URLSearchParams(window.location.search);
  const searchText: string = urlParams.get("searchText") || "";

  useEffect(() => {
    dispatch(getPokemonListAC(numberOfFirstGenerationPokemon, searchText));
  }, [searchText]);

  const onSearchInputChange: (e: ChangeEvent<HTMLInputElement>) => void = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    urlParams.set("searchText", e.target.value);
    props.history.push({
      pathname: appRoutes.pokemonList,
      search: urlParams.toString(),
    });
  };

  return (
    <div className={styles.listPageContainer}>
      <div className={styles.listPageHeader}>
        <img src={pokemonLogo} alt={"pokemon logo"} />
        <span className={styles.headerText}>Generation 1</span>
        <span>{pokemonList?.length} Pokemon</span>
        <input onChange={onSearchInputChange} value={searchText} />
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
