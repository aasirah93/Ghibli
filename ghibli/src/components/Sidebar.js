import "./Sidebar.css";
import React from "react";

export const Sidebar = ({ width, height children }) => {

  return (
      <div className="side-bar" style={{width: width, minHeight: height }}>
        <React.Fragment>{children}<React.Fragment/>
      </div>
  );
};

on click
button changes to another request