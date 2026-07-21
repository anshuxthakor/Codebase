import React, { use, useState } from "react";

const Register = ({ setToggle, setUsers }) => {
  const [formData, setFormData] = useState({username: "", email: "", password: ""});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers((prev) => [...prev, formData]);
    setFormData({ username: "", email: "", password: "" });
    console.log("User registered:", formData);
  }

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
        <form onSubmit={handleSubmit}>
          <input
            required
            value={formData.username}
            name="username"
            onChange={handleChange}
            type="text"
            placeholder="Username"
            autoComplete="username"
          />
          <input
            required
            value={formData.email}
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="Email"
            autoComplete="email"
          />
          <input
            required
            value={formData.password}
            name="password"
            onChange={handleChange}
            type="password"
            placeholder="Password"
            autoComplete="new-password"
          />
          <button>Sign Up</button>
        </form>
        <p>
          Already have an account?
          <span onClick={() => setToggle((prev) => !prev)}>Login</span>
        </p>
      </div>
    </div>
  );
};

export default Register;
