import React from "react";
//import img1 from '../../public/images/gtr.webp'

function Card({make, model, year, price, image, specs, salePending}){

    const carSpecs = Object.values(specs).map(spec =>{
        return <li key={spec}>{spec}</li>
    })

    return(
        <div className={salePending ? 'sale': 'card'}>
            <h2 className="card-header">{year} {make} {model}</h2>
            <img src={image} alt='gtr'></img> 
            <h3> Price:${price}</h3>
            <h4>Specs</h4>
            <ul>
                {carSpecs}
            </ul>
            <button>Remove Listing</button>
        </div>
    )
}

export default Card