import React from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "../Layouts/MainLayout";
import SideLayout from "../Layouts/SideLayout";

import Home from "../Pages/Home";
import Registration from "../Pages/Registration";
import SignIn from "../Pages/SignIn";
import Reset from "../Pages/Reset";
import Dashboard from "../Pages/Dashboard";

import Product from "../Pages/Product";
import AddProduct from "../Pages/AddProduct";
import Customer from "../Pages/Customer";
import Productdeatils from "../Pages/Productdeatils";
import CartDetail from "../Pages/CartDetail";
import WishList from "../Pages/WishList";
import Sellers from "../Pages/Sellers";
import Chackout from "../Component/Chackout";

const AppRoutes = () => (
  <Routes>

    {/* ---------- Public Pages ---------- */}
    <Route path="/" element={<Registration />} />      {/* Default page */}
    <Route path="/signin" element={<SignIn />} />
    <Route path="/reset" element={<Reset />} />
    <Route path="/cartdetail" element={<CartDetail />} />

    {/* ---------- Main Website Layout ---------- */}
    <Route path="/home" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="productdeatails" element={<Productdeatils />} />
      <Route path="wishlist" element={<WishList />} />
      <Route path="chackout" element={<Chackout />} />
    </Route>

    {/* ---------- Admin Layout ---------- */}
    <Route path="/admin" element={<SideLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="product" element={<Product />} />
      <Route path="addproduct" element={<AddProduct />} />
      <Route path="customer" element={<Customer />} />
      <Route path="sellers" element={<Sellers />} />
    </Route>

  </Routes>
);

export default AppRoutes;
