import React from 'react';
import Header from '../MainPage/Header/Header';
import Footer from '../MainPage/Footer/Footer';
import YokomoBody from './YokomoBody'
import { Link } from 'react-router-dom';

const YokomoPage = (props) => {
    console.log(props);

    return(
        <div>
     <Header />
     {props.items.map(item => (
         <Link to={`/yokomo/${item.id}`}>
             <div key={item.id}>
                 <img
                 src={item.imageUrl}
                 alt={item.jis}
                 />
                 <p>{item.jis}</p>
                 <p>{item.newJis}</p>
             </div>
         </Link>
     ))}
     {/* <YokomoBody /> */}
     <Footer />
    </div>
    )
}
export default YokomoPage