import { GameMechanic } from "./GameMechanic";

export const Game = ({ game }: { game: IGame }) => {
  return (
    <div className="max-w-6xl border min-w-[280px] mx-auto mt-6">
      <h1 className="text-8xl font-bold text-slate-700 mb-6">{game.title}</h1>
      {game.description.map((description, i) => (
        <div className="mb-4 text-slate-700" key={i}>
          {description}
        </div>
      ))}
      <GameMechanic mechanic={game.gameMechanic} />
    </div>
  );
};
