import React, { useEffect, useState } from 'react';
import axios from "axios";
import './Participants.style.js';
import { ParticipantsContainer, ParticipantCard, NoParticipantsMessage } from './Participants.style.js';


const Participants = ({ eventId }) => {
  const [participants, setParticipants] = useState([]);

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

  return (
    <>
      <ParticipantsContainer>
        {participants.length > 0 ? (
          participants.map(participant => (
            <ParticipantCard  key={participant._id}>
              <h2>{participant.fullname}</h2>
              <p>{participant.email}</p>
            </ParticipantCard >
          ))
        ) : (
          <NoParticipantsMessage>No participants available</NoParticipantsMessage>
        )}
      </ParticipantsContainer>
    </>
  );
};

export default Participants;
