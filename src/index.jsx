import React from 'react';
import ReactDOM from 'react-dom/client';
import "./CSS/style.css";
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import MainBody from './MainBody';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div style={{backgroundColor :"black", color:"white"}}>
    <Header></Header>
    <div className="px-4">
      <MainBody></MainBody>
    </div>
    <Footer></Footer>
  </div>
);
