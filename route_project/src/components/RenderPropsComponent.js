import React from "react";//child

//using function component
const RenderPropsComponent=(props)=>{
    return(
        <div>
            <h2>This is a child component of {props.name}</h2>
            {props.render()}
        </div>
    );
}

//using class component
// class RenderPropsComponent extends React.Component {
//   render() {
//     return (
//       <div>
//         <h2>This is a child component</h2>
//         {this.props.render()}
//       </div>
//     );
//   }
// }

export default RenderPropsComponent;