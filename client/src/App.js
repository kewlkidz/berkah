import React from 'react';
import './App.css';
import MainPage from './Components/MainPage/MainPage';
import YokomoPage from './Components/Yokomo/YokomoPage';
import { Route } from 'react-router-dom';
import ItemDetails from './Components/Yokomo/ItemDetails';

function App() {

  return (
    <div className="App">
      <Route path="/items/:id/:jis/:newJis" >
        <ItemDetails  />
     </Route>
      <Route exact path ="/">
     <MainPage />
     </Route>
     <Route exact path ="/yokomo">
     <YokomoPage />
     </Route>
    </div>
  );
}

export default App;
