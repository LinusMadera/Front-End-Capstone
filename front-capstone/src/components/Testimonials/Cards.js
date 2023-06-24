import React from 'react'

export default function Cards({CardName,CardPicture,CardRating,CardReview}) {
  return (
    <section className='reviewCard'>
        <h3>Rating: {CardRating}</h3>
        <div className='reviewCardCenterSection'>
          <img className='reviewCardImage' src={CardPicture} alt={`Reviewer ${CardName}`}></img>
          <h3>{CardName}</h3>
        </div>
        <p>{CardReview}</p>
    </section>
    )
}
