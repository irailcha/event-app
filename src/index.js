import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import  GlobalStyles  from './GlobalStyles.js';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='event-app'>
    <App />
    <GlobalStyles/>
    </BrowserRouter>
  </React.StrictMode>
);

