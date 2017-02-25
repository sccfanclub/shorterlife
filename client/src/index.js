import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'semantic-ui/dist/semantic.min.css'
import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';
import thunk from 'redux-thunk'
import {configure} from 'redux-auth';
import {AuthGlobals} from 'redux-auth/default-theme';

const store = compose(applyMiddleware(thunk))(createStore)(reducer);
store.dispatch(configure())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
)
;
