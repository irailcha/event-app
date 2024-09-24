import Event from "../Event/Event";
import {EventListStyle, EventCardStyle} from './EventList.style.js';



const EventList = ({ events = [] } ) => {
  return (
    <>
      <EventListStyle>
        {events.length > 0 ? (
          events.map(event => (
            <EventCardStyle key={event._id}>
              <Event event={event}/>
            </EventCardStyle>
          ))
        ) : (
          <p>No events available</p>
        )}
      </EventListStyle>
    </>
  );
};

export default EventList;
