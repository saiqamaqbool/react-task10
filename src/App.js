import React, { useState } from 'react';
import Thankupic from './assets/thankuimg.png'
import Header from "./task10/Header";
import FooterPart from "./task10/footer";
import BodyImage from "./task10/body";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
   let content;
   if (submitted) {
    content = (
      <div className="container my-5 text-center">
        <img src={Thankupic} alt="New Image" className="img-fluid" />
      </div>
    );
  } else if (showForm) {
    content = <BodyImage setSubmitted={setSubmitted} />;
  } else {
    content =  <div className="flex-grow-1"></div>;
  }


  return (
    <div className="d-flex flex-column min-vh-100">
      <Header setShowForm={setShowForm} />
       {content} 
      <FooterPart />
    </div>
  );
}

export default App;



