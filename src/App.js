import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import EventsPage from './pages/EventsPage/EventsPage';
import axios from "axios";
import RegisterEventPage from './pages/RegisterEventPage/RegisterEventPage.js';
import EventParticipantsPage from './pages/EventParticipantsPage/EventParticipantsPage.js'; // Виправлено на правильну назву
import SignupPage from './pages/SignupPage/SignupPage.js';
import { Layout } from './components/Layout/Layout.js';
import { BodyContainer } from './App.style.js';

axios.defaults.baseURL = "https://event-backend-mu-seven.vercel.app";

function App() {
  const [sortedEvents, setSortedEvents] = useState([]);

  useEffect(() => {
    const getAllEvents = async () => {
      try {
        const { data } = await axios.get('/events');
        setSortedEvents(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllEvents();
  }, []);

  return (
    <BodyContainer>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<EventsPage events={sortedEvents} setSortedEvents={setSortedEvents} />} />
          <Route path="events/:eventId/register" element={<RegisterEventPage />} />
          <Route path="events/:eventId/participants" element={<EventParticipantsPage />} />
          <Route path="signup" element={<SignupPage />} />
        </Route>
      </Routes>
    </BodyContainer>
  );
}

export default App;