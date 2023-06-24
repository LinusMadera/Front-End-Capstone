import React from 'react'
import Icon from "../../assets/Icons/Dish icon.svg";
export default function Card({image,cardTitle,cardPrice,cardDescription,imgAlt}) {
  return (
        <section className='specialCard'>
            <img className="specialImage"src={image} alt={imgAlt}></img>
            <div className='specialCardContent'>
                <div className='specialCardHead'>
                    <h3 className='specialCardTitle'>{cardTitle}</h3>
                    <p className='specialCardPrice'>${cardPrice}</p>
                </div>

                <p>{cardDescription}</p>

                <div className='specialCardFooter'>
                    <a href='./menu'>Order a delivery</a>
                    <img src={Icon} alt=""></img>
                </div>
            </div>
        </section>
    )
}
