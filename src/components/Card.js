import React from "react";
//import img1 from '../../public/images/gtr.webp'

function Card({car, removeCar}){

    const carSpecs = Object.values(car.specs).map(spec =>{
        return <li key={spec}>{spec}</li>
    })

    function handleDelete(id){
        removeCar(id)
    }


    return(
        <div id={car.id} className={car.salePending ? 'sale': 'card'}>
            <h2 className="card-header">{car.year} {car.make} {car.model}</h2>
            <img src={car.image} alt={car.model}></img> 
            <h3> Price:${car.price.toLocaleString()}</h3>
            <h4>Specs</h4>
            <ul>
                {carSpecs}
            </ul>
            <button onClick={() => handleDelete(car.id)}>Remove Listing</button>
        </div>
    )
}

export default Card