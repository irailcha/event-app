import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams} from 'react-router-dom';
import Participants from '../../components/Participants/Participants.js';
import ParticipantFilter from '../../components/ParticipantFilter/ParticipantFilter.js';
import { BsArrowLeft } from "react-icons/bs";
import './EventParticipantsPage.style.js';
import {LinkStyle} from './EventParticipantsPage.style.js'


const EventParticipantsPage = () => {
    const { eventId } = useParams();
    const [participants, setParticipants] = useState([]);
    const [filter, setFilter]=useState({
      email : "",
      fullname: ""
    })
    const [isFiltered, setisFiltered]=useState(false)
    useEffect(() => {
      const getParticipants = async () => {
        try {
          const { data } = await axios.get(`/events/${eventId}/participants`); 
          console.log(data);
          setParticipants(data);
        } catch (error) {
          console.log(error);
        }
      };
      getParticipants();
    }, [eventId]);



const filteredParticipants=()=>{
  return participants.filter(participant => {
    const matchesEmail = filter.email ? participant.email.includes(filter.email) : true;
    const matchesFullname = filter.fullname ? participant.fullname.includes(filter.fullname) : true;
    return matchesEmail && matchesFullname;
  });
};


const visibleParticipants= isFiltered ? filteredParticipants() : participants

const onFilterChange=(newState)=>{
  setFilter(prevState =>({...prevState,...newState }) )
  setisFiltered(true)
}



  return (
    <>
      <LinkStyle to="/">
      <BsArrowLeft /> Back to events
      </LinkStyle>
      <ParticipantFilter onFilter={onFilterChange} />
      <Participants participants={visibleParticipants}/>
    </>
  );
};

export default EventParticipantsPage;
