import React, {useState} from 'react';
import UserDetails from "./UserDetails";
import Test from "../Test";

//using hooks for statechange
const AllUserList = () => {
    // let xyz = useState();//xyz is an array which returns 2 things xyz[0] is the state and xyz[1] is the function to update the state or setter
    // let [state, setState] = useState({name:'Amri'});
    // setTimeout(()=>{
    //     setState({
    //         ...state,
    //         name:'HelloAmri'
    //     });
    // },5000);
    // 
    // return <h1>the name is {state.name}</h1>;

    const [state, setState] = useState({name:'Shreya'});
    let allUsers=[
                {name:'Hello1',email:'a@b.com',phone:'1234567890'},
                {name:'Hello2',email:'a@b.com',phone:'1234567890'},
                {name:'Hello3',email:'a@b.com',phone:'1234567890'}
            ];

    let setStateName = (name)=>{
        setState({...state, name});
    };
    return(
        <div>
            <Test name={state.name} setName={setStateName}/>
            
            {
                allUsers.map((user,index)=>(
                    <UserDetails key={index} user={user}/>
                ))
            }
        </div>
    );
};





//Array using Function
// const AllUserList = () => {
//     let allUsers= [
//         {
//             name:"John",
//             email:"john@gmail.com",
//             phone: "+91-9816477599",
//         },
//         {
//             name:"Shreya",
//             email:"shreya@gmail.com",
//             phone: "+91-7876061381"
//         },
//         {
//             name:"Shreya1",
//             email:"shreya1@gmail.com",
//             phone: "+91-0000000000"
//         }
//     ];





// return(
//     <div>
//         <UserDetails user={allUsers[0]} />
//         <UserDetails user={allUsers[1]} />
//         <UserDetails user={allUsers[2]} />
//     </div>
// );


//we cannot call object of array like this: it will give error:(As calling object inside jsx is wrong, we can do this using arrays, maps)
//         let array=[
//         <UserDetails user={allUsers[0]} />
//         <UserDetails user={allUsers[1]} />
//         <UserDetails user={allUsers[2]} />
//          ];
//

// let array = allUsers.map((user, index) => (
//     <UserDetails key={index} user={user}/>
// ));

// return <div>{array}</div>

// };
export default AllUserList;