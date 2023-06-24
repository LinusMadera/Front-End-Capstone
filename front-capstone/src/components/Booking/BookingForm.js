import React,{ useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChampagneGlasses, faChevronDown, faClock, faCalendarDays, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'

export default function BookingForm({SelectedDate,setSelectedDate, ...props}) {
    const [ChoosenTime, setChoosenTime] = useState("");
    const [NumOfGuests, setNumOfGuests] = useState(1);
    const [Occasion, setOccasion] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);
    const [isTimeValid, setIsTimeValid] = useState(false);
    const [isOccasionValid, setIsOccasionValid] = useState(false);
    const [isDateValid, setIsDateValid] = useState(false);

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
        <form onSubmit={handleSubmit} className='formSection'>
            <h1 className='formTitle'>Reservation:</h1>
            <div className='attributesReservation'>
            <label htmlFor='pickDate'><FontAwesomeIcon icon={faCalendarDays} /> Select the Date        <FontAwesomeIcon icon={faChevronDown} />
                    <input
            id="pickDate"
            className={`dateInput ${isDateValid ? "valid" : "invalid"}`}
            type="date"
            value={SelectedDate}
            onChange={(e) => {
                setSelectedDate(e.target.value);
                setIsDateValid(e.target.value !== "");
            }}
            required
            min={today}
        />
            </label>
            <label htmlFor="pickTime">
            <FontAwesomeIcon icon={faClock} /> Select a time{" "}
            <FontAwesomeIcon icon={faChevronDown} />
            <select
                id="pickTime"
                className={`${isTimeValid ? "valid" : "invalid"}`}
                defaultValue=""
                onChange={(e) => {
                    setChoosenTime(e.target.value);
                    setIsTimeValid(e.target.value !== "");
                }}
                required
            >
            <option value="" key="default" disabled hidden>
                Select a time
            </option>
            {props.AvailableTimes.map((time) => {
                return (
                <option value={time} key={time}>
                    {time}
                </option>
                );
            })}
            </select>
        </label>
            <label htmlFor='numGuests'><FontAwesomeIcon icon={faPeopleGroup} /> Guests *
                <input id='numGuests' type='range' value={NumOfGuests} onChange={(e) => {setNumOfGuests(e.target.value)}} min={1} max={10}/>{NumOfGuests}
            </label>
            <label htmlFor="specialOccasion">
            <FontAwesomeIcon icon={faChampagneGlasses} /> Occasion{" "}
            <FontAwesomeIcon icon={faChevronDown} />
            <select
            id="specialOccasion"
            className={`${isOccasionValid ? "valid" : "invalid"}`}
            defaultValue=""
            onChange={(e) => {
                setOccasion(e.target.value);
                setIsOccasionValid(e.target.value !== "");
            }}
            >
            <option value="" disabled hidden>
                Select an occasion
            </option>
            <option value="NoOccasion">No Special Occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Engagement">Engagement</option>
            </select>
            </label>
            </div>
            <button id="SubmitForm" data-testid="SubmitForm" aria-label='submit form' type='submit' disabled={!isFormValid}>Confirm Reservation</button>
    </form>
)
}
