import React from "react";
import Sidebar from "../Sidebar/sidebar";
import './dash.css';
function Dash_admin(){
    return(
      <div className="dashApp">
        <div className="dashGlass">
          <Sidebar/>
          <div></div>
          <div></div>
          </div>
      </div>

    );
};

export default Dash_admin;
