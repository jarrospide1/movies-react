// libreries
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom'

// assets
import './index.css';
import './style.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

// componentes


//Add Browser Router so the app can work with routes
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>  
);


reportWebVitals();
