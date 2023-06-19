import React, { useReducer } from 'react'
import BookingForm from './BookingForm'
import { useEffect } from 'react';


export function updateTimes(state) {
        return state
}
export function initializeTimes(){
    return["1PM","2PM","3PM","4PM"]
}
export default function Main() {
    const [AvailableTimes, setAvailableTimes] = useReducer(updateTimes,initializeTimes());
    useEffect ((AvailableTimes) => {
        setAvailableTimes({type:"default"})
    },[])
  return (
        <>
        <BookingForm AvailableTimes={AvailableTimes} setAvailableTimes={setAvailableTimes}></BookingForm>
        </>
    )
}
