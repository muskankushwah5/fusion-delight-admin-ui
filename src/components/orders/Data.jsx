import React, { useEffect, useRef, useState } from 'react'
import { allOrdersHandler, deliveryInfoHandler, emailHandler, statusHandler } from '../../services/orderApi';

import "./Data.css"
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';


  
const RecentInfo = ({isHome}) => {
  const [orderData , setOrderData] = useState([]);
  const [satusUpdate , setStatusUpdate] = useState(false);
  const [statusValue , setStatusValue] = useState("");
  const [deliveryUpdate , setDeliveryUpdate] = useState(false);

  const deliveryNameRef = useRef("");
  const deliveryNumberRef = useRef("");

  const chnageStatusSelectHandler = (value)=>{
    setStatusValue(value);
  }

 

  const deliveryUpdateHandler = (id)=>{

    const name = deliveryNameRef.current.value;
    const number = deliveryNumberRef.current.value;

    if(name === "" || number === "" ){
      toast.error("Please provide the proper name and number");
    }

    else{
      toast.loading("getting delivery info updated");
    const response = deliveryInfoHandler({name:name,number:number},id)
    .then((res)=>{
    })
    .catch((Err)=>{
      toast.error(Err);
    })
    toast.dismiss();
  }

    setDeliveryUpdate(false);
    

    }
  

  const statusUpdateHandler = async(id) =>{
    toast.loading("getting all the status Updates");
    const response = statusHandler({orderStatus : statusValue},id)
    .then((res)=>{
    })
    .catch((err)=>{
      toast.error(err);
    })
    setStatusUpdate(false);
    toast.dismiss();
  }

  const sendConfirmationEmail = async(item)=>{
    
    toast.loading("sending email confirmation");
    if(item.orderStatus === "not_started" || !item.deliveryInfo.name ){
      toast.error("Delivery Info and order satus need to be other than not started to send confirmation email");
    }
    else{
      toast.loading("sending email confirmation");
    
    const response = emailHandler(item._id)
    .then((res)=>{
    })
    .catch((err)=>{
      toast.error(err);
    })
    toast.dismiss();
  }
  }
  

  const navigate = useNavigate();

  const onClickHandler = ()=>{
    navigate("/orders");
  }

  useEffect(()=>{ 
    const response =  allOrdersHandler()
    .then((res)=>{
      const data = res.data ;
      const temp=data.filter((item,index)=>{
        if(item.orderStatus === "delivered")
         return false;
        else
         return true;
      })
      setOrderData(temp);
    })
    .catch((err)=>{

    });
  },[]);
  return (
    <>
    <div className='main-div'>
    <table>
    <thead>
      <tr>
        <th >UserName</th>
        <th >Address</th>
        <th >Prize</th>
        <th >Item</th>
        
        <th >DeiveryInfo</th>
        <th >Payement</th>
        
        <th >Status</th>
        
        <th ></th>
        <th ></th>
      </tr>
    </thead>
    <tbody>
        {orderData?.map((item,index) => (
            <tr key={index} style={{borderBottomWidth:"1px",borderBottomColor:"lightgray",borderBottomStyle:"solid",fontSize:"16px",paddingRight:"2%",paddingLeft:"2%"}}>
            <td>{item.phone}</td>
            <td>{item.address}</td>
            <td>${item.totalPrize}</td>
            <td> <select>
            {item.foodDescription?.map((choice, choiceIndex) => (
              <option key={choiceIndex}>{choice.foodTitle} x {choice.Quantity} ${choice.prize}</option>
            ))}
          </select></td>
            <td>{item.deliveryInfo.name ? `${item.deliveryInfo.name} ${item.deliveryInfo.number}` : 
            deliveryUpdate === true ?
           <div>
            <input placeholder='name' ref={deliveryNameRef}/>
            <input placeholder='number' type={'number'} ref={deliveryNumberRef}/>
            <button onClick={()=>deliveryUpdateHandler(item._id)}>Update</button>
            <button onClick={()=>setDeliveryUpdate(false)}>Cancel</button>
          </div> : 
          <div>
             <label>"Not assigned"</label>
             { !isHome && <button onClick={()=>setDeliveryUpdate(true)}>Add Info</button>}
          </div>} 
          </td>
            <td>{String(item.payementStatus) === String(1) ? <span style={{color:"green"}}>Success</span> : <span style={{color:"red"}}>Failed</span>} </td>
            <td >{ satusUpdate === true ? 
            <div>
              <select onChange={(e)=>chnageStatusSelectHandler(e.target.value)}>
                <option value={"not_started"}>Not started</option>
                <option value={"preparing"}>Preparing</option>
                <option value={"delivering"}>Delivering</option>
                <option value={"delivered"}>Delivered</option>
              </select>
              { !isHome && 
                <div className='button-div'><button onClick={()=>statusUpdateHandler(item._id)}>Update</button>
              <button onClick={()=>setStatusUpdate(false)}>Cancel</button></div>}
            </div> : 
            <div>
              <label>{item.orderStatus}</label>
              {!isHome && <button onClick={()=>setStatusUpdate(true)}>Change</button>}
            </div>}
            </td>
           {(!isHome && <td>
              <button onClick={()=>sendConfirmationEmail(item)}> Email</button>
            </td>)}
            </tr>
        ))}
    </tbody>
    </table>
   
    </div>
    {isHome && <div style={{marginTop:"2%"}}><button onClick={()=>onClickHandler(1)}>Know More</button></div>}
    </>
  )
}

export default RecentInfo;