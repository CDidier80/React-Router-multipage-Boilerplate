// rename file as needed

// non-page components are used as subcomponents pages to fill them with content

import React, { Component } from 'react'


class ComponentTwo extends Component {
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
        <div className="componentTwoWrapper">
            <h1>This is Component Two</h1>
            <p>Change the file and jsx/html content as needed</p>
            <p>The example prop passed to Component 2: {this.props.exampleProp}</p>
        </div>
      )}
    }
  
    export default ComponentTwo
  
  
  // Option 2: functional-component version 
  
  // function App(props) {
    // return (
    //     <div className="componentTwoWrapper">
    //         <h1>This is Component Two</h1>
    //         <p>Change the file and jsx/html content as needed</p>
    //     </div>
  //   )
  // }
  
  // export default ComponentTwo;