import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import loadJqueryModule from './jQuery/loadJqueryModule';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const pathName = window.location.pathname;
const rootElement = document.getElementById('root');
if (pathName.indexOf("Jquery") > -1) {
    loadJqueryModule();
} else {
ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <App />
  </BrowserRouter>,
  rootElement);

registerServiceWorker();

}
