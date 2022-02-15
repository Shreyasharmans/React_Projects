import React, { Component } from "react";

const UserDetails = (props) => {
  // let user=props.user;
  let {user}=props;
//   props.user = {
//     name: "Shantanu",S
//     email: "a@b.com",
//     phone: "1234567890",
//   };
//   let user = props.user;
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px" }}>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
        <br />
        <strong>Phone:</strong> {user.phone}
      </p>
    </div>
  );
};

//using class components 1
// class UserDetails extends Component{
//     user = this.props.user;
//     render(){
//         return(
//             <div style={{ border: "1px solid #ccc", padding: "10px" }}>
//         <p>
//             <strong>Name:</strong> {this.user.name}
//         </p>
//         <p>
//             <strong>Email:</strong> {this.user.email}
//             <br/>
//             <strong>Phone:</strong> {this.user.phone}
//         </p>
//         </div>
//         );
//     };
// }

// //using class components 2
// class UserDetails extends Component {
//   render() {
//     let { user } = this.props;

//     return (
//       <div style={{ border: "1px solid #ccc", padding: "10px" }}>
//         <p>
//           <strong>Name:</strong> {user.name}
//         </p>
//         <p>
//           <strong>Email:</strong> {user.email}
//           <br />
//           <strong>Phone:</strong> {user.phone}
//         </p>
//       </div>
//     );
//   }
// }

// //using class components 3 notworking
// class UserDetails extends Component {
//     render() {
//       this.props.user = {
//           name: "Shantanu",
//             email: "a@b.com",
//             phone: "1234567890"
//       };

//       return (
//         <div style={{ border: "1px solid #ccc", padding: "10px" }}>
//           <p>
//             <strong>Name:</strong> {this.props.user.name}
//           </p>
//           <p>
//             <strong>Email:</strong> {this.props.user.email}
//             <br />
//             <strong>Phone:</strong> {this.props.user.phone}
//           </p>
//         </div>
//       );
//     }
//   }

export default UserDetails;





























// import React, {useState} from 'react';
// import "../test.css";
// import AllUserList from "./AllUserList";
// import Name from "./Name";

// const UserDetails = ({user={}}) => {
//     const [h1Text,setH1Text] = useState(" ");
//     return(
       
//         <div>
//         <h3>{user.name}</h3>
//         <h5>
//             Email: {user.email}
//             <br/>
//             Phone Number: {user.phoneNumber}
//         </h5>
//         <h1>{h1Text}</h1>
//         <button onClick={(e)=>{
//             // console.log("Button Clicked");
//             setH1Text("This is Cipher Scchools!");
//         }}
//         >
//             Click Me!

//         </button>
//         </div>
//     );
// };

// export default UserDetails;