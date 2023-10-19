import React from "react";

const Register = () => {
  return (
    <div className="formcontainer">
      <div className="formwraper">
        <form>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" /> {/* Fixed typo here */}
          <button>Sign up</button>
        </form>
        <p>You do have an account</p>
      </div>
    </div>
  );
};

export default Register;
