import { Link } from 'react-router-dom';
import Button from './Button';
import UpcomingSessions from './UpcomingSessions';
import { useState } from 'react';

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const handleUpcomingSessions = () => {
    setShowModal(true);
  };

  return (
    <header id='main-header'>
      <h1>React Mentoring</h1>
      <nav>
        <ul>
          <li>
            <Link className='links' to='/'>
              Our Mission
            </Link>
          </li>
          <li>
            <Link className='links' to='sessions'>
              Browse Sessions
            </Link>
          </li>
          <li>
            <Button
              type='button'
              onClick={handleUpcomingSessions}
              textOnly={false}
            >
              Upcoming Sessions
            </Button>
          </li>
        </ul>
      </nav>
      {showModal && <UpcomingSessions onClose={setShowModal} />}
    </header>
  );
};
export default Header;
