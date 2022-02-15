import React from "react";
import { connect,useDispatch,useSelector} from "react-redux";
import { increment,decrement,reset} from "../actions/CounterActions";
 const ReduxCounter = ({
     increment:inc,
     decrement:dec,
     reset:res,
    }) => {
        const state = useSelector((state)=>state);
        const dispatch = useDispatch();
    return (
     <div>
         <h2>The Count is: {state.count} {state.testPromise}</h2>
         <button  onClick={(e)=> dispatch(increment())}>Increase</button>
         <button  onClick={(e)=>dispatch(decrement())}>Decrease</button>
         <button  onClick={(e)=> dispatch(reset())}>Reset</button>
         <button  onClick={(e)=> dispatch({type: "TEST"})}>Test</button>
         <button onClick={(e)=>{
             state.testPromise.then((data)=>{
                 dispatch({type: "TEST_FULFILLED", payload: data});             
             });
         }}>TestFulfilled</button>
     </div>
    );
 };
 
export default ReduxCounter;






























// import React from "react";
// import { connect} from "react-redux";
// import { increment,decrement,reset} from "../actions/CounterActions";
//  const ReduxCounter = ({
//      count,
//      increment:inc,
//      decrement:dec,
//      reset:res,
//     }) => {
//     return (
//      <div>
//          <h2>The Count is: {count} </h2>
//          <button onClick={(e)=> inc()}>Increase</button>
//          <button  onClick={(e)=> dec()}>Decrease</button>
//          <button  onClick={(e)=> res()}>Reset</button>
//      </div>
//     );
//  };
 
// // This is older method came wgen redyx was introduced but we uses UsdeSelector these days
//  const mapStateToProps = (state) => ({   
//      count: state.count });
//      const mapDispatchToProps = (dispatch) => ({
//          increment: () => dispatch(increment()),
//          decrement: () => dispatch(decrement()),
//             reset: () => dispatch(reset())
//      });
//     //  export default ReduxCounter;
//  export default connect(mapStateToProps,mapDispatchToProps)(ReduxCounter);
// //  connect is HOF(Higher Order Function) which returns a HOC(Higher Order Component)
 


