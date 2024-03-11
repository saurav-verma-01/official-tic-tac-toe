import { useState } from "react";
import Square from "./components/Square";

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function App() {
  const [turn, setTurn] = useState("X");
  const [squares, setSquares] = useState(Array(9).fill(null));

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (turn == "X" ? "X" : "O");
  }

  const handleSquareClick = (i) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    if (squares[i]) return;
    const newSquares = squares.slice();
    newSquares[i] = turn;
    setSquares(newSquares);
    setTurn((prev) => (prev === "X" ? "O" : "X"));
  };

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square onSelect={() => handleSquareClick(0)} value={squares[0]} />
        <Square value={squares[1]} onSelect={() => handleSquareClick(1)} />
        <Square value={squares[2]} onSelect={() => handleSquareClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSelect={() => handleSquareClick(3)} />
        <Square value={squares[4]} onSelect={() => handleSquareClick(4)} />
        <Square value={squares[5]} onSelect={() => handleSquareClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSelect={() => handleSquareClick(6)} />
        <Square value={squares[7]} onSelect={() => handleSquareClick(7)} />
        <Square value={squares[8]} onSelect={() => handleSquareClick(8)} />
      </div>
    </>
  );
}
