import React from "react";
import './Car.css';

function Car(props) {
    const inputStyle = ['input'];

    if (props.name !== '') {
        inputStyle.push('blue');
    } else {
        inputStyle.push('red');
    }

    return (
        <div className={'Car'}>
            <div>Car name: <strong>{props.name}</strong></div>
            <div>Year: <strong>{props.year}</strong></div>
            <input type="text"
                   onChange={props.onChangeNameCar}
                   value={props.name}
                   className={inputStyle.join(' ')}/>
            <button onClick={props.onDelete}
                    className={'ButtonDelete'}>Delete
            </button>
        </div>
    )
}

export default Car;