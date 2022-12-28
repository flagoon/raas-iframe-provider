export const Game = ({ game }: { game: IGame }) => {
  return (
    <div className="max-w-6xl border min-w-[280px] mx-auto mt-6">
      <h1 className="text-8xl font-bold text-slate-700 mb-6">{game.title}</h1>
      {game.description.map((description) => (
        <div className="mb-4" key={game.id}>
          {description}
        </div>
      ))}
    </div>
  );
};
