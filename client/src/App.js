import React from 'react';
import './App.css';
import MainPage from './Components/MainPage/MainPage';
import YokomoPage from './Components/Yokomo/YokomoPage';
import { Route } from 'react-router-dom';
import YokomoItem from './Components/Yokomo/YokomoItem';
import ContactUs from './Components/ContactUs';

function App() {
  return (
    <div className="App">
      <Route path="/items/:id" >
        <YokomoItem />
     </Route>
      <Route exact path ="/">
     <MainPage />
     </Route>
     <Route exact path ="/yokomo">
     <YokomoPage />
     </Route>
     <Route exact path ="/contact">
       <ContactUs />
     </Route>
    </div>
  );
}

export default App;
