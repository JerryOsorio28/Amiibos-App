import React, {useState, useEffect} from 'react';
import './App.scss';
import axios from 'axios';

//Import Components here
import AmiiboList from './components/AmiiboList';
import Home from './components/Home';

//import Route from react router dom
import { Route } from 'react-router-dom';

//import series components
import SuperMarioBros from './components/Series/SuperMarioBros'
import EightBitMario from './components/Series/8-bit-Mario';
import SuperSmashBros from './components/Series/SuperSmashBros';
import YoshiWoollyWorld from './components/Series/Yoshi-woolly-world';
import Skylanders from './components/Series/Skylanders';
import LegendOfZelda from './components/Series/LegendOfZelda';


function App() {

  const [amiiboList, setAmiiboList] = useState([]);

    console.log('App', amiiboList)

    useEffect(() => {
        
        axios.get('https://www.amiiboapi.com/api/amiibo/')
            .then(res => {
                // console.log(res.data.amiibo)
                const data = res.data.amiibo
                setAmiiboList({...amiiboList, data})
            })
            .catch(err => {
                console.log(err.response)
            })
    },[])
  
  return (
    <div className="App">
      <Route exact path='/' component={Home} />
      <Route 
        path='/amiibo-list' 
        render={props => 
          <AmiiboList {...props} 
            amiiboList={amiiboList} 
          />
        } 
      />
      <Route 
        path='/super-mario-bros' 
        render={props => 
          <SuperMarioBros {...props} 
            amiiboList={amiiboList} 
          />
        } 
      />
      <Route 
        path='/8-bit-mario' 
        render={props => 
          <EightBitMario {...props} 
            amiiboList={amiiboList} 
          />
        } 
      />
      <Route 
        path='/super-smash-bros' 
        render={props => 
          <SuperSmashBros {...props} 
            amiiboList={amiiboList} 
          />
        } 
      />
      <Route 
        path='/yoshi-woolly-world' 
        render={props => 
          <YoshiWoollyWorld {...props} 
            amiiboList={amiiboList} 
          />
        } 
      />
      <Route 
        path='/skylanders' 
        render={props => 
          <Skylanders {...props} 
            amiiboList={amiiboList} 
          />
        } 
      />
      <Route 
        path='/legend-of-zelda' 
        render={props => 
          <LegendOfZelda {...props} 
            amiiboList={amiiboList} 
          />
        } 
      />
    </div>
  );
}

export default App;

