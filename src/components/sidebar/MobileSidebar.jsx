import React, { useState } from 'react';
import './MobileSidebar.css'; // Create a CSS file for styling
import Sidebar from './Sidebar';
import { Link, useLocation } from 'react-router-dom';
import '../../App.css';

const MobileSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="mobile-sidebar-container mobile-sidebar-container2">
      <button className="open-button" onClick={toggleSidebar} style={{width:"10%",height:"10%"}}>
       <div style={{width:"10%",height:"10%"}}><img src='https://th.bing.com/th?id=OIP.MO13Yb2PjehyQD7s6Lsx_gHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2' /></div>
      </button>

      {isSidebarOpen && (
        <div className="mobile-sidebar-modal">
          <button className="close-button" onClick={toggleSidebar}>
            Close
          </button>
         <div style={{backgroundColor:"white"}}>
         <div>
      <aside className={`sidebar ${isMobileSidebarOpen ? 'mobile-open' : ''}`}>
        <div className="top">
          <div className="logo">
            <img src="img/logo.jpeg" alt="Logo" />
            <h2>
              Fusion<span className="danger">Delights</span>
            </h2>
          </div>
          <div className="close" id="close-btn" onClick={toggleMobileSidebar}>
            <span className="material-icons-sharp"> close </span>
          </div>
        </div>
        <div className="sidebar">
          <Link to="/"  className={`${path}` === "/" ? "active" : ""}>
            <span className="material-icons-sharp"> grid_view </span>
            <h3>Dashboard</h3>
          </Link>
          <Link to="/customers"  className={`${path}` === "/customers" ? "active" : ""}>
            <span className="material-icons-sharp"> person_outline </span>
            <h3>Customers</h3>
          </Link>
          <Link to="/reservations"   className={`${path}` === "/reservations" ? "active" : ""}>
            <span className="material-icons-sharp"> receipt_long </span>
            <h3>Reservations</h3>
          </Link>
          <Link to="/orders"   className={`${path}` === "/orders" ? "active" : ""}>
            <span className="material-icons-sharp"> receipt_long </span>
            <h3>Orders</h3>
          </Link>
          <Link to="/analytics"  className={`${path}` === "/analytics" ? "active" : ""}>
            <span className="material-icons-sharp"> insights </span>
            <h3>Analytics</h3>
          </Link>
          <Link to="/products"   className={`${path}` === "/products" ? "active" : ""}>
            <span className="material-icons-sharp"> inventory </span>
            <h3>Products</h3>
          </Link>
          <Link to="/addProduct"   className={`${path}` === "/addProduct" ? "active" : ""}>
            <span className="material-icons-sharp"> add </span>
            <h3>Add Item</h3>
          </Link>
          <a href="#">
            <span className="material-icons-sharp"> logout </span>
            <h3>Logout</h3>
          </a>
        </div>
      </aside>
      <div
        className={`overlay ${isMobileSidebarOpen ? 'active' : ''}`}
        onClick={toggleMobileSidebar}
      ></div>
    </div>
         </div>
        </div>
      )}
    </div>
  );
};

export default MobileSidebar;
