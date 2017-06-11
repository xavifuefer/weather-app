import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import configureStore from './data/store';

import Root from './components/Root/Root';

const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();