import React, { Component } from 'react'
import { Menu } from './Menu'

export default class Ccomponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: "David"
    }
  }
  
  render() {
    const name = this.state.name;
    return (
      <div>
        <h1>
            Class component {name}
        </h1>
      </div>
    )
  }
}
Ccomponent.defaultProps = { name: 'Vojtech'}