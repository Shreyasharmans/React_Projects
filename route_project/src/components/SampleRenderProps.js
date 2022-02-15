import React from 'react';//parent
import RenderPropsComponent from './RenderPropsComponent';
import {useCookies,getAll} from 'react-cookie';
import { getAllTasks } from '../api/testApi';

//usign function component
const SampleRenderProps = (props) => {
    const [cookies, setCookie, removeCookie] = useCookies(['name']);//npm install react-cookie
    console.log(cookies);
    return (
        <RenderPropsComponent 
            render={()=>{
                return(
                    <div>
                    <h2
                        onClick={
                            (e)=>{
                                setCookie("age",22);
                                // // removeCookie("age");
                                console.log(cookies);
                                // getAll.then((cookieTest)=>{console.log(cookieTest);})//giving error
                                }}
                    >This is from render props</h2>
                </div>
                );
            }} name="Anupama"
        />
    );
}


//using class component
// class SampleRenderProps extends React.Component {
//   render() {
//     return (
//         <RenderPropsComponent 
//             render={()=>{
//                 return(
//                     <div>
//                     <h2>This is from render props</h2>
//                 </div>
//                 );
//             }}
//         />
//     );
//   }
// }

export default SampleRenderProps;