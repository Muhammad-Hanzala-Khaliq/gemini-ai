import React, { useEffect } from "react";
import "./DashboardLayout.css";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth, UserButton } from "@clerk/clerk-react";
import ChatList from "../../components/ChatList/ChatList";

const DashboardLayout = () => {
  const { userId, isLoaded } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    console.log("isLoaded:", isLoaded, "userId:", userId);
    if (isLoaded && !userId) {
      navigate("/sign-in");
    }
  }, [isLoaded, userId, navigate]);

  if (!isLoaded) return "Loading...";
  return (
    <div className="dashboardLayout">
      <div className="menu">
        <ChatList />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
