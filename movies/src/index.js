// libreries
import React from 'react';
import ReactDOM from 'react-dom/client';

// assets
import './index.css';
import './style.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

// componentes

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
