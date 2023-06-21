import {screen, render} from "@testing-library/react"
import Main ,{initializeTimes, updateTimes} from "./Main";
import { MemoryRouter } from "react-router-dom";

test("Reservation heading appears", () => {
    render(<MemoryRouter><Main /></MemoryRouter>);
    const heading = screen.getByText("Reservation:");
    expect(heading).toBeInTheDocument();
});

test("Dates initialization works", () => {
    render(<MemoryRouter><Main></Main></MemoryRouter>);
    const dates = initializeTimes();
    expect(dates).not.toEqual([]);
})

test("Changing dates works", () => {
    render(<MemoryRouter><Main></Main></MemoryRouter>);
    const state = "2023-05-05"
    const action = "default"
    const dates = updateTimes(state,action);
    expect(dates).not.toEqual([]);
})