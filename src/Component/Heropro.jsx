import './Heropro.css'

import React, { Component } from 'react'

class Heropro extends Component{
    render(){
  return (
    <div className='project'>
        <div className="heading">
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
        </div>
      
    </div>
  )
}
}

export default Heropro
