import './App.css';
import {Component} from "react";
import Car from "./Car/Car";

class App extends Component {

    state = {
        cars: [
            {name: 'Ford', year: 2018},
            {name: 'Audi', year: 2016},
            {name: 'Mazda', year: 2010},
        ],
        pageTitle: 'Hello Cars',
        showCars: false,
    };

    toggleCarsHandler = () => {
        this.setState({
            showCars: !this.state.showCars,
        })
    };

    changeTitleHandler = (pageTitle) => {
        this.setState({
            pageTitle
        })
    }

    render() {
        const divStyle = {
            textAlign: 'center',
        }

        return (
            <div style={divStyle}>
                <h1>{this.state.pageTitle}</h1>
                <button onClick={this.toggleCarsHandler}>Toggle Cars</button>

                {
                    this.state.showCars ?
                        this.state.cars.map((car, index) => {
                            return (
                                <Car key={index}
                                     name={car.name}
                                     year={car.year}
                                     onChangeTitle={() => this.changeTitleHandler(car.name)}/>
                            )
                        })
                        : null
                }

                {/*<Car name={cars[0].name}*/}
                {/*     year={cars[0].year}*/}
                {/*     onChangeTitle={() => this.changeTitleHandler(cars[0].name)}/>*/}
                {/*<Car name={cars[1].name}*/}
                {/*     year={cars[1].year}*/}
                {/*     onChangeTitle={this.changeTitleHandler.bind(this, cars[1].name)}/>*/}
                {/*<Car name={cars[2].name}*/}
                {/*     year={cars[2].year}*/}
                {/*     onChangeTitle={this.changeTitleHandler.bind(this, cars[2].name)}/>*/}
            </div>
        )
    }
}

export default App;
