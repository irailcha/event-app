
import EventList from "../../components/EventList/EventList";
import {PageTitle} from './EventsPage.style.js'



const EventsPage=({events})=>{


    return(
        <><PageTitle>Events</PageTitle>
        <EventList events={events} /></>
    )
}

export default EventsPage;