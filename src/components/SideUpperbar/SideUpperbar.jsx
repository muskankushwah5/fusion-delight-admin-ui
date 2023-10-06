import React, { useState } from "react";
import "../../App.css";
import MobileSidebar from "../sidebar/MobileSidebar";
import { useNavigate } from "react-router";

const SideUpperbar = ({ title }) => {

  const adminData = (JSON.parse(localStorage.getItem("AdminUser")));

  const navigate = useNavigate();

  if(!adminData){
    navigate("/login");
  }
  const logoutHandler = ()=>{
    localStorage.removeItem("AdminUser");
    navigate("/login");
  }
  return (
    <div
      className="main"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
    
      <div style={{ display: "flex", flexDirection: "column" }}>
      
      <h1 style={{ marginTop: "8%" }}>{title ? title : "DASHBOARD"}</h1>
     
      </div>
      <div class="right" style={{ marginLeft: "30%" }}>
        <div class="top">
        <div style={{zIndex:"400"}}><MobileSidebar/></div>
        
          <div class="profile">
          <div className="upper-mobile-links">
          <a href="/">Home</a>
          <a href="/customers">Customers</a>
          <a href="/reservations">Reservation</a>
          <a href="/orders">Order</a>
          <button style={{color:"black"}} onClick={logoutHandler}>Logout</button>
      </div>
            <div class="info">
              <p>
                Hey, <b>{adminData?.data.name}</b>
              </p>
              <small class="text-muted">Admin</small>
            </div>
            <div class="profile-photo">
              <img src="img/profile-1.jpg" alt="Daniel" />
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default SideUpperbar;
