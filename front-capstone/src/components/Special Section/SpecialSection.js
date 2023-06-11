import React from "react"
import Card from "./Card"

export const SpecialSection = () => {
  return (
    <>
    <h2>Special Selection</h2>
    <button>Online Menu</button>
    <Card
        image=""
        cardTitle="Greek Salad"
        cardPrice="12.99"
        cardDescription="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
        imgAlt="Greek Salad"
    ></Card>
    <Card
        image=""
        cardTitle="Bruschetta"
        cardPrice="5.99"
        cardDescription="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
        imgAlt="Bruschetta"
    ></Card>
    <Card
        image=""
        cardTitle="Lemon Dessert"
        cardPrice="5.00"
        cardDescription="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
        imgAlt="Lemon Dessert"
    ></Card>
    </>
  )
}

export default SpecialSection