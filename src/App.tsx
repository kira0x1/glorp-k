import "./index.css";
import { Navbar } from "./components/Navbar";
import { Game } from "./components/Game";

export function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="game-container">
        <Game />
      </div>
    </div>
  );
}

export default App;
