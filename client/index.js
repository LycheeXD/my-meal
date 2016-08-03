import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import thunk from 'redux-thunk';

import App from './components/app';
import reducers from './reducers';
import routes from './routes';


const store = createStoreWithMiddleware(reducers, window.devToolsExtension ? window.devToolsExtension() : f => f);


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.getElementById('app'));
