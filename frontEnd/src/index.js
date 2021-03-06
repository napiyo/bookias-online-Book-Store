import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import Header from './HomeComponents/Header';
import Footer from './HomeComponents/Footer';
import Home from './screens/Home';
import PersonalDeatails from './ProfileComponents/personalDetails'
import Myorders from './ProfileComponents/myorders'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllProducts from './screens/AllProducts';
import Product from './screens/Product';
import Cart from './screens/Cart';
import Profile from './screens/Profile';
import AdminPanel from './Admin/AdminPanel';
import Auth from './screens/auth';
import {Provider, useSelector} from 'react-redux'
import store from './Redux/store';
import {CookiesProvider} from 'react-cookie'
import SearchPage from './screens/searchPage';
import Error404 from './screens/Error404';
import AlertTemplate from 'react-alert-template-basic'
import Checkout from './screens/Checkout';
import Dashboard from './Admin/Dashboard';
import Users from './Admin/Users';
import Orders from './Admin/Orders';
import SingleOrder from './Admin/SingleOrder';
import Products from './Admin/Products';


// alert options
const options = {

  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE,
  
}

ReactDOM.render(

     <AlertProvider template={AlertTemplate} {...options}>
   <Router> 
     <Provider store={store} >
     <CookiesProvider>
  <Header/>
  
  <Routes>
    <Route path="/product/:id" element={<Product />} />
    <Route path="/products/:category" element={<AllProducts />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="profile" element={<Profile />} >
       <Route path='myorders' element={<Myorders />} />
       <Route path='' element={<PersonalDeatails />} />
      </Route>
    <Route path="admin" element={<AdminPanel />} >
    <Route path='dashboard' element={<Dashboard />} />
    <Route path='users' element={<Users />} />
    <Route path='products' element={<Products />} />

    <Route path='orders' element={<Orders />} />
    <Route path='orders/:orderID' element={<SingleOrder />} />

      </Route>
    <Route path="/auth" element={<Auth />} />
    <Route path="/search" element={<SearchPage />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/" element={<Home />} />
    <Route path="*" element={<Error404 />} />
   
  </Routes>
  <Footer />
  </CookiesProvider>
  </Provider>
</Router> 
  </AlertProvider>
,
  document.getElementById('root')
);