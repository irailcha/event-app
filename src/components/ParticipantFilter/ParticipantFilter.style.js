import styled from 'styled-components';
import { Field, Form} from "formik"

export const FormStyleContainer=styled.div`
margin-bottom: 15px;
text-align: right`


export const ButtonStyle=styled.button`
display:flex;
align-items: center;
gap: 10px;
border: 1px solid #432818;
padding: 8px; 10px;
background-color: #f5f1ed;
border-radius: 8px;
margin-bottom: 15px;

&:hover{
background-color: #735751;
color: #fff;
}`

export const FieldStyle=styled(Field)`
padding:8px; 10px;
border-radius: 8px;
background-color: #f5f1ed;
border: 1px solid #432818;
`


export const FormStyle=styled(Form)`
display:flex;
gap:10px;
justify-content: flex-end;
align-items: flex-start;


@media (max-width:768px){
flex-direction: column;
align-items: center}
`