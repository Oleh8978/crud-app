import React from 'react';
import ReactDOM from 'react-dom';

// components
import App from './App';

// web vitals for PWA
import reportWebVitals from './reportWebVitals';

// config
import { Config } from './config/api';

// styles
import './assets/scss/main.scss';

Config.init({
    MAIN_HOST_URI: process.env.REACT_APP_MAIN_HOST_HOST || '',
    MAIN_API_PATH: process.env.REACT_APP_MAIN_PATH || ''
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
