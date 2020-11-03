import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './styles/index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)


//                        Overview of file/component hierarchy in a React-Browser project

// index.js is the highest javascript file in the heirarchy tree. It sets the React mode, adds router functionality, 
// and renders the app as built in App.js, which is the 2nd highest file in the tree. 
// In other words, the role of index.js should be regarded as a configuration file using the React Dom, Browser Router, 
// connecting to html, and rendering the app as a whole. App.js is responsible for setting routes and connecting 
// them to their respective pages. Page components are used to assemble complete, standalone pages comprised of 
// various subcomponents. 


//                       How to start the application

// initialize the app by entering command     >npm i   or     >npm install
// use    > npm audit fix    if you receive warnings about vulnerable or deprecated files
// start the app by entering command     >npm start     in project directory