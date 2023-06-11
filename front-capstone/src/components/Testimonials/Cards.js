import React from 'react'

export default function Cards({CardName,CardPicture,CardRating,CardReview}) {
  return (
    <section>
        <h3>{CardRating}</h3>
        <img src={CardPicture} alt={`Reviewer ${CardName}`}></img>
        <h3>{CardName}</h3>
        <p>{CardReview}</p>
    </section>
    )
}
