import { RouteComponentProps } from "react-router-dom";

export interface PokemonDetailProps
  extends RouteComponentProps<{ name: string }> {}
