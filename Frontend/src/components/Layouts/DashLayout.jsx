import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import image from "../../assets/profileAvatar.jpeg"
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const DashLayout = ({children}) => {
  const [user, setUser] = useState("Guest")

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/user/get-user`, { withCredentials: true });
        const data = response.data;

        console.log({data})

        setUser(data);
      } catch (error) {
        console.log("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);
 
  
  return (
    <div className="lg:flex items-cent bg-indigo-600 p-1 ">
      <SideBar />

      {/* Main Content */}
      <div className="flex-col w-full p-3 ">
        {/* Navbar */}
        <div className="flex items-center justify-end gap-4 p-2">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
          Welcome, {user.firstName}!
          </h1>
          <div className="w-12 h-12">
            <Link to='/dashboard'>
            <img
              src={user.profilePhoto || image}
              alt="Profile"
              className="w-full h-full rounded-full"
            />
            </Link>
          </div>
        </div>

        {/* Balance and Chart Section */}
        <div className="">
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DashLayout;