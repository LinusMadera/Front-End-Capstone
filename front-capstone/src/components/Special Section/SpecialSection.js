import React from "react"
import Card from "./Card"
import LemonDessert from "../../assets/images/lemon dessert.jpg"
import GreekSalad from "../../assets/images/greek salad.jpg"
import Bruchetta from "../../assets/images/bruchetta.svg"
export const SpecialSection = () => {
  return (
    <>
    <div className="specialSectionText">
      <h1>This week specials!</h1>
      <button className="specialButton">Online Menu</button>
    </div>
    <section className="specialSection">
    <Card
        image={GreekSalad}
        cardTitle="Greek Salad"
        cardPrice="12.99"
        cardDescription="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
        imgAlt="Greek Salad"
    ></Card>
    <Card
        image={Bruchetta}
        cardTitle="Bruschetta"
        cardPrice="5.99"
        cardDescription="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
        imgAlt="Bruschetta"
    ></Card>
    <Card
        image={LemonDessert}
        cardTitle="Lemon Dessert"
        cardPrice="5.00"
        cardDescription="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
        imgAlt="Lemon Dessert"
    ></Card>
    </section>
    </>
  )
}

export default SpecialSection