import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { PokemonList } from "./pages/pokemon-list";
import routes from "./app-routes";
import { PokemonDetail } from "./pages/pokemon-detail";

export const App = () => {
  return (
    <div>
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
    </div>
  );
};
