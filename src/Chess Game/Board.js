import React from "react";
import Square from "./Square";

function Board(){
    const renderSquare = () => {
        const squares = [];
        for (let i = 0; i < 8; i++){
            for(let j = 0; j < 8; j++){
                const isDark = (i+j)%2 === 1;
                squares.push(
                    <Square key={`${i}-${j}`} isDark= {isDark}>

                    </Square>
                )

            }

        }
        return squares;
    }
    return(
        <div className="board">{renderSquare()}</div>
    )
}
export default Board;