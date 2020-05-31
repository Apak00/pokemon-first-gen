import React from "react";
import { Router, Route } from "react-router-dom";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { Store } from "redux";
import configureStore from "redux-mock-store";
import { GlobalState } from "../../store/interfaces";

const middlewares: any = [];
const mockStore: any = configureStore(middlewares);
const mockNumber: number = 1;
const mockString: string = "mock";

// Initialize mockstore
const initialState: GlobalState = {
  pokemon: {
    pokemonDetail: {
      id: mockNumber,
      height: mockNumber,
      types: [mockString],
      abilities: [mockString],
    },
    pokemonList: [],
    isPokemonDetailFetching: false,
    isPokemonListFetching: false,
  },
};

// Helper function
export function renderWithRouterMatchAndProvider(
  component: any,
  { path, route }: any
) {
  const generatedHistory = createMemoryHistory({
    initialEntries: [route],
  });

  const store: Store = mockStore(initialState);

  return render(
    <Provider store={store}>
      <Router history={generatedHistory}>
        <Route path={path} component={component} />
      </Router>
    </Provider>
  );
}
