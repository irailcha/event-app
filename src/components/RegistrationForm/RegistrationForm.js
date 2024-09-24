import React, {useState} from 'react';
import { Formik, Field  } from 'formik';
import {FormStyle, FieldStyle, LabelStyle, FormContainer, PageTitle, TextMessage, BtnStyle} from "./RegistrationForm.style.js"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegistrationForm=({eventId})=>{
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

const handleSubmit=async(values)=>{
try{
await axios.post(`events/${eventId}/register`, values )
alert('Registration successful!');
navigate(`/events/${eventId}/participants`);
}
catch (error) {
  console.error('Error during registration', error);

  if (error.response && error.response.status === 409) {
      setErrorMessage('Participant already registered.'); 
  } else {
      setErrorMessage('An error occurred. Please try again.'); 
  }

}}


    return(
        <FormContainer>
        <PageTitle>Event registration</PageTitle>
        {errorMessage && <TextMessage style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</TextMessage>}
       <Formik initialValues={{
        fullname:"",
        email:"",
        date_of_birth:"",
        source:''
       }} onSubmit={handleSubmit}>
{({handleChange, values})=>
         <FormStyle>
         <LabelStyle htmlFor="fullname">Full name
         <FieldStyle
             type="text"
             name="fullname"
             onChange={handleChange}
             value={values.fullname}
         /></LabelStyle>
         <LabelStyle htmlFor="email">Email
           <FieldStyle
             type="email"
             name="email"
             onChange={handleChange}
             value={values.email}
         /></LabelStyle>
         <LabelStyle htmlFor="date_of_birth">Date of birth
           <FieldStyle
             type="date"
             name="date_of_birth"
             onChange={handleChange}
             value={values.date_of_birth}
           /></LabelStyle>
          <div role="group" aria-labelledby="my-radio-group">
            <TextMessage>Where did you hear about this event?</TextMessage>
            <label>
              <Field type="radio" name="source" value="Social media" />
              Social media{' '}
            </label>
            <label>
              <Field type="radio" name="source" value="Friends" />
              Friends{'  '}
            </label>
            <label>
              <Field type="radio" name="source" value="Found myself" />
              Found myself
            </label>
          </div>
          <BtnStyle type="submit">Submit</BtnStyle>
         </FormStyle>}

     </Formik>
        </FormContainer>
    )
}

export default RegistrationForm