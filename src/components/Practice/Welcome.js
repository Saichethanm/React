import React, {Component} from "react";

class Welcome extends Component{
    render(){
        return (
            <>
            <h3>{this.props.att1}</h3>
            <h2>{this.props.children}</h2>
            </>
        )
    }
}

export default Welcome

