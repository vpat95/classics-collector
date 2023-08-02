import React from "react";
import Card from "./Card";

function HomePage(){
    return (
        <main>
            <Card make={'Nissan'} model={'Skyline'} year={1998} price={60000} image={'images/gtr.webp'}/>
            <Card make={'Toyota'} model={'Supra'} year={1998} price={50000} image={'images/supra.webp'}/>
            <Card make={'Mazda'} model={'RX-7'} year={1995} price={45000} image={'images/rx7.jpeg'}/>
            <Card make={'Honda'} model={'S2000'} year={2000} price={30000} image={'images/s2000.jpeg'}/>
            <Card make={'Mitsubishi'} model={'Evolution'} year={2002} price={40000} image={'images/evo.jpg'}/>
            <Card make={'Range'} model={'Rover'} year={2020} price={5000} image={'images/range.jpeg'}/>
        </main>
    )
}


export default HomePage