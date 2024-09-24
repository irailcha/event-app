import React, { useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.style.js';
import EventsPage from './pages/EventsPage/EventsPage';
import axios from "axios";
import RegisterEventPage from './pages/RegisterEventPage/RegisterEventPage.js';
import EventPatricipantsPage from './pages/EventParticipantsPage/EventParticipantsPage.js'


axios.defaults.baseURL = "https://event-backend-mu-seven.vercel.app";

function App() {
  const [events, setEvents] = useState([]);


  useEffect(() => {
    const getAllEvents = async () => {
      try {
        const { data } = await axios.get('/events');
        console.log(data);
        setEvents(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllEvents();
  }, []);





  return (
    <Router basename='/event-app'>
        <Routes>

        <Route path="/" element={<EventsPage events={events} />} />
          <Route path="/events" element={<EventsPage events={events} />} />
          <Route path="/events/:eventId/register" element={<RegisterEventPage />} /> 
          <Route path="/events/:eventId/participants" element={<EventPatricipantsPage />} />
        </Routes>

    </Router>
  );
}

export default App;
