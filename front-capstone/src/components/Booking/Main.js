import React, { useReducer,useState,useEffect } from 'react'
import BookingForm from './BookingForm'
import { fetchAPI, submitAPI } from '../../Api';


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
    const [SelectedDate,setSelectedDate] = useState("");

    function submitForm (formData,navigate){
        if (submitAPI(formData)){
            navigate('/bookingConfirmed')
        }
    }

    useEffect(()=>{
        console.log(SelectedDate+"This is being passed to the api")
        setAvailableTimes({type:"default",payload:SelectedDate})
    },[SelectedDate])
    console.log("Main.js Available times:"+AvailableTimes)
  return (
        <>
        <BookingForm AvailableTimes={AvailableTimes} setAvailableTimes={setAvailableTimes} SelectedDate={SelectedDate} setSelectedDate={setSelectedDate} submitForm={submitForm}></BookingForm>
        </>
    )
}
