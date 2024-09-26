
import EventList from "../../components/EventList/EventList";
import EventSorting from "../../components/EventSorting/EventSorting.js";




const EventsPage=({events, setSortedEvents})=>{


    return(
        <>
        <EventSorting events={events} setSortedEvents={setSortedEvents}/>
        <EventList events={events} /></>
    )
}

export default EventsPage;