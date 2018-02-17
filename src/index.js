import React from 'react';
import ReactDOM from 'react-dom';
import Prism from 'prismjs';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'prismjs/themes/prism-tomorrow.css';

window.Prism = Prism;

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
