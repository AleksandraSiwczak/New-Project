import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ArticlesProvider} from "./contexts/ArticlesContext";


ReactDOM.render(
  <ArticlesProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ArticlesProvider>,
  document.getElementById('root')
);



