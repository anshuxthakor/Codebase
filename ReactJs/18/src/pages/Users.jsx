import React, { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import { axiosInstance } from "../config/axiosInstance";

const Users = () => {
  const [usersData, setUsersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getUsersData = async () => {
    try {
      setIsLoading(true);
      const response = await axiosInstance.get("/users");
      console.log("Users Api Response —> ", response);
      setUsersData(response.data);
    } catch (error) {
      console.error("Error fetching users data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-black uppercase tracking-tight text-[#16324f] leading-none">
        User Directory
      </h1>
      <div className="flex items-center gap-2 mt-2 mb-8">
        <span className="h-0.75 w-8 bg-[#d7263d]" />
        <span className="font-mono text-[11px] text-[#5b7089]">
          {isLoading
            ? "loading records"
            : `${usersData.length} ${usersData.length === 1 ? "record" : "records"} on file`}
        </span>
      </div>

      {isLoading ? (
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-[#5b7089] animate-pulse">
          <span className="h-2 w-2 bg-[#d7263d]" />
          Fetching user records...
        </div>
      ) : usersData.length === 0 ? (
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#5b7089]">
          No records found.
        </p>
      ) : (
        <div className="flex flex-col gap-10">
          {usersData.map((val) => (
            <UserCard key={val.id} user={val} maxWidth="max-w-none" />
          ))}
        </div>
      )}
    </div>
  );
};

export default Users;