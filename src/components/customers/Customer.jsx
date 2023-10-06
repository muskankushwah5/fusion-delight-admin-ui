import React, { useEffect, useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import SideUpperbar from '../SideUpperbar/SideUpperbar'

import "./Customer.css"
import RecentInfo from './Data';
import { allUsersHandler } from '../../services/userApi';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';


function Customer() {
  const userData = (JSON.parse(localStorage.getItem("AdminUser")));
  const navigate = useNavigate();
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


  const [data , setData] = useState(null);
  useEffect(()=>{
    toast.loading("getting all users");
      const func = async()=> {
        try{
            const response = await allUsersHandler();
            if(!response){
              alert("Reload the page again");
            }
            else{
              console.log(response.data);
              setData(response.data);
            }
        }
        catch(err){
          alert(err.message);
        }
      } 

      func();
      toast.dismiss();
  },[]);
  return (
    <div style={{display:"flex",flexDirection:"row"}}>
    <div style={{width:"16%"}}>
     <Sidebar/>
    </div>
    <div style={{width:"80%",marginTop:"0px",display:"flex",flexDirection:"column",margin:"2%"}}>
        <SideUpperbar title={"Customer"}/>
        
        <RecentInfo data = {data}/>
        </div>
    </div>
  )
}

export default Customer
