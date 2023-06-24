import React from 'react'
import HeroImage from "../assets/images/restauranfood.jpg"

function Hero() {
  return (
        <section className="heroSection">
          <div className='heroFlex'>
            <h1 className='heroTitle'>Little Lemon</h1>
            <h2 className='heroSubTitle'>Chicago</h2>
            <p className='heroParagraph'>We are a family owned Mediterranean restaurant, focused on traditional recupes served with a modern twist.</p>
            <a href='/booking'>
            <button className='heroButton'>Reserve a table</button>
            </a>
          </div>
        <img className='heroImage' src={HeroImage} alt='Bruchetta'/>
        </section>
    )
}

export default Hero