import GameGrid from "./components/GameGrid";
import "./index.css";

export default function App() {
  return (
    <div className="app">
      <header style={{ marginBottom: "24px" }}>
        <h1>🎮 Game Hub</h1>
        <p style={{ color: "#cbd5f5" }}>
          Discover and play amazing games
        </p>
      </header>

      <GameGrid />
    </div>
  );
}
