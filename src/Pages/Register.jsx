import React from "react";
import Add from "../images/iconimg.png"
 
const Register = () => {
  return (
    <div className="formcontainer">
      <div className="formwraper">
        <span className="logo">CHAT APP</span>
        <span className="title">Register</span>
        <form>
         
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" /> {/* Fixed typo here */}
          <input style={{display:"none"}} type="file"  id="file"/>
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an Avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
