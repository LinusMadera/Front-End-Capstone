import React, { useReducer,useState,useEffect } from 'react'
import BookingForm from './BookingForm'
import { fetchAPI } from '../../Api';


export function updateTimes(state, action) {
    if (action.type === "default") {
    return fetchAPI(new Date(action.payload))
    }
    return state
}
export function initializeTimes(){
    return fetchAPI(new Date())
}

export default function Main() {
    const [AvailableTimes, setAvailableTimes] = useReducer(updateTimes,initializeTimes());
    const [Date,setDate] = useState("");
    useEffect(()=>{
        console.log(Date+"This is being passed to the api")
        setAvailableTimes({type:"default",payload:Date})
    },[Date])
  return (
        <>
        <BookingForm AvailableTimes={AvailableTimes} setAvailableTimes={setAvailableTimes} Date={Date} setDate={setDate}></BookingForm>
        </>
    )
}