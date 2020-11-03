// See notes on App.js in React-Router context, <Switch> and <Route> below 

import React, { Component } from 'react'
import './styles/App.css';
import ComponentOne from './components/ComponentOne'
import ComponentTwo from './components/ComponentTwo'


class App extends Component {
  // inclusion of props depends on whether index.js passes any
  constructor(props){
    super(props)
    this.state = {
        key: "example value",
        key2: "2nd example value"
    }
  }

  // Optional - set the initial state or run any other code needed when the component finishes mounting
  // componentDidMount (){
  //   try {
  //       this.setState((prevState) => ({
  //          // set initial state here
  //          ({exampleKey : exampleValue})   
         
  //       }))
  //   } catch (error) {
  //       console.log(error)
  //   }
  // }

  render() {
    return (
    <main className="appContentWrapper">
      <ComponentOne className="example example1" exampleProp={this.state.key}/>
      <ComponentTwo className="example example2" exampleProp={this.state.key2}/>
    </main>
    )}
  }

  export default App


// Option 2: functional-component version 

function App() {
  return (
<div className="App">
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/pageone" component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
        </Switch>
      </main>
    </div>
  )
}

export default App




//                          Purpose and Hierarchy Position of App.js

// App.js is the 2nd highest javascript file in the tree hierarchy. Use it to set the routes and paths for 
// your application and connect them to their respective page components. App.js should be imported to 
// index.js for configuration and rendering.


//                          Notes on <Switch> and <Route> components

// These are components built in to React-Router to facilitate "multi-page" navigation. Switch components
// prevent the performance-hindering effects of rendering all routes simultaneously. Route components are used
// to connect the various pages of the application to a path. These paths are used to facilitate user navigation
// between the pages. Each Route component requires a path and component prop to function.
