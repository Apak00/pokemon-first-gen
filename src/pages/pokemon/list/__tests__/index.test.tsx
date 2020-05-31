import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { PokemonList } from "../index";
import { renderWithRouterMatchAndProvider } from "../../../../utils/test-helpers/render-with-router";

it("renders fields", () => {
  const { getByAltText } = renderWithRouterMatchAndProvider(PokemonList, {
    route: "/pokemon/bulbasaur",
    path: "/pokemon/:name",
  });

  expect(getByAltText("pokemon logo")).toBeTruthy();
});
