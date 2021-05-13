import React from "react";

function Car(props) {
    return (
        <div>
            <div>Car name: <strong>{props.name}</strong></div>
            <div>Year: <strong>{props.year}</strong></div>
            <button onClick={props.onChangeTitle}>Click</button>
        </div>
    )
}

export default Car;