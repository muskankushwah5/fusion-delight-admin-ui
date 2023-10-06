import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import SideUpperbar from '../SideUpperbar/SideUpperbar'

import "../../App.css";
import RecentInfo from './Data';
import { useNavigate } from 'react-router';

function Reservation() {
  const userData = (JSON.parse(localStorage.getItem("AdminUser")));
  const navigate = useNavigate();
  if(!userData){
    navigate("/login");
  }
if (userData && userData.expirationTime) {
  const currentTime = new Date().getTime();

  if (currentTime > userData.expirationTime) {
    // Data has expired, remove it from localStorage
    localStorage.removeItem("user");
    navigate("/login");
  } else {
    // Data is still valid, use it
    const user = userData.data;
    console.log(user);
  }
}

  return (
    <div style={{display:"flex",flexDirection:"row"}}>
    <div style={{width:"16%"}}>
     <Sidebar/>
    </div>
    <div style={{width:"80%",marginTop:"0px",display:"flex",flexDirection:"column",margin:"2%"}}>
        <SideUpperbar title={"Order"}/>
       
        <RecentInfo/>
        </div>
    </div>
  )
}

export default Reservation;