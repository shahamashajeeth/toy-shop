import React, { Component } from 'react'

export default class Duck extends Component {
constructor(props){
  super(props)
  this.state = {
               duck:''
             }
}

render(){

let {naming} = this.props;

  return(
    <div>

    <h3>
      {this.props.duck}
    </h3>
    <button onClick={naming}>Duck Sound</button>


    <h1>
      {this.props.me}
    </h1>

    </div>
  )
  }
}
