import React,{ useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function BookingForm({Date,setDate, ...props}) {
    const [ChoosenTime, setChoosenTime] = useState("");
    const [NumOfGuests, setNumOfGuests] = useState(1);
    const [Occasion, setOccasion] = useState("");
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm({ChoosenTime,NumOfGuests,Occasion},navigate)
    }


    return (
        <form onSubmit={handleSubmit}>
            <h1>Reservation:</h1>
            <label>Choose a date:
                <input type='date' value={Date} onChange={(e) =>setDate(e.target.value)}/>
            </label>
            <label>Choose a time:
                <select value={ChoosenTime} onChange={(e) => setChoosenTime(e.target.value)}>
                    {props.AvailableTimes.map((time) => {
                        return(
                            <option value={time} key={time}>{time}</option>
                        );
                    })}
                </select>
            </label>
            <label>How many guests?
                <input type='range' value={NumOfGuests} onChange={(e) => {setNumOfGuests(e.target.value)}} min={1} max={10}/>
            </label>
            <label>Is there a special occasion?
                <select value={Occasion} onChange={(e) =>setOccasion(e.target.value)}>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Engagement">Engagement</option>
                </select>
            </label>
            <button type='submit'>Confirm Reservation</button>
        </form>
)
}
