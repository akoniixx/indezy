import React, { Component } from 'react';
import { Button } from 'antd';
class Topbar extends Component{
    constructor(){
        super();
        this.state={
            data:[],
            message:"Like",
            type:""
        };
        this.changeMessage = this.changeMessage.bind(this);
        this.insertData = this.insertData.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    changeMessage(){
        this.setState({message:"SuperLike"});
    }
    insertData(){
        const item="React";
        const myArray=this.state.data;
        myArray.push(item);
        this.setState({data:myArray});
    }
    onChange(event){
        this.setState({type:event.target.value})
    }
    render(){
        // setTimeout(()=>{
        //     this.setState({start:'2'});
        // },1000);
        
        // setInterval(()=>{
        //     const prevState = this.state.count;
        //     this.setState({count:prevState+1});
        // },100);
        return(
            <div>
                <h1>first sec</h1>
                <h2>{this.state.data}</h2>
                <h2>{this.state.message}</h2>
                <button onClick={this.changeMessage}>{this.state.message}</button>
                <button onClick={this.insertData}>Insert</button>
                <input type="text" onChange={this.onChange}/> <br/>
                <h1>type : {this.state.type}</h1>
            </div>
        );
    }
}
export default Topbar;