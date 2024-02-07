import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LaurelImg from './Image';
//import sound from './garden.wav';

function HelloWorld() {
  return (
    <>
    <div className='Story'>
      <h1>Oberlin's Downtown Gardens</h1>
      <i>All Things Great owner Laurel discusses the city's plan to centralize the care of downtown garden plots. </i> 
    </div>
    <div>
      <button className='Imgbutton'><LaurelImg /></button>
    </div>
    
  </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelloWorld />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
