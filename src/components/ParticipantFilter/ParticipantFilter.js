import {Formik} from "formik"
import './ParticipantFilter.style';
import {FormStyleContainer,  FieldStyle, FormStyle} from './ParticipantFilter.style'


const ParticipantFilter=({onFilter })=>{

    const handleEmailChange=(event)=>{
onFilter({email: event.target.value})
    }
    const handleFullNameChange=(event)=>{
        onFilter({fullname: event.target.value})
    }




    return (
    <FormStyleContainer>
<Formik initialValues={{email: '', fullname: ''}} >
    <FormStyle>
    <FieldStyle
     type="text"
     name="email" 
     placeholder="Search by email"
     onChange={handleEmailChange}
     />
    <FieldStyle 
    type="text" s
    name="fullname" 
    placeholder="Search by name" 
    onChange={handleFullNameChange}
    />
 
    </FormStyle>
</Formik>
    </FormStyleContainer>)
}

export default ParticipantFilter