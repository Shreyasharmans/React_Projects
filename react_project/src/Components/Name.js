//console.log("----------------------Function------------------------");

import React, {useState} from "react";
const Name = () =>{
    const[state, setState]=useState({
        name:"Shreya"
    });
    let setName = (e) =>{
        if(state.name === "Shreya"){
        setState({...state,name:"Amrit Anand"});
        }
        else
        setState({...state,name:"Shreya"});
    }
 return(
     <>
     <h1>The name is: {state.name}</h1>
     <button onClick={setName}>Click Me!</button>
     </>
 
    );
};
export default Name;
//Event Handling using Class with binding and without binding



//console.log("----------------------Class using binding------------------------");
// import React, {Component} from 'react';
// class Name extends Component{
//         state={name: "Shantanu Kumar"};
//         constructor(props){
//         super(props);
//         this.setName = this.setName.bind(this);
//         }
//         setName(e){
//                 this.setState({...this.state,name: "Amrit Anand"});
//         }
//  //console.log("----------------------Class without binding------------------------");
//  //THis is another method of class without binding
//     // state={name: "Shantanu Kumar"};
//     // setName(name){
//     //     this.setState({...this.state,name});
//     //
 
//     render(){
//         return(
//            <> 
//             <h1>The name is: {this.state.name}</h1>
//             <button onClick={() =>this.setName("Amrit Anand")}>Click Me! </button>
//             </>

//         );
//     }
// }
// export default Name;





//Multiple Event Handling

// import React, {Component, useState} from "react";
// class Name extends Component{
//     state ={name: "Shreya Sharma"};
//     setName =(e) =>{
//         this.setState({...this.state,name: 'Amrit Anand'});
//     };
//     render(){
//         return(
//             <>
//             <h1>The name is: {this.state.name}</h1>
//             <button onClick={this.setName}>Click me!</button>
//             </>
//         );
//     }
// }

// class Name extends Component{
//     state ={name: "Shreya Sharma"};
//     setName =(name) =>{
//         this.setState({...this.state,name});
//     };
//     testHandler = () =>{
//         console.log("testHandler");
//     };
//     render(){
//         return(
//             <>
//                <h1>The name is: {this.state.name}</h1>
//             <button onClick={() => {
//              this.setName("Tanmay");
//              this.testHandler();
//             }}>Click me!</button> 
//             </>
            
               
//         );
    
//     }
// }

// export default Name;
