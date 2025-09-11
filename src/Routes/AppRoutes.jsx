import React from 'react'
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout'
import Home from '../Pages/Home'
import Registration from '../Pages/Registration';
import SignIn from '../Pages/SignIn';
import Reset from '../Pages/Reset';
import Dashboard from '../Pages/Dashboard';
import SideLayout from '../Layouts/SideLayout';
import Product from '../Pages/Product';
import AddProduct from '../Pages/AddProduct';   


const AppRoutes = () => (
  <Routes>

    <Route path='registration' element={<Registration/>}/>
    <Route path='signin' element={<SignIn/>}/>
    <Route path='reset' element={<Reset/>}/>
    <Route path='/' element={<MainLayout/>}>
    <Route index element={<Home/>}/>
    <Route path='Home' element={<Home/>}/>    
    </Route>
   
    <Route path='/admin' element={<SideLayout/>}>
    <Route index element={<Dashboard/>}/>
    <Route path='product' element={<Product/>}/>
    <Route path='addproduct' element={<AddProduct/>}/>
    </Route>
  </Routes>
);

export default AppRoutes;
