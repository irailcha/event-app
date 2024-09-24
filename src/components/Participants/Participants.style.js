// Participants.style.js
import styled from 'styled-components';

export const ParticipantsContainer = styled.ul`
margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  min-height: auto;
  background-color: rgba(231, 215, 193, .5);
  box-shadow: 2px 3px 7px 4px #735751, 0 0 2px rgba(231, 215, 193, .5) inset;
`;

export const ParticipantCard = styled.li`
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: 20px;
  width: 200px;
  text-align: center;
`;

export const NoParticipantsMessage = styled.p`
  font-size: 18px;
  color: #555;
`;



