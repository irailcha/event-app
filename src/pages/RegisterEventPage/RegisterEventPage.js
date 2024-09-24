import { Link , useParams} from 'react-router-dom';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm.js'



const RegisterEventPage=()=>{
    const { eventId } = useParams();

    return(<>
          <Link to="/events">
 Go to events page
      </Link>
    <RegistrationForm eventId={eventId}/>
    </>)
}


export default RegisterEventPage;