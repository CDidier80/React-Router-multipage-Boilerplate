// App.js is the 2nd highest javascript file in the tree hierarchy. Use it to assemble 
// the structure and content of the application before exporting it to index.js for configuration
// and rendering


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

// function App(props) {
//   return (
//     <main className="appContentWrapper">
//         <ComponentOne />
//         <ComponentTwo />
//     </main>
//   )
// }

// export default App;
