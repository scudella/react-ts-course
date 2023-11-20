import { type ReactNode, createContext, useReducer, useContext } from 'react';

type BookingSession = {
  name: string;
  email: string;
  sessionId: string | undefined;
};

type BookingState = {
  bookings: BookingSession[];
};

const initialState: BookingState = {
  bookings: [],
};

type BookingContextValue = BookingState & {
  addBooking: (bookingData: BookingSession) => void;
  deleteBooking: (id: string) => void;
};

type BookingContextProviderProps = {
  children: ReactNode;
};

type AddBookingAction = {
  type: 'ADD_BOOKING';
  payload: BookingSession;
};

type DeleteBookingAction = {
  type: 'DELETE_BOOKING';
  payload: { id: string };
};

type Action = AddBookingAction | DeleteBookingAction;

function bookingReducer(state: BookingState, action: Action): BookingState {
  if (action.type === 'ADD_BOOKING') {
    return {
      ...state,
      bookings: [
        ...state.bookings,
        {
          name: action.payload.name,
          email: action.payload.email,
          sessionId: action.payload.sessionId,
        },
      ],
    };
  } else if (action.type === 'DELETE_BOOKING') {
    const newBooking = state.bookings.filter(
      (booking) => action.payload.id !== booking.sessionId
    );
    return {
      ...state,
      bookings: [...newBooking],
    };
  }
  return state;
}

export const BookingContext = createContext<BookingContextValue | null>(null);

export function useBookingsContext() {
  const BookingsCtx = useContext(BookingContext);
  if (BookingsCtx === null) {
    throw new Error('BookingsContext is null');
  }
  return BookingsCtx;
}

export default function BookingContextProvider({
  children,
}: BookingContextProviderProps) {
  const [bookingState, dispatch] = useReducer(bookingReducer, initialState);

  const ctx: BookingContextValue = {
    bookings: bookingState.bookings,
    addBooking(bookingData) {
      dispatch({ type: 'ADD_BOOKING', payload: bookingData });
    },
    deleteBooking(id) {
      dispatch({ type: 'DELETE_BOOKING', payload: { id } });
    },
  };
  return (
    <BookingContext.Provider value={ctx}>{children}</BookingContext.Provider>
  );
}
