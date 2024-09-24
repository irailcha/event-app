import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormContainer = styled.div`
  height: 100vh;
  padding: 20px; 
`;

export const FormStyle = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;

  @media (max-width: 600px) {
    width: 100%; 
    padding: 10px; 
  }
`;

export const FieldStyle = styled(Field)`
  height: 45px;
  width: 350px;

  @media (max-width: 600px) {
    width: 100%; 
  }
`;

export const LabelStyle = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const PageTitle = styled.h1`
  font-size: 41px;
  font-weight: bold;
  color: #333;
  letter-spacing: 2px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  padding-bottom: 10px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 25px;

  @media (max-width: 600px) {
    font-size: 30px; 
  }
`;

export const TextMessage = styled.p`
  font-size: 18px;
  color: #555;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    font-size: 16px; 
  }
`;

export const BtnStyle = styled.button`
  box-shadow: 2px 3px 7px 4px #735751, 0 0 2px rgba(231, 215, 193, .5) inset;
  padding: 8px 10px;
  color: #432818;

  :hover {
    background-color: rgba(231, 215, 193, .5);
  }

  @media (max-width: 600px) {
  
  }
`;
