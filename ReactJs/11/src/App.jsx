import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem("users");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <div className="px-5 py-3 relative">
      <Navbar setToggle={setToggle} />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 pt-5">
        {users.map((elem, index) => (
          <UserCard key={index} user={elem} />
        ))}
      </div>
      {toggle && (
        <div className="fixed inset-0 bg-black/60 flex items-start justify-center pt-16">
          <Form setToggle={setToggle} setUsers={setUsers} />
        </div>
      )}
    </div>
  );
};

export default App;
