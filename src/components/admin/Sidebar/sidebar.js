import { MDBIcon } from "mdb-react-ui-kit";
import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="fold">
      <input type="checkbox" id="nav-toggle" />
      <div className="widebar">

        <div className="widebar-brand">
          <h2>
            <span className="lab la-accusoft"></span>
            <MDBIcon fas icon="user-graduate" />
            
            <span>AntiQuette </span>
            
          </h2>
          
        </div>
        
        <br />
        <div className="widebar-menu">
          
          <ul>
            <li>
              <a href="/admin/dashboard">
                <MDBIcon fas icon="tachometer-alt" />
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="/users">
                <MDBIcon fas icon="users" />
                <span>Customers</span>
              </a>
            </li>
            <li>
              <a href="/productManage">
                <MDBIcon fas icon="warehouse" />
                <span>Products</span>
              </a>
            </li>
            <li>
              <a href="">
                <MDBIcon fas icon="truck" />
                <span>Orders</span>
              </a>
            </li>
            <li>
              <a href="">
                <MDBIcon fas icon="plus" />

                <span>Add Category</span>
              </a>
            </li>
            <li>
              <a href="">
                <MDBIcon fas icon="far fa-comments" />

                <span>Review Complains</span>
              </a>
            </li>
            <li>
              <a href="/login">
                <MDBIcon fas icon="sign-out-alt" />
                <span>Log Out</span>
              </a>
              
            </li>
        
          </ul>
          
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
