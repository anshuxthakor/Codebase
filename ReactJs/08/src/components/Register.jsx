import React from "react";

const Register = ({ setToggle }) => {
  return (
    <div className="page">
      <div className="left">
        <div className="brand-mark">Z</div>
        <div className="left-content">
          <h2>Zoe Welcomes You</h2>
          <p>Sign up to get started.</p>
        </div>
        <div className="left-footer">
          <span>© 2026 Zoe Corporation.</span>
        </div>
      </div>
      <div className="right">
        <h1>Sign Up</h1>
        <form action="">
          <input type="text" placeholder="Username" autoComplete="username" />
          <input type="email" placeholder="Email" autoComplete="email" />
          <input type="password" placeholder="Password" autoComplete="new-password" />
          <button>Sign Up</button>
        </form>
        <p>
          Already have an account?<span onClick={() => setToggle((prev) => !prev)}>Login</span>
        </p>
      </div>
    </div>
  );
};

export default Register;