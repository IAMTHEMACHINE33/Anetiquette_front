import { Routes, Route } from "react-router-dom";
import React from "react";
import Login from "../Login";
import Dash from "../homepage/Dash";
import Dash_admin from "../admin/Dash_admin";
import Navbar from "../common/Navbar";
import Product from "../Product";
import Help from "../Help";
import Profile from "../profile/profile";
import Edit_profile from "../profile/Edit_profile";
import Add_products from "../Add_products";
import Login_admin from "../admin/Login_admin";
import { Home } from "../homepage/Home";
import About from "../about";
import Order_form from "../order_form/Order_form";
import OrderDetails from "../order_form/Order_history";
import PrivateRoute from "./protectRoutes";

const Url = () => {
  return (
    <>
      <Routes>
        {/* <Routes basename={'dash'
        }> */}
        <Route path="/login" element={<Login />}></Route>

        <Route path="/" element={<Home />}></Route>

        <Route path="/nav" element={<Navbar />}></Route>

        <Route path="/product/:pid" element={<Product />}></Route>

        <Route path="/help" element={<Help />}></Route>

        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>}></Route>
        <Route path="/Edit_profile" element={<PrivateRoute><Edit_profile /></PrivateRoute>}></Route>
        <Route path="/Add_products" element={<PrivateRoute><Add_products /></PrivateRoute>}></Route>
        <Route path="/login_admin" element={<Login_admin />}></Route>
        <Route path="/admin/dashboard" element={<PrivateRoute><Dash_admin /></PrivateRoute>}></Route>
       
        <Route path="/about" element={<About />}></Route>
        <Route path="/Order_form" element={<PrivateRoute><Order_form /></PrivateRoute>}></Route>
        <Route path="/OrderDetails" element={<PrivateRoute><OrderDetails/></PrivateRoute>}></Route>
      </Routes>
    </>
  );
};

export default Url;
