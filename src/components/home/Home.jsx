import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import SideUpperbar from "../SideUpperbar/SideUpperbar";

import "../../App.css";
import DataCards from "./DataCards";
import DataCard2 from "./DataCard2";
import './Home.css';
import { allOrdersHandler } from "../../services/orderApi";
import { allBookingHandler } from "../../services/bookingApi";
import RecentInfo from "../orders/Data";
import { useNavigate } from "react-router";
import MobileSidebar from "../sidebar/MobileSidebar";

function Home() {
  const userData = JSON.parse(localStorage.getItem("user"));

  const [totalSales , setTotalSales] = useState(0);
  const [totalIncome , setTotalIncome] = useState(0);
  const [totalOrder , setTotalOrder] = useState(0);
  const [totalReservation , setTotalReservation] = useState(0);

  const [total24hSales , setTotal24hSales] = useState(0);
  const [total24hIncome , setTotal24hIncome] = useState(0);
  const [total24hOrder , setTotal24hOrder] = useState(0);
  const [total24hReservation , setTotal24hReservation] = useState(0);

  
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


  useEffect(()=>{
  
    let tempTotalIncome =0 , tempTotalSales = 0 , temp24hOrder =0;
    let tempTotal24hIncome =0 , tempTotal24hReservation = 0;
    const response = allOrdersHandler()
    .then((res)=>{
      const data = res.data;
      setTotalOrder(data);
      const order24hData = data?.filter((item,index)=>{
        tempTotalIncome = tempTotalIncome + item.totalPrize;
        const createdAtDate = new Date(item.createdAt);
        const currentTime = new Date().getTime();
        const createdAtTime = createdAtDate.getTime();

        const timeDifference = currentTime - createdAtTime;

        const isWithin24Hours = timeDifference <= 24 * 60 * 60 * 1000;

        if (isWithin24Hours) {
          tempTotal24hIncome = tempTotal24hIncome + item.totalPrize;
          temp24hOrder = temp24hOrder + 1;
            return true;
        }
      })
      setTotal24hOrder(order24hData);
    })
    .catch((err)=>{
      alert(err);
    })

    const response2 = allBookingHandler()
    .then((res)=>{
      const data = res.data;
      setTotalReservation(data);
      const order24hData = data?.filter((item,index)=>{
        const createdAtDate = new Date(item.createdAt);
        const currentTime = new Date().getTime();
        const createdAtTime = createdAtDate.getTime();

        const timeDifference = currentTime - createdAtTime;

        const isWithin24Hours = timeDifference <= 24 * 60 * 60 * 1000;

        if (isWithin24Hours) {
          tempTotal24hReservation = tempTotal24hReservation + 1;
            return true;
        }
      })
      setTotal24hReservation(order24hData);
    })
    .catch((err)=>{
      alert(err);
    })

    setTotalIncome(tempTotalIncome);
    setTotalSales(setTotalReservation.length + setTotalOrder.length);
    setTotal24hReservation(total24hReservation.length);
    setTotal24hOrder(total24hOrder.length);
    setTotal24hSales(tempTotal24hReservation + temp24hOrder);
    setTotal24hIncome(tempTotal24hIncome);
    

  },[]);

  const [dataCards1, setDataCards1] = useState([
    {
      title: "Total Sales",
      value: "443456",
      percentage: 90,
      icon: "analytics",
      color: "#7380ec",
    },
    {
      title: "Total Income",
      value: "$34506",
      percentage: 80,
      icon: "bar_chart",
      color: "#ff7782",
    },
    {
      title: "Total Reservation",
      value: "2300",
      percentage: 67,
      icon: "stacked_line_chart",
      color: "#41f1b6",
    },
    {
      title: "Total Orders",
      value: "78989",
      percentage: 80,
      icon: "analytics",
      color: "#ffbb55",
    },
  ]);


  const onClickHandler = (type)=>{
    if(type === 1){
      navigate("/orders");
    }
    if(type === 3){
      navigate("/reservations");
    }
    if(type === 4){
      navigate("/users");
    }
    else{
      navigate("/addProduct");
    }
  }

  return (
   <> <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ width: "16%" }}>
        <Sidebar />
       
      </div>
      <div style={{ width: "80%", marginTop: "0px" }}>
        <SideUpperbar />
        
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          
          <div>
            <h2
              style={{
                margin:"4%",
                marginLeft:"10%"
              }}
            >
              Recent Updates
            </h2>
          </div>
        </div>
        <div className="cards">
          {dataCards1.map((data, index) => {
            return (
              <DataCards
                title={data.title}
                value={data.value}
                percentage={data.percentage}
                icon={data.icon}
                color={data.color}
              />
            );
          })}
        </div>
        <div className="imd-div">
        <div style={{display:"flex",flexDirection:"column",margin:"4%",marginLeft:"-10%",marginTop:"-14%"}}>
        <h2>Recent Orders</h2>
        <DataCard2/>
        </div>
        </div>
        
       
        </div>
       
    </div>
    <div className="hide-div">
    <button onClick={()=>onClickHandler(4)}>Know User</button>
    <button onClick={()=>onClickHandler(1)}>Know Orders</button>
    <button onClick={()=>onClickHandler(3)}>Know Reservations</button>
  </div>
  </>
  );
}

export default Home;
