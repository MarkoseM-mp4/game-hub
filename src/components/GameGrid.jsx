import GameCard from "./GameCard";
import games from "../Data/games";

export default function GameGrid() {
  return (
    <div className="game-grid">
      {games.map((game) => (
        <GameCard key={game.id} {...game} />
      ))}
    </div>
  );
}
