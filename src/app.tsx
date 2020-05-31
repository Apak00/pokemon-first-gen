import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { PokemonList } from "./pages/pokemon/list";
import routes from "./app-routes";
import { PokemonDetail } from "./pages/pokemon/detail";
import { Provider } from "react-redux";
import { store } from "./store/store";

export const App = () => {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path={routes.pokemonDetail()}
              component={PokemonDetail}
            />
            <Route exact path={routes.pokemonList} component={PokemonList} />
            <Route>
              <Redirect to={routes.pokemonList} />
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
};
