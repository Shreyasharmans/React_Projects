//Ternirary Operator

import React,{Component} from 'react';
import "./test.css";
class Condition extends Component{
    state ={ num:20};
    render(){
        
        return(
            <div>
           {this.state.num<10?(
               <h1>No. less than 10 :{this.state.num}</h1>
           ):(
               <h1> No. greater than 10 :{this.state.num}</h1>
           )}
            </div>
        );
    }
}


export default Condition;