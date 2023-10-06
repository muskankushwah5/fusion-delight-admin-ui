import React, { useEffect, useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import SideUpperbar from '../SideUpperbar/SideUpperbar'

import "../../App.css";
import RecentInfo  from './Data';
import { allDishesHandler } from '../../services/dishApi';
import UpdateModal from './UpdateModal';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';

function Product() {
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


  const [productData , setProductData] = useState([]);
  const [change ,setChange] = useState(true);

  const [updatingData , setUpdatingData] = useState("");

  const [userId , setUserId] = useState("");

  const [show , setShow] = useState(false);

  const handleClose = () =>{
    setShow(false);
  }

  useEffect(()=>{

    toast.loading("Fetching all the dishes...");
    const data = allDishesHandler()
    .then((res) => {
     setProductData(res.data);
      setChange(false);
    })
    .catch((err) => {
      toast.error(err.message);
    });

    toast.dismiss();
  

    

  },[change]);

  useEffect(()=>{
    toast.loading("getting all the products");
      const requiredData = productData.filter((data,index)=>{
        if(String(data._id) === String(userId))
         return true;
        else
         return false;
      })
      setUpdatingData(requiredData[0]);
      setShow(true);
      toast.dismiss();
  },[userId !== ""]);

  const handleUpdate = ()=>{

  }

  return (
    <>
    <div style={{display:"flex",flexDirection:"row"}}>
    <div style={{width:"16%"}}>
        <Sidebar/>
    </div>
    <div style={{width:"80%",marginTop:"0px",display:"flex",flexDirection:"column",margin:"2%"}}>
        <SideUpperbar title={"Products"}/>
       
            <RecentInfo data={productData} setChange = {setChange} setUserId={setUserId}/>
        </div>
    </div>
    {show === true && (<UpdateModal show = {show} setChange = {setChange} handleClose = {handleClose} title = {"Update Item"} dishData = {updatingData} handleUpdate = {handleUpdate} />)}
    </>
  )
}

export default Product;