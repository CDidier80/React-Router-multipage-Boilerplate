// index.js is the highest javascript file in the heirarchy tree. It sets the React mode and renders the app content
// created and structured in App.js, which is the 2nd highest file in the tree. In other words, the role of index.js
// can be thought of as a configuration file using the React Dom, connecting to html, and rendering the app as a whole, 
// whereas App.js builds out the content and html/jsx structure of the app. 

import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)


// initialize the app by entering command     >npm i   or     >npm install
// use    > npm audit fix    if you receive warnings about vulnerable or deprecated files
// start the app by entering command     >npm start     in project directory