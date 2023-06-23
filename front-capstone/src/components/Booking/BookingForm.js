import React,{ useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function BookingForm({SelectedDate,setSelectedDate, ...props}) {
    const [ChoosenTime, setChoosenTime] = useState("");
    const [NumOfGuests, setNumOfGuests] = useState(1);
    const [Occasion, setOccasion] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        if (SelectedDate !== "" && ChoosenTime !== "" && Occasion !== ""){
            setIsFormValid(true)
        }
    },[SelectedDate,ChoosenTime,Occasion]);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm({ChoosenTime,NumOfGuests,Occasion},navigate)
    }

    const today = new Date();
    return (
        <form onSubmit={handleSubmit}>
            <h1>Reservation:</h1>
            <label htmlFor='pickDate'>Choose a date:
                <input id='pickDate' type='date' value={SelectedDate} onChange={(e) => setSelectedDate(e.target.value)} required min={today}/>
            </label>
            <label htmlFor='pickTime'>Choose a time:
                <select id='pickTime' value={ChoosenTime} onChange={(e) => setChoosenTime(e.target.value)} required >
                    <option value="" key="default" disabled>Select a time</option>
                    {props.AvailableTimes.map((time) => {
                        return(
                            <option value={time} key={time}>{time}</option>
                        );
                    })}
                </select>
            </label>
            <label htmlFor='numGuests'>How many guests?
                <input id='numGuests' type='range' value={NumOfGuests} onChange={(e) => {setNumOfGuests(e.target.value)}} min={1} max={10}/>
            </label>
            <label htmlFor='specialOccasion'>Is there a special occasion?
                <select id='specialOccasion' value={Occasion} onChange={(e) =>setOccasion(e.target.value)}>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Engagement">Engagement</option>
                </select>
            </label>
            <button data-testid="SubmitForm" aria-label='submit form' type='submit' disabled={!isFormValid}>Confirm Reservation</button>
        </form>
)
}
