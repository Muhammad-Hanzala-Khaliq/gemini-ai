import React from "react";
import "./ChatList.css";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const ChatList = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["userChats"],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_URL}/api/userchats`, {
        credentials: "include",
      }).then((res) => res.json()),
  });
  return (
    <div className="chatList">
      <span className="title">DASHBOARD</span>
      <Link to="/dashboard">Create a new Chart</Link>
      <Link to="/">Explore My AI</Link>
      <Link to="/">Contact</Link>
      <hr />
      <span className="title">RECENT CHARTS</span>
      <div className="list">
        {isPending
          ? "Loading..."
          : error
          ? "Something went wrong"
          : data.map((chat) => {
              return (
                <Link to={`/dashboard/chats/${chat._id}`} key={chat._id}>
                  {chat.title}
                </Link>
              );
            })}
      </div>
      <hr />
      <div className="upgrade">
        <img src="/logo.png" alt="" />
        <div className="texts">
          <span>Upgrade to Pro</span>
          <span>Get Unlimited Access to All Features</span>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
