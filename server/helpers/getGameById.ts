import { data } from "../games";

export const getGameById = (id: "1" | "2" | "3" ) => {
  const game: IGame = data[id];
  return game;
};
