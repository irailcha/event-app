
import styled from 'styled-components';

export const ParticipantsContainer = styled.ul`
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  min-height: auto;

`;

export const ParticipantCard = styled.li`
  background: white;
  border-radius: 10px;
  margin: 10px;
  padding: 20px;
  width: 300px;
  text-align: center;
  background-color: rgba(231, 215, 193, .5);
  box-shadow: 2px 3px 7px 4px #735751, 0 0 2px rgba(231, 215, 193, .5) inset;
`;

export const NoParticipantsMessage = styled.p`
  font-size: 18px;
  color: #555;
`;



