import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

//Import createStore from redux
import { createStore, applyMiddleware } from 'redux';

//Import reducer to create store
import { Reducer } from './reducers';

//Import Provider
import { Provider } from 'react-redux';

//Import Redux Thunk
import thunk from 'redux-thunk';

//import Router from react router dom
import { BrowserRouter as Router } from 'react-router-dom';

const store = createStore(Reducer, applyMiddleware(thunk));

ReactDOM.render(
<Provider store={store}>
    <Router>
        <App />
    </Router>
</Provider>, document.getElementById('root'));


