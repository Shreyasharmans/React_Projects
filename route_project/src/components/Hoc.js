import React from "react";

function higherOrderComponent(HocComponent) {
return class extends React.Component {
render() {
return(
<div>
    <h1>hoc</h1>
<HocComponent />
</div>
)}}}

export default higherOrderComponent;
