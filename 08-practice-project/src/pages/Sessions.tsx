import Button from '../components/Button.tsx';
import { SESSIONS } from '../dummy-sessions.ts'; // normally, we would probably load that from a server

export default function SessionsPage() {
  return (
    <main id='sessions-page'>
      <header>
        <h2>Available mentoring sessions</h2>
        <p>
          From an one-on-one introduction to React's basics all the way up to a
          deep dive into state mechanics - we got just the right session for
          you!
        </p>
      </header>
      {/* Todo: Output list of sessions */}
      <div id='sessions-list'>
        {SESSIONS.map((session) => {
          const { id, title, summary, image } = session;
          return (
            <div key={id} className='session-item'>
              <img src={image} alt='' />
              <div className='session-data'>
                <h3>{title}</h3>
                <p>{summary}</p>
                <div className='actions'>
                  <Button to={`/sessions/${id}`} textOnly={false}>
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
