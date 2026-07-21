import React from "react";

const Login = ({ setToggle }) => {
  return (
    <div className="page">
      <div className="left">
        <div className="brand-mark">Z</div>
        <div className="left-content">
          <h2>Welcome back</h2>
          <p>Sign in to pick up right where you left off.</p>
        </div>
        <div className="left-footer">
          <span>© 2026 Zoe Corporation.</span>
        </div>
      </div>
      <div className="right">
        <h1>Login</h1>
        <form action="">
          <input type="text" placeholder="Username" autoComplete="username"/>
          <input type="password" placeholder="Password" autoComplete="current-password"/>
          <button>Login</button>
        </form>
        <p>
          Don't have an account?<span onClick={() => setToggle((prev) => !prev)}>Register</span>
        </p>
      </div>
    </div>
  );
};

export default Login;