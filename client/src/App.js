import React from 'react';
import './App.css';
import yokomoData from './Data/Yokomo';




function App() {
  return (
    <div className="App">
     
      
 <img src = {yokomoData[0].image} alt="battery" />
      {/* image doesnt show */}
      {console.log(yokomoData)}
      console log shows image in each object, maybe path file isnt correct, but if you import the
      image from the same path as whats shown in the objects and source it in the img tag, picture
      will display;
    </div>
  );
}

export default App;
