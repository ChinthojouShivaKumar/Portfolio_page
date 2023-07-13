import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import Navvbaar from './Navvbaar';
import Body from './Body';
import About from './About';
import TechSkills from './Technical';
import Education from './Education';
import Cards from './Cards';
import Contactt from './Contact';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App/> */}
    <Navvbaar/>
    <Body/>
    <About/>
    <TechSkills/>
    <Education/>
    <Cards/>
    <Contactt/>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
