import React from "react";
import "./sidebar.css";
import { MDBIcon } from 'mdb-react-ui-kit';


const Sidebar = () => {

  return (
    <div>
    <input type="checkbox" id="nav-toggle"/>
    <div className="sidebar">
      <div className="sidebar-brand">
        <h2>
          <span className="lab la-accusoft">
          </span>
          <MDBIcon fas icon="user-graduate" />
          <hr/>
          <span>
            AntiQuette </span>
            
        </h2>
        </div>
        <div className="sidebar-menu">
          <ul>
            <li>
              <a href="/admin/dashboard" className="active">
              <MDBIcon fas icon="tachometer-alt" />
                <span>
                  Dashboard
                  
                </span>
              </a>
            </li>
            <li>
              <a href="/users">
              <MDBIcon fas icon="users" />
                <span>
                  Customers</span>
              </a>
            </li>
            <li>
              <a href="#">
              <MDBIcon fas icon="warehouse" />
                <span>
                Products</span>
              </a>
            </li>
            <li>
              <a href="#">
              <MDBIcon fas icon="truck" />
                <span>
                Orders</span>
              </a>
            </li>
            <li>
              <a href="/Add_products">
              <MDBIcon fas icon="plus" />
                <span>
                Add Product</span>
              </a>
            </li>
            <li>
              <a href="/login_admin">
              <MDBIcon fas icon="sign-out-alt" />
                <span>
               Log Out</span>
              </a>
            </li>
          </ul>
        </div>
    </div>
    </div>
  );
};

export default Sidebar;
