import React from 'react';
import "../../App.css";
import "./DataCards.css";

import millify from "millify"

const percentageTextStyle = {
  position: 'relative',
  top: '50%',
  left: '30%',
  transform: 'translate(-50%, -50%)',
  fontWeight: 'bold',
};

// ... Other code

const DataCards = ({ title = "Total Income", value = "$03489", percentage = 80 , icon , color}) => {
    const circleRadius = 36;
    const circumference = 2 * Math.PI * circleRadius;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (circumference * percentage) / 100;
    return (
      <div class="data-card" style={{ backgroundColor: "white", borderRadius: "24px", width: "24%", height: "40%", marginLeft: "1%", marginTop: "2%", marginRight: "1%", marginBottom: "2%" }}>
        <div class="icon-container" style={{ backgroundColor:`${color}`}}>
          <span class="material-icons-sharp" >{icon}</span>
        </div> 
        <div class="middle">
          <div class="left" style={{marginTop:"10%"}}>
            <h3>{title}</h3>
            <h1 >{millify(value)}</h1>
          </div>
          <div class="progress">
            <svg width="80" height="80">
              <circle cx="40" cy="40" r="36" stroke="lightgray" strokeWidth="5" fill="none" />
              <circle
                cx="40"
                cy="40"
                r="36"
                class="progress-circle"
                style={{
                  strokeDasharray: `${strokeDasharray}px`,
                  strokeDashoffset: `${strokeDashoffset}px`,
                }}
              ></circle>
            </svg>
            <div class="number ">
              <p style={percentageTextStyle}>{percentage}%</p>
            </div>
          </div>
        </div>
        <small class="text-muted">Last 24 Hours</small>
      </div>
    );
  };
  
  // ... Rest of the code
  

export default DataCards
// ... rest of the code
