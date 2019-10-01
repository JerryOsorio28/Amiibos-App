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


function App() {

  const [amiiboList, setAmiiboList] = useState([]);

    // console.log('App', amiiboList)

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
      <Route exact path='/amiibo-list' component={AmiiboList} />
      <Route 
        path='/super-mario-bros' 
        render={props => 
          <SuperMarioBros {...props} 
            amiiboList={amiiboList} 
            setAmiiboList={setAmiiboList}
          />
        } 
      />
    </div>
  );
}

export default App;

