import {useParams} from 'react-router-dom';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm.js'
import { BsArrowLeft } from "react-icons/bs";
import './RegisterEventPage.style.js';
import {LinkStyle} from './RegisterEventPage.style.js'


const RegisterEventPage=()=>{
    const { eventId } = useParams();

    return(<>
          <LinkStyle to="/">
          <BsArrowLeft /> Back to events
      </LinkStyle>
    <RegistrationForm eventId={eventId}/>
    </>)
}


export default RegisterEventPage;