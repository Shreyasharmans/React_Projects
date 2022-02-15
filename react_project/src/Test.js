import React,{Component} from 'react';
import "./test.css";
// class Test1 extends Component{
//     render(){
//         console.log("Hello");
//         return(
//             <div>
//             <h1 id="idd">Hello,My name is Shreya</h1>
//             <h1 id="idd">Hello,My name is Shreya1</h1>
//             </div>
//         );
//     }
// }
// export default Test1;
import PropTypes from "prop-types";

const Test = ({ name = "",setName }) => {
  return (
    <>
      <h1>The name is: {name}</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
};

Test.propTypes = {
  name: PropTypes.string,
  setName: PropTypes.func,
};


export default Test;

    //     // class Test extends Component{
//   state = {isLoggedin: false };
//render(){
    //     return (
    //       <div>
    //          { !this.state.isLoggedin?(
    //         <h1> Not logged in</h1>
    //       ):(
    //         <h1> Logged in</h1>
    //       )}
    //       <button onClick={()=>this.setState({isLoggedin:!this.state.isLoggedin})}>Login</button>
    //       </div>
         
    //     );
    //   }
    // }
    
    //functional comp
    // const Test = () => {
    //   return (
    //     <div className='name'>
    //       <h1>Shreya111</h1>
    //     </div>
    //   );
    // }
    
    //lifecycle of react component
    //1mounted 2updated 3unmounted
    //class comp - buffet
    //functional comp - restraunt
    //hooks gv power to fn comp as class comp




