import React, {Component} from "react";

class Counter extends Component{

    constructor(props){
        super()
        this.state = {
            count: 0
        }
    }

    increment(){
        let x = this.state.count
        x++
        this.setState({
            count: x
        })
    }

    decrement(){
        let x = this.state.count
        x--
        this.setState({
            count: x
        })
    }

    render(){
        return (
            <>
        <h1>Counter - {this.state.count}</h1>
        <button onClick={ () => this.increment()}>+</button>
        <p ></p>
        <button onClick = { () => this.decrement()}>-</button>
            </>
        )
    }
}

export default Counter