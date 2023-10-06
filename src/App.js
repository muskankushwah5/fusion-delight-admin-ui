
import './App.css';
import Customer from './components/customers/Customer';
import Home from './components/home/Home';

import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Order from './components/orders/Order';
import Analytics from './components/analytics/Analytics';
import Product from './components/products/Product';
import Addproduct from './components/addProduct/Addproduct';
import Setting from './components/settings/Setting';
import Dashboard from './components/home2/Dashboard';
import LoginPage from './components/Login/Login';
import {Toaster} from "react-hot-toast";
import Reservation from './components/reservations/Reservation';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Toaster/>
      <Routes>
        <Route  exact path='/analytics' element={<Analytics/>}/>
        <Route  exact path='/addProduct' element={<Addproduct/>}/>
        <Route  exact path='/products' element={<Product/>}/>
        <Route  exact path='/customers' element={<Customer/>}/>
        
        <Route  exact path='/reservations' element={<Reservation/>}/>
        <Route  exact path='/orders' element={<Order/>}/>
        <Route  exact path='/' element={<Home/>}/>
        <Route  exact path='/login' element={<LoginPage/>}/>
        <Route  exact path='/home2' element={<Dashboard/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
