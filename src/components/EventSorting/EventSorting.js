import { Formik, Field, Form} from "formik";
import './EventSorting.style';
import {FormStyleContainer} from './EventSorting.style';
import { BsArrowDownUp } from "react-icons/bs";



const EventSorting=({events, setSortedEvents })=>{

const sortEvents=(sortValue)=>{
    let sortArr=[...events];

if(sortValue ==='title'){
    sortArr.sort((a,b)=> a.title.localeCompare(b.title))
}
if(sortValue=== "event_date"){
    sortArr.sort((a, b) => new Date(a.event_date) - new Date(b.event_date))
}
if(sortValue === "organizer"){
    sortArr.sort((a,b)=> a.organizer.localeCompare(b.organizer))
}

setSortedEvents(sortArr)

}


   const handleChange=(values)=>{
        sortEvents(values.sort)

    }


    

    return(
        <FormStyleContainer>
<Formik initialValues={{sort: "title"}} onSubmit={handleChange}>
    <Form>
    <Field as="select" name="sort" >
             <option value="title">Sort by title</option>
             <option value="event_date">Sort by event date</option>
             <option value="organizer">Sort by organizer</option>
           </Field>
           <button type="submit"><BsArrowDownUp/></button>
    </Form>
</Formik>

        </FormStyleContainer>
    )
}

export default EventSorting;