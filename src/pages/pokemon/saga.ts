import {
  GetPokemonListAction,
  pokemonActionTypes,
  setPokemonListAC,
} from "./actions";
import { call, takeLatest, put } from "redux-saga/effects";
import pokemonService from "../../services/pokemon/index";
import { AxiosResponse } from "axios";
import { PokemonListResponse } from "../../services/pokemon/interfaces";

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

export function* pokemonWatcherSaga() {
  yield takeLatest(pokemonActionTypes.GET_POKEMON_LIST, getPokemonListSaga);
}
