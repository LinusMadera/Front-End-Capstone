import {screen, render} from "@testing-library/react"
import Main ,{initializeTimes, updateTimes} from "./Main";

test("Reservation heading appears", () => {
    render(<Main />);
    const heading = screen.getByText("Reservation:");
    expect(heading).toBeInTheDocument();
});

test("Dates initialization works", () => {
    render(<Main></Main>);
    const state = ["1PM","2PM","3PM","4PM"]
    const dates = initializeTimes();
    expect(dates).toEqual(state);
})

test("Changing dates works", () => {
    render(<Main></Main>);
    const state = ["1PM","2PM","3PM","4PM"]
    const dates = updateTimes(state);
    expect(dates).toBe(state);
})