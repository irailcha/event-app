
import './Participants.style.js';
import { ParticipantsContainer, ParticipantCard, NoParticipantsMessage } from './Participants.style.js';


const Participants = ({ participants }) => {


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
