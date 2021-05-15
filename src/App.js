import './App.css';
import {Component} from "react";
import Car from "./Car/Car";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cars: [
                {name: 'Ford', year: 2018},
                {name: 'Audi', year: 2016},
                {name: 'Mazda', year: 2010},
            ],
            pageTitle: 'Hello Cars',
            showCars: false,
        };
    }

    toggleListCarsHandler = () => {
        this.setState({
            showCars: !this.state.showCars,
        })
    };

    onChangeNameCar = (name, index) => {
        const car = this.state.cars[index];
        car.name = name;
        const cars = [...this.state.cars];
        cars[index] = car;
        this.setState({
            cars: cars,
        });
    };

    deleteCarHandler = (index) => {
        const cars = this.state.cars.concat();
        cars.splice(index, 1);
        this.setState({cars});
    };

    render() {
        const divStyle = {
            textAlign: 'center',
        }

        return (
            <div style={divStyle}>
                <h1>{this.state.pageTitle}</h1>
                <button onClick={this.toggleListCarsHandler}
                        className={'toggleButton'}>Toggle Cars
                </button>

                {
                    this.state.showCars ?
                        this.state.cars.map((car, index) => {
                            return (
                                <Car key={index}
                                     name={car.name}
                                     year={car.year}
                                     onDelete={() => this.deleteCarHandler(index)}
                                     onChangeNameCar={e => this.onChangeNameCar(e.target.value, index)}/>
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
