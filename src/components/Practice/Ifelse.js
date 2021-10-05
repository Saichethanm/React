import React, {Component} from "react";

class Ifelse extends Component {

    constructor(){
        super()
        this.state = {
            message: "Hello world from state",
            isLoggedIn: false
        }
        this.loginHandler = this.loginHandler.bind(this)
    }

    loginHandler(){
        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        })
    }

    render() {

        if(this.state.isLoggedIn){
            return (
            <>
            <button onClick={this.loginHandler}>click me</button>
            <h1>{this.state.message}</h1>
            </>
            )
        }
        else{
            return          <>
            <button onClick={this.loginHandler}>click me</button>
            <h1>Hello</h1>
            </>
        } 
    }
}

export default Ifelse 