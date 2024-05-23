import React, { useState } from "react";
import Board from "./Board";
import Piece from "./Piece";

function Game() {
    const [board , setBoard] = useState(initialBoard());

    function initialBoard(){
        const initialBoard = Array(8).fill(null).map(() => Array(8).fill(null));
         // Initialize pawns
    for (let i = 0; i < 8; i++) {
        initialBoard[1][i] = { type: '♙', color: 'black' };
        initialBoard[6][i] = { type: '♙', color: 'white' };
      }
  
      // Initialize rooks
      initialBoard[0][0] = { type: '♖', color: 'black' };
      initialBoard[0][7] = { type: '♖', color: 'black' };
      initialBoard[7][0] = { type: '♖', color: 'white' };
      initialBoard[7][7] = { type: '♖', color: 'white' };

       // Initialize knights
    initialBoard[0][1] = { type: '♘', color: 'black' };
    initialBoard[0][6] = { type: '♘', color: 'black' };
    initialBoard[7][1] = { type: '♘', color: 'white' };
    initialBoard[7][6] = { type: '♘', color: 'white' };

    // Initialize bishops
    initialBoard[0][2] = { type: '♗', color: 'black' };
    initialBoard[0][5] = { type: '♗', color: 'black' };
    initialBoard[7][2] = { type: '♗', color: 'white' };
    initialBoard[7][5] = { type: '♗', color: 'white' };
    
    // Initialize queens
    initialBoard[0][3] = { type: '♕', color: 'black' };
    initialBoard[7][3] = { type: '♕', color: 'white' };

    // Initialize kings
    initialBoard[0][4] = { type: '♔', color: 'black' };
    initialBoard[7][4] = { type: '♔', color: 'white' };




        return initialBoard;
    }

    return(
        <>
        <h1>Chess Game</h1>
        <Board>
        {board.map((row, rowIndex) => (
          row.map((piece, colIndex) => (
            piece && <Piece key={`${rowIndex}-${colIndex}`} type={piece.type} color={piece.color} />
          ))
        ))}
      </Board>
        </>
    )

}
export default Game;