import React, { useRef, useState } from "react";
import { isValidUser } from "../validators/validator";
import {Link, Outlet, useNavigate, useParams, useLocation} from "react-router-dom";
import SumNumbers from "./SumNumbers";

// import {useFormik} from 'formik';

// 1. normal
const SignUpForm = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

// //2. Using formik
// const SignUpForm = () => {
//       const formik = useFormik({
//         initialValues: 
//         {firstName: "",
//         lastName: "",
//         email: "",
//         password: ""},
//         onSubmit: (values) => {
//             if(isValidUser(values)){
//                 console.log("Valid user");
//             }
//             else{
//                 console.log("Not a valid user");
//             }
//         },
//     });

  const [error, setError] = useState("");
  let navigate = useNavigate();
  let params = useParams();
  let location = useLocation();

  let handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    // console.log(state);
  };
  console.log(params);
  console.log(location);

  return (
    <form onSubmit={(e)=>{
        e.preventDefault(); //To prevent reloading the whole page
        //method1 default method
        // if(isValidUser(
        //     {firstName: state.firstName,
        //     lastName: state.lastName,
        //     email: state.email,
        //     password: state.password
        // }))
        //method2 spread operator method
        if(isValidUser({...state}))
        {
            console.log('User is valid');
        } else {
            console.log('User is not valid');

        }}}>
      <label>First Name: </label>
      <input
        type={"text"}
        name={"firstName"}
        onChange={handleChange}
        value={state.firstName}
        placeholder={"First name"}
      />
      <label>Last Name: </label>
      <input
        type={"text"}
        name={"lastName"}
        onChange={handleChange}
        value={state.lastName}
        placeholder={"Last name"}
      />
      <label>Email: </label>
      <input
        type={"email"}
        name={"email"}
        onChange={handleChange}
        value={state.email}
        placeholder={"Email"}
      />
      <label>Password: </label>
      <input
        type={"password"}
        name={"password"}
        onChange={handleChange}
        value={state.password}
        placeholder={"Password"}
      />
      <button type={"submit"}>Sign Up</button>
      <span style={{ color: "red" }}>{error}</span>
      
      <button onClick={(e) => {
       //Write some code to go to sum component
       navigate("/sum")
      }}>
        Go to Sum Component</button>
      {/* <Outlet /> */}
    </form>
  );
};

export default SignUpForm;

