import React from 'react'

import "../../App.css"
import "./Sales.css";
import { useNavigate } from 'react-router';



const Sales = () => {
  const navigate = useNavigate();
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
    <div class="sales-analytics" style={{width:"70%" , marginLeft:"12%",marginRight:"12%",padding:"6%"}}>
          <div class="item online" style={{backgroundColor:"white",borderRadius:"24px",marginBottom:"2%",display:"flex",flexDirection:"row",padding:"4%"}}>
            <div class="icon icon-container">
              <span class="material-icons-sharp "> shopping_cart </span>
            </div>
            <div class="right"  style={{marginTop:"5%",marginLeft:"4%",marginRight: "4%"}}>
              <div class="info">
                <h3>ONLINE ORDERS</h3>
                <small class="small-text">Last 24 Hrs</small>
              </div>
              </div>
              <div  style={{marginTop:"5%",marginLeft:"4%"}}><h5 class="success">+39%</h5></div>
              <div  style={{marginTop:"5%",marginLeft:"4%"}}><h3>3849</h3></div>
          </div>
          <div class="item offline" style={{backgroundColor:"white",borderRadius:"24px",marginBottom:"2%",display:"flex",flexDirection:"row",padding:"4%"}}>
            <div class="icon icon-container" >
              <span class="material-icons-sharp"> local_mall </span>
            </div>
            <div class="right" style={{marginTop:"5%",marginLeft:"4%",marginRight: "3%"}}>
              <div class="info">
                <h3>OFFLINE ORDERS</h3>
                <small class="small-text">Last 24 Hrs</small>
              </div>
              </div>
              <div style={{marginTop:"5%",marginLeft:"4%",marginRight: "4%"}}>
              <h5 class="danger">-17%</h5></div>
              <div style={{marginTop:"5%",marginLeft:"2%"}}><h3>1100</h3></div>
            </div>
          <div class="item customers" style={{backgroundColor:"white",borderRadius:"24px",marginBottom:"2%",display:"flex",flexDirection:"row",padding:"4%"}}>
            <div class="icon icon-container" >
              <span class="material-icons-sharp"> person </span>
            </div>
            <div class="right" style={{marginTop:"5%",marginLeft:"4%",marginRight: "0.5%"}}>
              <div class="info">
                <h3>NEW CUSTOMERS</h3>
                <small class="small-text">Last 24 Hrs</small>
              </div>
              </div>
              <div style={{marginTop:"5%",marginLeft:"4%"}}>
              <h5 class="success">+25%</h5></div>
              <div style={{marginTop:"5%",marginLeft:"4%"}}><h3>849</h3></div>
            </div>
            <div class="item customers" style={{backgroundColor:"white",borderRadius:"24px",marginBottom:"2%",display:"flex",flexDirection:"row",padding:"4%"}}>
            <div class="icon icon-container" >
              <span class="material-icons-sharp"> bar_chart </span>
            </div>
            <div class="right" style={{marginTop:"5%",marginLeft:"4%",marginRight: "8%"}}>
              <div class="info">
                <h3>NEW ORDERS</h3>
                <small class="last-small-text">Last 24 Hrs</small>
              </div>
              </div>
              <div style={{marginTop:"5%",marginLeft:"4%"}}>
              <h5 class="success">+25%</h5></div>
              <div style={{marginTop:"5%",marginLeft:"5%"}}><h3>849</h3></div>
            </div>
          <div className="show-more-container">
          <button className="show-more-button" style={{width: '100%'}} onClick={()=>onClickHandler(2)}>
            Add Product
          </button>
        </div>
        </div>
  )
}

export default Sales