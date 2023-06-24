import React from 'react'
import confirmationLogo from "../../assets/images/orderConfirmed.png"
export default function BookingConfirmation() {
  return (
    <section className='confirmedSection'>
      <img className='confirmedImage' src={confirmationLogo} alt='Checkmark Logo confirmation'></img>
      <h2 className='confirmedText'>Your booking has been confirmed!</h2>
      <a href='/'>
        <button className='confirmedButton'>Back to the main page</button>
      </a>
    </section>
    )
}
