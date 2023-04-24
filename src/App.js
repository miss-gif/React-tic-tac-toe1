import "./App.css";
import Board from "./components/Board";

function App() {
  return (
    <div className="game">
      <div className="game__board">
        <Board></Board>
      </div>
      <div className="game__info">
        <div>game__info</div>
      </div>
    </div>
  );
}

export default App;
