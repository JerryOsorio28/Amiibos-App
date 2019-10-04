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
import AnimalCrossing from './components/Series/Animal-Crossing';
import Metroid from './components/Series/Metroid';
import Splatoon from './components/Series/Splatoon';
import MarioSportsSuperstars from './components/Series/Mario-Sports-Superstars';
import Pokemon from './components/Series/Pokemon';
import Kirby from './components/Series/Kirby';
import BoxBoy from './components/Series/BoxBoy';
import FireEmblem from './components/Series/Fire-Emblem';
import ChibiRobo from './components/Series/Chibi-Robo';
import Others from './components/Series/Others';
import MegaMan from './components/Series/Mega-Man';
import MonsterHunter from './components/Series/Monster-Hunter';
import ShovelKnight from './components/Series/Shovel-Knight';
import Pikmin from './components/Series/Pikmin';
import PowerPros from './components/Series/Power-Pros';
import Diablo from './components/Series/Diablo';


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
      <Route 
        path='/animal-crossing' 
        render={props => 
          <AnimalCrossing {...props} 
            amiiboList={amiiboList} 
          />
        } 
      />
      <Route 
        path='/metroid' 
        render={props => 
          <Metroid {...props} 
            amiiboList={amiiboList} 
          />
        } 
      />
      <Route 
        path='/splatoon' 
        render={props => 
          <Splatoon {...props} 
            amiiboList={amiiboList} 
          />
        } 
      />
      <Route 
        path='/mario-sports-superstars' 
        render={props => 
          <MarioSportsSuperstars {...props} 
            amiiboList={amiiboList} 
          />
        } 
      />
      <Route 
        path='/pokemon' 
        render={props => 
          <Pokemon {...props} 
            amiiboList={amiiboList} 
          />
        } 
      />
      <Route 
        path='/kirby' 
        render={props => 
          <Kirby {...props} 
            amiiboList={amiiboList} 
          />
        } 
      />
      <Route 
        path='/boxboy' 
        render={props => 
          <BoxBoy {...props} 
            amiiboList={amiiboList} 
          />
        } 
      />
      <Route 
        path='/fire-emblem' 
        render={props => 
          <FireEmblem {...props} 
            amiiboList={amiiboList} 
          />
        } 
      />
      <Route 
        path='/chibi-robo!' 
        render={props => 
          <ChibiRobo {...props} 
            amiiboList={amiiboList} 
          />
        } 
      />
      <Route 
        path='/others' 
        render={props => 
          <Others {...props} 
            amiiboList={amiiboList} 
          />
        } 
      />
      <Route 
        path='/mega-man' 
        render={props => 
          <MegaMan {...props} 
            amiiboList={amiiboList} 
          />
        } 
      />
      <Route 
        path='/monster-hunter' 
        render={props => 
          <MonsterHunter {...props} 
            amiiboList={amiiboList} 
          />
        } 
      />
      <Route 
        path='/shovel-knight' 
        render={props => 
          <ShovelKnight {...props} 
            amiiboList={amiiboList} 
          />
        } 
      />
      <Route 
        path='/pikmin' 
        render={props => 
          <Pikmin {...props} 
            amiiboList={amiiboList} 
          />
        } 
      />
      <Route 
        path='/power-pros' 
        render={props => 
          <PowerPros {...props} 
            amiiboList={amiiboList} 
          />
        } 
      />
      <Route 
        path='/diablo' 
        render={props => 
          <Diablo {...props} 
            amiiboList={amiiboList} 
          />
        } 
      />
    </div>
  );
}

export default App;

