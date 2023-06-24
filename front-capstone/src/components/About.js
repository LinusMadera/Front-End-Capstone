import React from 'react'
import MarioAdrianA from '../assets/images/Mario and Adrian A.jpg'
import MarioAdrianB from '../assets/images/restaurant chef B.jpg'
export default function About() {
  return (
        <section className='aboutSection'>
            <div className='aboutText'>
                <h2 className='aboutTitle'>Little Lemon</h2>
                <p className='aboutBio'>Little Lemon is a mediterranean restaurant based in Chicago, founded by lifelong friends chef Mario and chef Adrian.</p>
            </div>
            <div className='aboutImages'>
                <img className='aboutImageA' src={MarioAdrianA} alt='The owners, Mario and Adrian'></img>
                <img className='aboutImageB' src={MarioAdrianB} alt='The owners, Mario and Adrian'></img>
            </div>
        </section>
    )
}
