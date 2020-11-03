// rename file as needed
import React, { Component } from 'react'


class ComponentOne extends Component {
    // inclusion of props depends on whether app.js passes any
    constructor(props){
      super(props)
      this.state = {
          key: "value"
      }
    }
  
    
 // Optional - set the initial state or run any other code needed when the component finishes mounting
    // componentDidMount (){
    //   try {
    //       this.setState((prevState) => ({
    //          // set initial state here
    //       }))
    //   } catch (error) {
    //       console.log(error)
    //   }
    // }
  
    render() {
      return (
        <header className="componentOneWrapper">
            <h1>This is Component One</h1>
            <p>Change the file and jsx/html content as needed</p>
            <p>The example prop passed to Component 1: {this.props.exampleProp}</p>
        </header>
      )}
    }
  
    export default ComponentOne
  
  
  // Option 2: functional-component version 
  
  // function ComponentOne(props) {
    // return (
    //     <header className="componentOneWrapper">
    //         <h1>This is Component One</h1>
    //         <p>Change the file and jsx/html content as needed</p>
    //     </header>
  //   )
  // }
  
  // export default ComponentOne;