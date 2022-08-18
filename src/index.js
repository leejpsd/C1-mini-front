import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import {Provider} from 'react-redux';
import store from './redux/config/configStore'
import App from './App';
import { CookiesProvider } from 'react-cookie';
import axios from 'axios';

axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <CookiesProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </CookiesProvider>
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
