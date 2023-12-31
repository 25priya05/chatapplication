import React from "react";
import Add from "../images/iconimg.png"
 
const Register = () => {
  const handleSubmit = (e)=>{
   e.preventDefault()
   const displayName = e.target[0].value;
   const email = e.target[1].value;
   const password = e.target[2].value;
   const file = e.target[3].files[0];
  }
  return (
    <div className="formcontainer">
      <div className="formwraper">
        <span className="logo">CHAT APP</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
         
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
