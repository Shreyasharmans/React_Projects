import React, {useState} from 'react';
import Test from './Test';
import Test11 from './Test11';
import Condition from './Condition';
import AllUserList from "./Components/AllUserList";
import Name from "./Components/Name";
import StyleCSS from './Components/stylecomponent';
import SumNumbers from "./Components/SumNumbers";
import SignUpForm from "./Components/SignUpForm";
import Counter from "./Components/Counter";
import Todolist from './Todolist';

const App=()=>{
    const [name, setName] = useState("Shant");
    return(
        <div>
        {/* <Test1 key={2}/>
        <Test1 key={3}/>
        <Test1 key={4}/> */}
        <Test11 key={5}/>
        <Condition key={6}/>
        <AllUserList />
        <Name />
        <StyleCSS/>
        <SumNumbers />
        <Test key={1} name={name} setName={(e)=>setName(e)}/>
        <SignUpForm key={10} />
        <Counter key={7}/>
        <Todolist  id={1}/>
        </div>
         );
         //mutiple files export in app.js
            
}
export default App;



















// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
