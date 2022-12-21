import React, {useState} from "react";
import Logo from "../../../photo/logo.png";
import "./sidebar.css";
import { SidebarData } from "../Data/Data";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import Logout from "../../Logout";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true);

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };
  console.log(window.innerWidth)
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div className={selected === index ? "menuItem active" : "menuItem"}
            key={index}
            onClick={() => setSelected(index)}>
              <item.icon />
              <span>{item.heading}</span>
            </div>
          );
        })}
        <div className="menuItem" onClick={Logout}>
          <UilSignOutAlt/>
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
