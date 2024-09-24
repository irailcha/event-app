# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


Base level
- Events board page: implement the events board page where users can observe the
paginated list of available events. List of events can be pre-populated in the database
manually or via seed script. Event should consist of:
- title;
- description;
- event date;
- organizer;

Event registration page: by clicking on “Register”, users should be redirected to the
event registration page, which contains a registration form with the following fields: full
name, email, date of birth, “where did you hear about this event?”.
Once the form is submitted, the response should be stored in a database.

Event participants page: implement the event participants page where users can see
a list of registered participants. This page should be available by clicking on the “View”
button.



The backend part is implemented using Node.js
Backand - https://event-backend-mu-seven.vercel.app
Github - https://github.com/irailcha/event-backend 