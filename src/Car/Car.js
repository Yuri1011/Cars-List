import React from "react";

function Car(props) {
    return (
        <div>
            <div>Car name: <strong>{props.name}</strong></div>
            <div>Year: <strong>{props.year}</strong></div>
        </div>
    )
}

export default Car;