import React from "react";
//import img1 from '../../public/images/gtr.webp'

function Card({make, model, year, price, image}){
    return(
        <div className="card">
            <h2 className="card-header">{make} {model}</h2>
            <img src={image} alt='gtr'></img> 
            <h3>Year:{year}</h3>
            <h3> Price:${price}</h3>

        </div>
    )
}

export default Card