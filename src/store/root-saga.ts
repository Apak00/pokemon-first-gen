import { all } from "redux-saga/effects";
import { pokemonWatcherSaga } from "../pages/pokemon/saga";

export function* rootSaga() {
  yield all([pokemonWatcherSaga()]);
}
