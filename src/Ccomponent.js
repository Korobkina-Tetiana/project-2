import React, { Component } from 'react'
import { Menu } from './Menu'

export default class Ccomponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       visibility: false
    }

    this.handelClick = this.handelClick.bind(this);
  }

  handelClick() {
    this.setState(state => ({
      visibility: !state.visibility
    }));
  }

  render() {
    if (this.state.visibility){
    return (
      <div>
        <h1>
            Now you see me
        </h1>
        <button onClick={this.handelClick}>Click</button>
      </div>
    )
  }
  else {
    return (
      <div>
        <button onClick={this.handelClick}>Click</button>
      </div>
    )
  }
}
}