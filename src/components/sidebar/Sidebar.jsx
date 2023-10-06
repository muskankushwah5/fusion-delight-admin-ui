import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../App.css';

const Sidebar = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  const location = useLocation();
  const path = location.pathname;

  return (
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
  );
};

export default Sidebar;
