import { useState } from "react";
import Main from "./Main";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import './Dashboard.css'
import { useNavigate } from "react-router";

const App = () => {
  const userData = (JSON.parse(localStorage.getItem("AdminUser")));
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

  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
  return (
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Main />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
};

export default App;