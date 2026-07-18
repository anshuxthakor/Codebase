import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);
    console.log(updated);
  };

  return (
    <div className="form">
      <input
        name="name"
        type="text"
        placeholder="Enter Your Name"
        onChange={handleChange}
      />
      <input
        name="email"
        type="text"
        placeholder="Enter Your Email"
        onChange={handleChange}
      />
      <input
        name="password"
        type="text"
        placeholder="Enter Your Password"
        onChange={handleChange}
      />
      <button className="btn">Submit</button>
    </div>
  );
};

export default App;
