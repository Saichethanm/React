import React from 'react'

//without props
// const Greet = () => <h1>Hello world</h1>

// with props
const Greet = (props) => <h1>Hello world {props.att1}</h1>


export default Greet