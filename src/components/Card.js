import React from "react";
//import img1 from '../../public/images/gtr.webp'

function Card({make, model, year, price, image, specs}){

    const carSpecs = Object.values(specs).map(spec =>{
        return <li key={spec}>{spec}</li>
    })

    return(
        <div className="card">
            <h2 className="card-header">{make} {model}</h2>
            <img src={image} alt='gtr'></img> 
            <h4>Year:{year}</h4>
            <h3> Price:${price}</h3>
            <h4>Specs</h4>
            <ul>
                {carSpecs}
            </ul>
        </div>
    )
}

export default Card