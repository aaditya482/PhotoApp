import React from 'react';
import ReactDOM from 'react-dom';
import './styles/stylesheet.css';
import {BrowserRouter} from 'react-router-dom';  // keeps track of the url changes, keeping URL and UI in sync
import {createStore} from 'redux';
import rootReducer from './redux/reducer';
import {Provider} from 'react-redux';
import App from './Components/App'

// Provides store to the child components
// Reducer populates the store with state
const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// the created store is provided to the provider
ReactDOM.render(<Provider store = {store}><BrowserRouter><App/></BrowserRouter></Provider>,document.getElementById('root'));
