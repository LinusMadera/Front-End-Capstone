import React from 'react'
import Cards from './Cards'
import Sarah from '../../assets/images/sarah.jpg'
import John from '../../assets/images/Paul.jpg'
import Paul from '../../assets/images/john.jpg'

export default function Testimonials() {
  return (<div className='reviewSection'>

    <h1 className='reviewCardsHeading'>Testimonials</h1>
    <section className='reviewCards'>
        <Cards CardName="John" CardPicture={John} CardRating="5/5" CardReview="The best lemon dessert in town!"></Cards>
        <Cards CardName="Paul" CardPicture={Paul} CardRating="4/5" CardReview="The best Bruchetta ever!"></Cards>
        <Cards CardName="Sarah" CardPicture={Sarah} CardRating="5/5" CardReview="The greek salad is just perfect!"></Cards>
    </section>
    </div>)
}
