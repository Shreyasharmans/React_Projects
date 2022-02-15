import React, {Component} from 'react';
import { connect } from 'react-redux';
import {testAPI} from "../api/testApi";
class SumNumbers extends Component {
    state ={
        firstNumber: 0,
        secondNumber: 0,
        sum: 0,
    };
    componentDidMount(){
        console.log("We are in ComponentDidMount");
        testAPI(5,6).then((sum) => {
            this.setSum(sum);
        });
    }
    flag=true;
    componentDidUpdate(){
        console.log("Component has updated!");
        if(this.flag){
            this.flag=false;
            testAPI(5,6).then((sum) => {
                this.setSum(sum);
            });
        }
    }
    componentDidCatch(){
        console.log("Component has caught an error!");
    }
    setSum = (sum,firstNumber,secondNumber) =>{
        if (typeof sum !== "undefined"){
        this.setState({ ...this.state, sum});
        }
        else{
            this.setState({ ...this.state, sum: this.state.firstNumber + this.state.secondNumber,
            });    
        }
    };
    render(){
        return(
            <div>
                <input type="number"
                placeholder="Enter first Number"
                onChange={(e) => {
                    this.setState({
                        ...this.state,
                        firstNumber: parseInt(e.target.value),
                    });
                }}
                value={this.state.firstNumber}
                />
                <input type="number"
                placeholder="Enter second Number"
                onChange={(e) => {
                    this.setState({
                        ...this.state,
                        secondNumber: parseInt(e.target.value),
                    });
                }}
                value={this.state.secondNumber}
                />
                <button onClick={(e)=> this.setSum()}>Add Numbers</button>
                <h3>The sum is: {this.state.sum}</h3>
                <h1>The count is: {this.props.count}</h1>
                {/* //The change in redux component count will be reflected and rendered to every chuild component. */}
            </div>
        );
    }
}
export default connect((state)=>({count: state.count}))(SumNumbers);