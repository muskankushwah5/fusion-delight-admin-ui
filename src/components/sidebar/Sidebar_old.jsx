import React from 'react'
import "../../App.css"

import {useRouter} from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
            <aside>
            <div class="top">
            <div class="logo">
                <img src="img/logo.jpeg" />
                <h2>Fusion<span class="danger">Delights</span></h2>
            </div>
            <div class="close" id="close-btn">
                <span class="material-icons-sharp"> close </span>
            </div>
            </div>
            <div class="sidebar" >
            <a href="/">
                <span class="material-icons-sharp"> grid_view </span>
                <h3>Dashboard</h3>
            </a>
            <a href="/customers" class="active">
                <span class="material-icons-sharp"> person_outline </span>
                <h3>Customers</h3>
            </a>
            <a href="/orders">
                <span class="material-icons-sharp"> receipt_long </span>
                <h3>Orders</h3>
            </a>
            <a href="/analytics">
                <span class="material-icons-sharp"> insights </span>
                <h3>Analytics</h3>
            </a>
            
            <a href="/products">
                <span class="material-icons-sharp"> inventory </span>
                <h3>Products</h3>
            </a>
            <a href="/addProduct">
                <span class="material-icons-sharp"> add </span>
                <h3>Add Item</h3>
            </a>
            <a href="/setting">
                <span class="material-icons-sharp"> settings </span>
                <h3>Settings</h3>
            </a>
            <a href="#">
                <span class="material-icons-sharp"> logout </span>
                <h3>Logout</h3>
            </a>
            </div>
        </aside>
    </div>
  )
}

export default Sidebar;