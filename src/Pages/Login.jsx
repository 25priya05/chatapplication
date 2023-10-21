import React from "react";
import Add from "../images/iconimg.png"
 
const Login = () => {
  return (
    <div className="formcontainer">
      <div className="formwraper">
        <span className="logo">CHAT APP</span>
        <span className="title">Register</span>
        <form>
         
        
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" /> {/* Fixed typo here */}
          
          <button>Sign in</button>
        </form>
        <p>You don't  have an account? Register</p>
      </div>
    </div>
  );
};

export default Login;