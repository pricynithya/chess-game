import React from "react";

function Square(props) {
    return(
        <>
        <div className={`square ${props.isDark ? 'dark' : 'light' }`}>
            {props.children}
        </div>
        </>
    );
}
export default Square;