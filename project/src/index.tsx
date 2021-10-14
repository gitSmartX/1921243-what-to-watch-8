import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {FILM_DATA_LIST} from './mocks/films';

ReactDOM.render(
  <React.StrictMode>
    <App filmDataList = {FILM_DATA_LIST}/>
  </React.StrictMode>,
  document.getElementById('root'));
