import Button from './Button';
import Modal from './Modal';
import { useBookingsContext } from '../store/bookingContext';
import { SESSIONS } from '../dummy-sessions';

type UpcomingSessionsProps = {
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
};

const UpcomingSessions = ({ onClose }: UpcomingSessionsProps) => {
  const { bookings, deleteBooking } = useBookingsContext();

  const handleCancel = (id: string) => {
    deleteBooking(id);
  };

  const handleClose = () => {
    onClose(false);
  };

  return (
    <Modal isOpen={true}>
      <div>
        <h3>Upcoming Sessions</h3>
        {bookings.map((booking) => {
          const session = SESSIONS.find(
            (session) => session.id === booking.sessionId
          );
          return (
            <article key={booking.sessionId} className='upcoming-session'>
              <div>
                <h3>{session!.title}</h3>
                <p>{session!.summary}</p>
                <time>
                  {new Date(session!.date).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })}
                </time>
              </div>
              <Button
                type='button'
                textOnly
                onClick={() => handleCancel(session!.id)}
              >
                Cancel
              </Button>
            </article>
          );
        })}
        <Button type='button' textOnly={false} onClick={handleClose}>
          Close
        </Button>
      </div>
    </Modal>
  );
};
export default UpcomingSessions;
