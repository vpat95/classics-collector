import React,{useState} from "react";
import Card from "./Card";
import NewCarForm from "./NewCarForm";
import SearchAndFilter from "./SearchAndFilter"
import {carData} from '../data/carData'

function HomePage(){

    const [cars, setCars] = useState(carData)
    const [formData, setFormData] = useState({
    search: "",
    maxPrice: Infinity,
    inStock: false
    })


    const filteredCars = cars
    .filter(car => car.make.includes(formData.search)||car.model.includes(formData.search))
    .filter(car =>  car.price <= formData.maxPrice)
    .filter(car => formData.inStock ? car.available : true)


    const carCards = filteredCars.map(car => {
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
            <SearchAndFilter formData={formData} setFormData={setFormData}/>
            <div className="cards">{carCards}</div>
            <NewCarForm addCar={addCar} />
        </main>
    )
}

export default HomePage