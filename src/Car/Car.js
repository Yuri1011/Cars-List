import React from "react";

function Car(props) {
    return (
        <div style={
            {
                border: '2px solid green',
                margin: '0px auto',
                marginTop: '10px',
                padding: '10px',
                width: '250px',
                borderRadius: '10px',
            }
        }>
            <div>Car name: <strong>{props.name}</strong></div>
            <div>Year: <strong>{props.year}</strong></div>
            <input type="text" onChange={props.onChangeNameCar} value={props.name}/>
            <button onClick={props.onDelete} style={
                {
                    color: "red"
                }
            }>Delete
            </button>
        </div>
    )
}

export default Car;