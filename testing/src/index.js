import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Fetch from './Fetch';
// import Usestate from './Usestate';
// import Usecontext from './Usecontext';
// import Api from './Api';
import Quiz from './Quiz';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Usestate /> */}
    {/* <Usecontext /> */}
    {/* <Api /> */}
    {/* <Fetch /> */}
    <Quiz />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
