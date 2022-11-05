import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const todoTitle = "Start React";
const todoDis ="Today is tarted to learning react js. React js is a free and open-source front-end JavaScript library";
const todoDate = "Nov/3/2022";
const dateText = "Current year is:";
const thisYearName = new Date().getFullYear();

// const headingStyle = {
//   fontSize: "36px",
//   color: "red",
//   backgroundColor: "green",
//   textAlign: "center",
//   padding: "30px 0"
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1 className='headingStyle' >{todoTitle}</h1>
    <p>{todoDis}</p>
    <p>{todoDate}</p>
    <p>{dateText} {thisYearName}</p>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
