import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './styles/index.css';
import App from './App';
import { store, globalPersistedStore } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
require('dotenv').config();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={globalPersistedStore}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
