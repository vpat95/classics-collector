import React,{useState} from "react";
import Card from "./Card";
import NewCarForm from "./NewCarForm";
import carData from '../data/carData'

function HomePage(){

    const [cars, setCars] = useState(carData)

    const carCards = cars.map(car => {
        return <Card 
        style = {{text: 'red'}} 
        key = {car.id} 
        make = {car.make} 
        model = {car.model} 
        year = {car.year} 
        price = {car.price.toLocaleString()} 
        image = {car.image} 
        specs = {car.specs} 
        salePending = {car.salePending}/>
    })

    function addCar(carObj){
        (setCars([...cars, carObj]))
    }

    return(
        <main>
            {carCards}
            <NewCarForm addCar={addCar} />
        </main>
    )
}

export default HomePage