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
                &ensp;
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="/users">
                <MDBIcon fas icon="users" />
                &ensp;
                <span>Users</span>
              </a>
            </li>
            <li>
              <a href="/productManage">
                <MDBIcon fas icon="warehouse" />
                &ensp;
                <span>Products</span>
              </a>
            </li>
            <li>
              <a href="/manageOrder">
                <MDBIcon fas icon="truck" />
                &ensp;
                <span>Orders</span>
              </a>
            </li>
            <li>
              <a href="/addCategory">
                <MDBIcon fas icon="plus" />
                &ensp;
                <span>Add Category</span>
              </a>
            </li>
            <li>
              <a href="/admin/Feedback">
                <MDBIcon fas icon="far fa-comments" />
                &ensp;
                <span>Review Complains</span>
              </a>
            </li>
            <li>
              <a href="/login">
                <MDBIcon fas icon="sign-out-alt" />
                &ensp;
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
