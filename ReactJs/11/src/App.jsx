import React, { useState } from "react";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || [];
  });

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
          <Form setToggle={setToggle} setUsers={setUsers} users={users} />
        </div>
      )}
    </div>
  );
};

export default App;
