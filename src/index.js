import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import {combineReducers, createStore} from 'redux'
import {Provider} from 'react-redux'
// import combined_reducers from './redux/store/store'
// import logoutreducer from './redux/reducers/Logout_reducer'
import  All_Reducer from './redux/reducers/All_Reducer'

const store = createStore(All_Reducer)

ReactDOM.render(
  <>
  <Provider store={store}>
  <BrowserRouter>
  <App/>
  {/* <Card/> */}
  
  </BrowserRouter>
  </Provider>
  </>,
  document.getElementById('root')
);


