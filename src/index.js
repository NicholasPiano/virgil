
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'semantic-ui-css/semantic.min.css';

import registerServiceWorker from './registerServiceWorker';
import store from './store';
import App from './App';

const entryId = 'root';
const appEntry = document.getElementById(entryId);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  appEntry,
);

registerServiceWorker();
