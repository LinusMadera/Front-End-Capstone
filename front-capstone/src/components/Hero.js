import React from 'react'
import HeroImage from "../assets/images/bruchetta.svg"

function Hero() {
  return (
        <>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <img src={HeroImage} alt='Bruchetta'/>
        <button>Reserve a table</button>
        </>
    )
}

export default Hero