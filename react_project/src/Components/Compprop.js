import React, {Component} from 'react';
import UserDetails from "./UserDetails";
class Compprop extends Component{
    state={
        name: "Shreya Sharma",
    };
    componentDidMount(){
        console.log("All User List was mounted");
    }
    componentWillUnmount(){

    }
    setStateName = (name) =>{
        this.setState({...this.state,name});
    }}