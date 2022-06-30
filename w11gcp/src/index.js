import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import ReportWebVitals from './ReportWebVitals';
// import Tester from './Tester';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Tester/> */}
  </React.StrictMode>
);

ReportWebVitals();
