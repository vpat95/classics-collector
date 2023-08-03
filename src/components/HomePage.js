import React,{useState} from "react";
import Card from "./Card";
import NewCarForm from "./NewCarForm";
import {carData} from '../data/carData'

function HomePage(){

    const [cars, setCars] = useState(carData)

    const carCards = cars.map(car => {
        return <Card 
        key={car.id}
        car={car}
        removeCar = {removeCar}
        />
    })

    function addCar(carObj){
        setCars([...cars, carObj])
    }

    function removeCar(id){
        setCars(cars.filter(car => (car.id !== id)))
    }

    return(
        <main>
            {carCards}
            <NewCarForm addCar={addCar} />
        </main>
    )
}

export default HomePage