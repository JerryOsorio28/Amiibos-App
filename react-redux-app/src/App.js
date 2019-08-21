import React from 'react';
import './App.css';

//Import Components here
import AmiiboList from './components/AmiiboList';
import Home from './components/Home';

//import Route from react router dom
import { Route } from 'react-router-dom';


function App() {
  
  return (
    <div className="App">
      <Route exact path='/' component={Home} />
      <Route path='/amiibo-list' component={AmiiboList} />
    </div>
  );
}

export default App;

