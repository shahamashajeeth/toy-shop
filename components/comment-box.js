/* global fetch */
'use strict'

import React, { Component, PropTypes } from 'react'

import Bio from './Bio.js'
import Cat from './Cat.js'
import Duck from './Duck.js'




export default class CommentBox extends Component {
  constructor (props) {
    super(props)
    this.state = { name:props.name,
                   age:'',
                   bio:'',
                   cat:'',
                   duck:''
   }
  }
nameChanger(){
  this.setState({name:"Toy Shop",
                age:""

})
}

bioUpdater(){
  this.setState({
      bio:document.getElementById('bioInfo').value+" is a dog"
})
}
catUpdater(){
  this.setState({
    cat:document.getElementById('catInfo').value+" is a cat"
})
}

duckUpdater(){
  this.setState({
    duck:document.getElementById('duckInfo').value+" is a duck"
})
}
duckSoundUpdater(){
  this.setState({
    duck:document.getElementById('duckInfo').value+"'s sound is queck "
})
}
bioSoundUpdater(){
  this.setState({
    bio:document.getElementById('bioInfo').value+"'s sound is bowwwwww "
})
}
catSoundUpdater(){
  this.setState({
    cat:document.getElementById('catInfo').value+"'s sound is meow "
})
}

  render () {
    return (
      <div className='comment-box'>
                <h2>{this.state.age}</h2>
              <h3>Dog Name</h3>  <input id="bioInfo"/>
                <button onClick={this.bioUpdater.bind(this)} >Add Dog</button>

      <Bio naming={this.bioSoundUpdater.bind(this)} bio={this.state.bio} me=""/>

                <h3>Cat Name</h3>  <input id="catInfo"/>
                  <button onClick={this.catUpdater.bind(this)} > Add Cat</button>

  <Cat naming={this.catSoundUpdater.bind(this)} cat={this.state.cat} me=""/>

                  <h3>Duck Name</h3>  <input id="duckInfo"/>
                    <button onClick={this.duckUpdater.bind(this)}>Add Duck</button>

                    <Duck naming={this.duckSoundUpdater.bind(this)} duck={this.state.duck} me=""/>


        {/* <Bio bio={this.state.bio} me="Uki"/> */}





      </div>
    )
  }
}
