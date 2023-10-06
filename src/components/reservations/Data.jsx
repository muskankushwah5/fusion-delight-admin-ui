import React, { useEffect, useRef, useState } from 'react'
import { allOrdersHandler, deliveryInfoHandler, emailHandler, statusHandler } from '../../services/orderApi';
import { allBookingHandler, updateTableHandler } from '../../services/bookingApi';

import "./Data.css"
import toast from 'react-hot-toast';
  
const RecentInfo = () => {
  const [orderData , setOrderData] = useState([]);
  const [satusUpdate , setStatusUpdate] = useState(false);
  const [statusValue , setStatusValue] = useState("");


 
  const deliveryUpdateHandler = (id)=>{

    const response = updateTableHandler({tableNumber : statusValue},id)
    .then((res)=>{
      console.log(res);
    })
    .catch((Err)=>{
      console.log(Err);
    })

    setStatusUpdate(false);
    

    }
  
    const formatDate = (dateString) => {
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
    
      try {
        const date = new Date(dateString); // Create a Date object from dateString
        const formattedDate = date.toLocaleDateString('en-US', options);
        return formattedDate;
      } catch (error) {
        console.error('Error parsing date:', error);
        return 'Invalid Date'; 
      }
  }

  useEffect(()=>{ 
    toast.loading("Getting all the reservations");
    const response =  allBookingHandler()
    .then((res)=>{
      setOrderData(res.data);
    })
    .catch((err)=>{
      toast.error(err);
    });
    toast.dismiss();
  },[]);
  return (
    <div className='main-div'>
    <table>
    <thead>
      <tr>
        <th >Email</th>
        <th>Date</th>
        <th>Time</th>
        <th >Preferences</th>
        
        <th >Table Number</th>
      </tr>
    </thead>
    <tbody>
        {orderData?.map((item,index) => (
            <tr key={index}>
            <td>{item.email}</td>
            <td>{formatDate(item.date)}</td>
            <td>{item.time}</td>
            
            <td>{item.preferences}</td>
            <td>{item.tableNumber ? item.tableNumber : 
            satusUpdate === true ?
           <div>
            <input placeholder='table No' type='number' onChange={(e)=>setStatusValue(e.target.value)}/>
             <button onClick={()=>deliveryUpdateHandler(item._id)}>Update</button>
            <button onClick={()=>setStatusUpdate(false)}>Cancel</button>
          </div> : 
          <div>
             <label>"Not assigned"</label>
             <button onClick={()=>setStatusUpdate(true)}>Add Table</button>
          </div>} 
          </td>
           
            </tr>
        ))}
    </tbody>
    </table>
    </div>
  )
}

export default RecentInfo;