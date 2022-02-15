import React, {useState} from 'react';
const Counter = () => {
const [count, setCount] = useState(0);
const increment = () => {
      setCount(count + 1);   
} 
const decrement = () => {
    setCount(count - 1);   
}     
return(
    <>
    <h1>The count is: {count}</h1>
    
    <button onClick={increment} ><h1>+</h1></button>

    <button onClick={decrement}><h1>-</h1></button>

    </>

   );
};

export default Counter;