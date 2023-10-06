import React, { useEffect, useState } from 'react'
import StatisticsChart from './BarChart'
import StatisticsPieChart from './PieChart'
import SideUpperbar from '../SideUpperbar/SideUpperbar'
import Sidebar from '../sidebar/Sidebar'
import { allDataHandler, orderDataHandler, reservationDataHandler, userDataHandler } from '../../services/countApi'


import "./PieChart.css";
import { useNavigate } from 'react-router'
import toast from 'react-hot-toast'
const Analytics = () => {

  const data = (JSON.parse(localStorage.getItem("AdminUser")));
  const navigate = useNavigate();
if (data && data.expirationTime) {
  const currentTime = new Date().getTime();

  if (currentTime > data.expirationTime) {
    // Data has expired, remove it from localStorage
    localStorage.removeItem("user");
    navigate("/login");
  } else {
    // Data is still valid, use it
    const user = data.data;
    console.log(user);
  }
}


  const [userData,setUserData] = useState([]);
  const [allData , setAllData] = useState([]);
  const [orderData , setOrderData] = useState([]);
  const [reservationData , setReservationData] = useState([]);

  useEffect(()=>{
    toast.loading("Fetching");
    const tempArray = [];
    const response = allDataHandler()
    .then((res)=>{
      tempArray.push(res.users);
      tempArray.push(res.orders);
      tempArray.push(res.reservations);
      tempArray.push(res.dishes);
      setAllData(tempArray);
    })
    .catch((err)=>{
      alert(err);
    })


    const response2 = orderDataHandler()
    .then((res)=>{
      setOrderData(res);
    })
    .catch((err)=>{
      alert(err);
    })

    const response3 = reservationDataHandler()
    .then((res)=>{
      setReservationData(res);
    })
    .catch((err)=>{
      alert(err);
    })

    const response4 = userDataHandler()
    .then((res)=>{
      setUserData(res);
    })
    .catch((err)=>{
      alert(err);
    })
    toast.dismiss();
  },[]);

  return (
    <div style={{display:"flex",flexDirection:"row"}}>
    <div style={{width:"16%"}}>
     <Sidebar/>
    </div>
    <div style={{width:"80%",marginTop:"0px",display:"flex",flexDirection:"column",margin:"2%"}}>
        <SideUpperbar title={"Customer"}/>
        
        <div style={{display:"flex",flexDirection:"column"}}>
        <div style={{display:'flex',flexDirection:'column'}}>
        <div style={{width:"90%",height:"30%",marginLeft:"4%",marginTop:"4%"}}>
          <h3 style={{fontWeight:"bold",fontSize:"larger"}}>Users Analysis</h3>
          <StatisticsChart userData={userData}/>
        </div>
        <div style={{width:"90%",height:"30%",marginLeft:"4%",marginTop:"4%"}}>
        <h3 style={{fontWeight:"bold",fontSize:"larger"}} className='for-small-devces'>Ratio Statistics</h3>
        <StatisticsPieChart allData={allData}/>
        </div>
        </div>
        <div style={{width:"90%",marginLeft:"5%",marginTop:"4%"}}>
        <h2 style={{fontWeight:"bold",fontSize:"larger"}} >Order Analysis</h2>
        <StatisticsChart userData={orderData}/>
        </div>

        <div style={{width:"90%",marginLeft:"5%",marginTop:"4%"}}>
        <h2 style={{fontWeight:"bold",fontSize:"larger"}}>Reservation Analysis</h2>
        <StatisticsChart userData={reservationData}/>
        </div>
         
        </div>
        </div>
    </div>
  )
}

export default Analytics