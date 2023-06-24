import {screen, render, fireEvent,waitFor, cleanup} from "@testing-library/react"
import Main ,{initializeTimes, updateTimes} from "./Main";
import { MemoryRouter } from "react-router-dom";
import BookingForm from "./BookingForm";

afterEach(cleanup);
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



test('Form validation works', async () => {
    const mockSubmitForm = jest.fn();
    const mockSelectedDate = '2022-01-01';
    const mockSetSelectedDate = jest.fn();
    const mockAvailableTimes = ['12:00', '13:00', '14:00'];
    render(
    <MemoryRouter>
        <BookingForm
        SelectedDateDate={mockSelectedDate}
        setSelectedDate={mockSetSelectedDate}
        submitForm={mockSubmitForm}
        AvailableTimes={mockAvailableTimes}
    /></MemoryRouter>
    );
    const submitButton = screen.getByTestId("SubmitForm");

    expect(submitButton).toBeDisabled();
    fireEvent.change(screen.getByLabelText(/select a time/i), { target: { value: '12:00' } });
    fireEvent.change(screen.getByLabelText(/Guests/i), { target: { value: 1 } });
    fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'Birthday' } });

    await waitFor(() => expect(screen.getAllByTestId("SubmitForm")[0]).toBeEnabled());

    fireEvent.click(submitButton);
    expect(mockSubmitForm).toHaveBeenCalledWith(
    { ChoosenTime: '12:00', NumOfGuests: 1, Occasion: 'Birthday' },
    expect.any(Function)
    );
});