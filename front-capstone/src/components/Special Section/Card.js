import React from 'react'
import Icon from "../../assets/Icons/Dish icon.svg";
export default function Card({image,cardTitle,cardPrice,cardDescription,imgAlt}) {
  return (
        <section>
            <img src={image} alt={imgAlt}></img>
            <h3>{cardTitle}</h3>
            <p>`$ ${cardPrice}`</p>
            <p>{cardDescription}</p>
            <a href='./menu'>Order a delivery</a>
            <img src={Icon} alt=""></img>
        </section>
    )
}
