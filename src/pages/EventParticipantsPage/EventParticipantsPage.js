import Participants from '../../components/Participants/Participants.js';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const EventParticipantsPage = () => {
    const { eventId } = useParams();
  return (
    <>
      <Link to="/events">
 Go to events page
      </Link>
      <Participants eventId={eventId} />
    </>
  );
};

export default EventParticipantsPage;
