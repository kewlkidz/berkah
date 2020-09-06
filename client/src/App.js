import React, {useState} from 'react';
import './App.css';
import MainPage from './Components/MainPage/MainPage';
import YokomoPage from './Components/Yokomo/YokomoPage';
import { Link, Route, Switch } from 'react-router-dom';
import YokomoItem from './Components/Yokomo/YokomoItem';
import yokomoData from './Data/Yokomo';


function App() {

const [products, setProducts] = useState(yokomoData)

  return (
    <div className="App">
      <Switch>

      <Route path="/yokomo/:banana" >
        <YokomoItem items={products} />
     </Route>

     <Route exact path ="/yokomo" render={(props) => {
       console.log('react router props', props)
       return <YokomoPage history={props.history} items={products} />
     }} />

     <Route exact path ="/">
     <MainPage />
     </Route>

     </Switch>
    </div>
  );
}

export default App;
