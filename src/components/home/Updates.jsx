import React from 'react'

import "../../App.css";
const Updates = () => {
  return (
    <div>
    <div class="updates" style={{backgroundColor:"white",borderRadius:"24px",width:"100%",height:"110%",marginLeft:"1%",marginTop:"0px",marginRight:"2%"}}>
    <div class="update">
      <div class="profile-photo">
        <img src="img/profile-2.jpg" alt="Mike" />
      </div>
      <div class="message">
        <p>
          <b>Mike Tyson</b> received his order of Night Lion tech GPS
          drone.
        </p>
        <small class="text-muted">2 Minutes Ago</small>
      </div>
    </div>
    <div class="update">
      <div class="profile-photo">
        <img src="img/profile-3.jpg" alt="Diana" />
      </div>
      <div class="message">
        <p><b>Diana Ayi</b> declined her order of 2 DJI Air 2S.</p>
        <small class="text-muted">5 Minutes Ago</small>
      </div>
    </div>
    <div class="update">
      <div class="profile-photo">
        <img src="img/profile-4.jpg" alt="Mandy" />
      </div>
      <div class="message">
        <p>
          <b>Mandy Roy</b> received her order of LARVENDER KF102 Drone.
        </p>
        <small class="text-muted">6 Minutes Ago</small>
      </div>
    </div>
  </div>
</div>

  )
}

export default Updates