import React, { useEffect, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { GlobalState } from "../../../store/interfaces";
import { generateImgUrl } from "../../../utils/image-url-generator";
import { getPokemonDetailAC } from "../actions";
import { PokemonDetailProps } from "./interfaces";
import styles from "./styles.scss";
import appRoutes from "../../../app-routes";
import { Link } from "react-router-dom";
import { LoadingIndicator } from "../../../components/loading-indicator";

export const PokemonDetail: FC<PokemonDetailProps> = (
  props: PokemonDetailProps
) => {
  const dispatch: Dispatch = useDispatch();
  const name: string = props.match.params.name;
  const pokemonDetail: GlobalState["pokemon"]["pokemonDetail"] = useSelector(
    (state: GlobalState) => state.pokemon.pokemonDetail
  );
  const isPokemonDetailFetching: GlobalState["pokemon"]["isPokemonDetailFetching"] = useSelector(
    (state: GlobalState) => state.pokemon.isPokemonDetailFetching
  );

  useEffect(() => {
    dispatch(getPokemonDetailAC(name));
  }, []);

  return (
    <div className={styles.detailPageContainer}>
      {isPokemonDetailFetching ? (
        <LoadingIndicator />
      ) : (
        <>
          {pokemonDetail && (
            <div className={styles.detailCard}>
              <Link className={styles.detailExit} to={appRoutes.pokemonList}>
                X
              </Link>
              <img src={generateImgUrl(name)} />
              <div className={styles.detailFeaturesContainer}>
                <div>
                  <span className={styles.detailTitleText}>ID: </span>
                  <span className={styles.detailValueText}>
                    {pokemonDetail.id}
                  </span>
                </div>
                <div>
                  <span className={styles.detailTitleText}>Type: </span>
                  <span className={styles.detailValueText}>
                    {pokemonDetail.types.join(", ")}
                  </span>
                </div>
                <div>
                  <span className={styles.detailTitleText}>Height: </span>
                  <span className={styles.detailValueText}>
                    {pokemonDetail.height}
                  </span>
                </div>
                <div>
                  <span className={styles.detailTitleText}>Abilities: </span>
                  <ul className={styles.detailValueText}>
                    {pokemonDetail.abilities.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};
