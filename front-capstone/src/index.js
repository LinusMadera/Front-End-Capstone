import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ogpBanner from "./assets/images/Logo.svg";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <meta name="og:title" content='Little Lemon restaurant, Chicago'/>
    <meta name='og:description' content='Order online or book a table, the best traditional mediterranean dishes.'/>
    <meta name='description' content='Order online or book a table, the best traditional mediterranean dishes.'/>
    <meta name='image' content={ogpBanner}/>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
