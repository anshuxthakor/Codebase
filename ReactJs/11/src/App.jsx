import React from "react";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";

const App = () => {
  return (
    <div className="px-5 py-3 relative">
      <Navbar />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 pt-5">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>

      {/* Popup form — toggle visibility via state later */}
      {/* <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
        <Form />
      </div> */}
    </div>
  );
};

export default App;