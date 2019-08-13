import React, { Component } from 'react';
class Contents extends Component{
    render(){
        return(
            <div>
                <h1>Con</h1>
                <p>{this.props.name}</p>
                <p>{this.props.lastName}</p>
            </div>
        );
    }
}
export default Contents;