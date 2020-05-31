import {
  GetPokemonListAction,
  pokemonActionTypes,
  setPokemonListAC,
  GetPokemonDetailAction,
  setPokemonDetailAC,
} from "./actions";
import { call, takeLatest, put } from "redux-saga/effects";
import pokemonService from "../../services/pokemon/index";
import { AxiosResponse } from "axios";
import {
  PokemonListResponse,
  PokemonDetailResponse,
} from "../../services/pokemon/interfaces";
import { PokemonDetail } from "./interfaces";

function* getPokemonListSaga(action: GetPokemonListAction) {
  try {
    const response: AxiosResponse<PokemonListResponse> = yield call(
      pokemonService.getPokemonList,
      action.limit
    );

    yield put(setPokemonListAC(response.data.results));
  } catch (e) {
    console.log("Error:", e);
  }
}

function* getPokemonDetailSaga(action: GetPokemonDetailAction) {
  try {
    const response: AxiosResponse<PokemonDetailResponse> = yield call(
      pokemonService.getPokemonDetail,
      action.name
    );
    const {
      id,
      types,
      height,
      abilities,
    }: PokemonDetailResponse = response.data;

    const pokemonDetail: PokemonDetail = {
      id,
      types: types.map((item: any) => item.type.name),
      height,
      abilities: abilities.map((item: any) => item.ability.name),
    };
    yield put(setPokemonDetailAC(pokemonDetail));
  } catch (e) {
    console.log("Error:", e);
  }
}

export function* pokemonWatcherSaga() {
  yield takeLatest(pokemonActionTypes.GET_POKEMON_LIST, getPokemonListSaga);
  yield takeLatest(pokemonActionTypes.GET_POKEMON_DETAIL, getPokemonDetailSaga);
}
