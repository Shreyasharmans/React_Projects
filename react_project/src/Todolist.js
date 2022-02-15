
import React, {useState} from 'react';
import Todoinp from './Todoinp';
import Todo from './Todo';


const Todolist= () => {
  const [tasks, setTask] = useState([
    {
      id: 1,
  name:"Shreya",
  taskStatus:false,
    },]);
    
  // const [list,setList] = useState([]);

  //  const handleChange= (event) => {
  //   setState({state:event.target.value});
  // };
  const handleSubmit= (event) => {
    event.preventDefault();
    // console.log(state);
    // const date={state};
    //   setList((ls) => [...ls, date]);
    //   setState("");
    if(tasks.name !== '' && tasks.name !== undefined){
    setTask([...tasks,{id:tasks.length+1,name:tasks.name,taskStatus:false},
    ]);
    }

  };
    



    
    // alert('A name was submitted: ' + state.name);
    // console.log(event.target.value)  
    // 
    // state.arr.push(state.name);
    // 
  
          
            
   
    return(
        <div>
      <Todoinp  tasks={tasks} handleSubmit={handleSubmit}/>
       
         
       {
         tasks.map(event =>(
           <Todo key={event.id} task={event} tasks={tasks} updateTask={setTask}/>
         ))
        }
        </div>
        );
      } 

    
export default Todolist;




// import React, {useState} from 'react';
// const Todo= () => {
//   const [state, setState] = useState(""); 
//   const [list,setList] = useState([]);

//   //  const handleChange= (event) => {
//   //   setState({state:event.target.value});
//   // };
//   const handleSubmit= (event) => {
//     event.preventDefault();
//     console.log(state);
//     const date={state};
//       setList((ls) => [...ls, date]);
//       setState("");
//     }
//     const handleDelete= (index) => {     
//       // setList((ls) => ls.filter((_, i) => i !== index));
//       const newlist = [...list];
//       newlist.splice(index, 1);



//     }
//     // alert('A name was submitted: ' + state.name);
//     // console.log(event.target.value)  
//     // 
//     // state.arr.push(state.name);
//     // 
  
    
          
            
   
//     return(
//         <div>
//       <form >
//         <label>
//           Name:
//           <input type="text" value={state} placeholder="enter text" onChange={(e)=>setState(e.target.value)} />
//         </label>
//        <button onClick={handleSubmit}>Add</button>
//        {
//         list.map((a,index)=><div key={index}>
//           <li key={index}>{a.state}</li>
//         </div>)
//       } 
//       {/* <button onClick={handleDelete}>Delete</button>  */}
//       <button onClick={handleDelete()}>Delete</button>   
//       </form>
    
      
//         </div>
//     );
// }


    
//     export default Todo;