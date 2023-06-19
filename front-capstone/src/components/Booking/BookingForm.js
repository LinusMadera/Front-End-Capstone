import React,{ useState} from 'react'

export default function BookingForm(props) {
    const [Date,setDate] = useState("");
    const [ChoosenTime, setChoosenTime] = useState("");
    const [NumOfGuests, setNumOfGuests] = useState(1);
    const [Occasion, setOccasion] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
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

// <form style="display: grid; max-width: 200px; gap: 20px">
//    <label for="res-date">Choose date</label>
//    <input type="date" id="res-date">
//    <label for="res-time">Choose time</label>
//    <select id="res-time ">
//       <option>17:00</option>
//       <option>18:00</option>
//       <option>19:00</option>
//       <option>20:00</option>
//       <option>21:00</option>
//       <option>22:00</option>
//    </select>
//    <label for="guests">Number of guests</label>
//    <input type="number" placeholder="1" min="1" max="10" id="guests">
//    <label for="occasion">Occasion</label>
//    <select id="occasion">
//       <option>Birthday</option>
//       <option>Anniversary</option>
//    </select>
//    <input type="submit" value="Make Your reservation">
// </form>