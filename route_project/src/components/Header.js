import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return (
      <>
      {/* Link is better way in routing as it removes the bug of page reloading */}
        <nav>
      <Link to="/">Home</Link><br></br>
      <Link to="/contact">Contact</Link><br></br>
      <Link to="/about">About</Link><br></br>
      <Link to="/signup">Sign Up</Link><br></br>
      <Link to="/tasks">Tasks</Link><br></br>
      <Link to="/counter">Counter</Link><br></br>
      <Link to="/test">Test</Link><br></br>
      <Link to="/sample">Sample</Link><br></br>
      <Link to="/photos">Photos</Link><br></br>
      <Link to="/international">Internationalization</Link><br></br>
      <Link to="/redux-counter">ReduxCounter</Link><br></br>
      </nav>






      {/* <nav>
      <a href="/home">Home</a>
      <a href="/contact">Contact</a>
      <a href="/about">About</a>
      <a href="/signup">Sign Up</a>
      </nav> */}
      </>

        
           
    );
};
export default Header;