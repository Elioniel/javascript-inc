import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import store from './js/redux/store'

import App from './js/App';
import * as serviceWorker from './utils/serviceWorker';

import './css/index.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
