
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import './Event.style.js'
import {EventTitleStyle, EventDescrStyle, EventBtnBlockStyle,EventDateStyle, EventOrgStyle, EventImg, EventImgThumb } from './Event.style.js';

const Event=({event})=>{

    const {_id, title, description, organizer, event_date, img}=event;
    return(
        <>

            <EventImgThumb>
            <EventImg src={img} alt={title}/>
            </EventImgThumb>
            <div>

        <EventTitleStyle>{title}</EventTitleStyle>
        <EventDescrStyle>{description}</EventDescrStyle>
        <EventDateStyle>{format(new Date(event_date), "dd MMMM yyyy")}</EventDateStyle>
        <EventOrgStyle>{organizer}</EventOrgStyle>
        </div>
 

        <EventBtnBlockStyle>
        <Link to={`/events/${_id}/register`}>Register</Link>
        <Link to={`/events/${_id}/participants`}>View</Link>
        </EventBtnBlockStyle>
        </>
    )
}

export default Event;