import React  from 'react';
import { Formik} from 'formik';
import './Signup.style';
import {FormContainer, ButtonStyle, FieldStyle, FormStyle} from './Signup.style'




const Signup =()=>{
    return(
        <FormContainer>
        <Formik
         initialValues={{
            username: '',
            email: '',
            password:''
          }}>
            <FormStyle>
            <label htmlFor="username">fullname</label>
            <FieldStyle id="username" name="username" placeholder="Enter your fullname " />
            <label htmlFor="email">Email</label>
        <FieldStyle
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
                    <label htmlFor="password">Password</label>
        <FieldStyle
          id="password"
          name="password"
          type="password"
        />

        <ButtonStyle type="submit">Submit</ButtonStyle>
            </FormStyle>
            </Formik>
            </FormContainer>
    )
}

export default Signup;