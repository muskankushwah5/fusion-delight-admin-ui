import React, { useState } from 'react';

import "./RecentInfo.css";
import { useNavigate } from 'react-router';
const Orders = [
  {
    productName: 'Foldable Mini Drone',
    productNumber: '85631',
    paymentStatus: 'Due',
    shipping: 'Pending',
  },
  {
    productName: 'LARVENDER KF102 Drone',
    productNumber: '36378',
    paymentStatus: 'Refunded',
    shipping: 'Declined',
  },
  {
    productName: 'Ruko F11 Pro Drone',
    productNumber: '49347',
    paymentStatus: 'Due',
    shipping: 'Pending',
  },
  {
    productName: 'Drone with Camera Drone',
    productNumber: '96996',
    paymentStatus: 'Paid',
    shipping: 'Delivered',
  },
  {
    productName: 'GPS 4k Drone',
    productNumber: '22821',
    paymentStatus: 'Paid',
    shipping: 'Delivered',
  },
  {
    productName: 'DJI Air 2S',
    productNumber: '81475',
    paymentStatus: 'Due',
    shipping: 'Pending',
  },
  {
    productName: 'Lozange Drone',
    productNumber: '00482',
    paymentStatus: 'Paid',
    shipping: 'Delivered',
  },
  {
    productName: 'Lozange Drone',
    productNumber: '00482',
    paymentStatus: 'Paid',
    shipping: 'Delivered',
  },
  {
    productName: 'Lozange Drone',
    productNumber: '00482',
    paymentStatus: 'Paid',
    shipping: 'Delivered',
  }
];

const RecentInfo = () => {

  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);

  const onClickHandler = (type)=>{
    if(type === 1){
      navigate("/orders");
    }
    if(type === 3){
      navigate("/reservations");
    }
    if(type === 4){
      navigate("/customers");
    }
    else{
      navigate("/addProduct");
    }
  }

  
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Number</th>
            <th>Payment Status</th>
            <th>Shipping</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Orders.map((item, index) => (
            <tr
              key={index}
              className="table-row"
            >
              <td>{item.productName}</td>
              <td>{item.productNumber}</td>
              <td>{item.paymentStatus}</td>
              <td>{item.shipping === "Pending" ? <span style={{color:"#7380ec"}}>{item.paymentStatus}</span> : item.shipping === "Declined" ? <span  style={{color:"#ff7782"}}>{item.paymentStatus}</span> : <span style={{color:"#41f1b6"}}>{item.paymentStatus}</span> }</td>
              <td>
                <a href='/'>Details</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {!showMore && (
        <div className="show-more-container">
          <button className="show-more-button" onClick={()=>onClickHandler(1)}>
            Show More
          </button>
        </div>
      )}
    </div>
  );
}

export default RecentInfo;
