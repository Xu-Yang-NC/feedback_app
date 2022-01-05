import React, { StrickMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';


// Render all the components return in the app.js to the webpage
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);