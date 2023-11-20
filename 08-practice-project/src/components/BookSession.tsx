import { useRef, type FormEvent } from 'react';
import Button from './Button';
import Input from './Input';
import Modal from './Modal';
import { useBookingsContext } from '../store/bookingContext';

type BookSessionProps = {
  onOpen: React.Dispatch<React.SetStateAction<boolean>>;
  sessionId: string | undefined;
};

const BookSession = ({ onOpen, sessionId }: BookSessionProps) => {
  const form = useRef<HTMLFormElement>(null);
  const bookingsCtx = useBookingsContext();
  const { addBooking } = bookingsCtx;

  const handleBookingSession = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    addBooking({
      name: data.name.toString(),
      email: data.email.toString(),
      sessionId,
    });
    onOpen(false);
  };

  return (
    <Modal isOpen={true}>
      <form ref={form} className='control' onSubmit={handleBookingSession}>
        <h3>Book Session</h3>
        <Input name='name' label='your name' type='text' />
        <Input name='email' label='your email' type='email' />
        <div className='actions'>
          <Button to='/sessions' textOnly>
            Cancel
          </Button>
          <Button type='submit' textOnly={false}>
            Book Session
          </Button>
        </div>
      </form>
    </Modal>
  );
};
export default BookSession;
