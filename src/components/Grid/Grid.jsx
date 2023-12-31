import { useState } from "react";
import Card from "../Card/card";
import isWinner from "../../helper/checkWinner";
import './Grid.css';

function Grid({ numberOfCards }) {
    const [board, setBoard] = useState(Array(numberOfCards).fill(""));
    const [turn, setTurn] = useState(true); // true = "0", false = "X"
    const [winner, setWinner] = useState(null);

    function play(index) {
        if (turn) {
            board[index] = "0";
        } else {
            board[index] = "X";
        }
        const win = isWinner(board, turn ? "0" : "X");
        if (win) {
            setWinner(win);
        } else if (board.every(cell => cell !== "")) {
            // If the board is full and no winner, it's a tie
            setWinner("Tie");
        }
        setBoard([...board]);
        setTurn(!turn);
    }

    function reset() {
        setTurn(true);
        setWinner(null);
        setBoard(Array(numberOfCards).fill(""));
    }

    return (
        <div className="grid-wrapper">
            {winner && (
                <>
                    {winner !== "Tie" ? (
                        <h1 className="turn-highlight">Winner is {winner}</h1>
                    ) : (
                        <h1 className="turn-highlight">It's a Tie!</h1>
                    )}
                    <button className="reset" onClick={reset}>Reset game</button>
                </>
            )}
            <h1 className="turn-highlight">Current turn: {turn ? '0' : 'X'}</h1>
            <div className="grid">
                {board.map((el, idx) => (
                    <Card gameEnd={winner ? true : false} key={idx} onPlay={play} player={el} index={idx} />
                ))}
            </div>
        </div>
    );
}

export default Grid;
