import { Routes, Route } from "react-router-dom";
import React from "react";
import Login from "../Login";
import Dash from "../homepage/Dash";
import Dash_admin from "../admin/Dash_admin";
import Navbar from "../common/Navbar";
import Product from "../Product";
import Help from "../Help";
import Profile from "../profile/userprofile";
import Edit_profile from "../profile/Edit_profile";
import Add_products from "../Add_products";
import Login_admin from "../admin/Login_admin";
import { Home } from "../homepage/Home";
import About from "../about";
import Order_form from "../order_form/Order_form";
import OrderDetails from "../order_form/Order_history";

const Url = () => {
  return (
    <>
      <Routes>
        {/* <Routes basename={'dash'
        }> */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<Login />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/nav" element={<Navbar />}></Route>
        <Route path="/product/:pid" element={<Product />}></Route>
        <Route path="/help" element={<Help />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/Edit_profile" element={<Edit_profile />}></Route>
        <Route path="/Add_products" element={<Add_products />}></Route>
        <Route path="/login_admin" element={<Login_admin />}></Route>
        <Route path="/admin/dashboard" element={<Dash_admin />}></Route>
       
        <Route path="/about" element={<About />}></Route>
        <Route path="/Order_form" element={<Order_form />}></Route>
        <Route path="/OrderDetails" element={<OrderDetails/>}></Route>
      </Routes>
    </>
  );
};

export default Url;
