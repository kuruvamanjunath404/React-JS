import React, { Component } from 'react'

class ClassClick extends Component {
  constructor(){
    super()
    this.state={message:"Hello mr"}
  }
  changeMessage(){
    console.log('clicked button')
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.changeMessage}>submit</button>
      </div>
    )
  }
}
export default ClassClick
