import styled from 'styled-components';
import { Form, Field } from "formik";


export const FormStyleContainer=styled.div`
margin-bottom: 15px;
text-align: right`

export const FormStyle=styled(Form)`
border: 1px solid #432818;
padding: 8px; 10px;
background-color: #f5f1ed;
`


export const FieldStyle=styled(Field)`
padding:8px; 10px;
border-radius: 8px;
background-color: #f5f1ed;
border: 1px solid #432818;
`
