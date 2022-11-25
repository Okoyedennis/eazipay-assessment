import React, { useState } from "react";
import { IconContext } from "react-icons";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { BiBell } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";
import logo from "../../asset/CustomerLogo.png";
import img from "../../asset/Ellipse12.png";
import img1 from "../../asset/EAZIPAYLOGO.png";
import "./Sidebar.css";
import { Link, NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { GiReceiveMoney } from "react-icons/gi";
import { FiLayers } from "react-icons/fi";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const SidebarData = [
    {
      title: "Dashboard",
      path: "/",
      icon: <AiFillHome />,
      cName: "nav-text",
    },
    {
      title: "Payroll",
      path: "/payroll",
      icon: <MdDashboard />,
      cName: "nav-text",
    },
    {
      title: "Quick Loan",
      path: "/loan",
      icon: <GiReceiveMoney />,
      cName: "nav-text",
    },
    {
      title: "Inventory",
      path: "/inventory",
      icon: <FiLayers />,
      cName: "nav-text",
    },
  ];

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="sidebar-bg">
          <div className="sidebar contain">
            <div className="sidebar__header">
              <div className="sidebar__header-left">
                <FaBars onClick={showSidebar} className="menu-bars" />
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
              <div className="sidebar__header-right">
                <button className="btn btn-primary position-relative">
                  <BiBell />
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    7
                  </span>
                </button>
                <div className="userImage-name">
                  <img src={img} alt="" />
                  <div className="userImage-name__right">
                    <p>Kalu Abasiama</p>
                    <small>Admin</small>
                  </div>
                </div>
                <MdKeyboardArrowRight className="rightArrow" />
              </div>
            </div>
          </div>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="sidebar-toggle" onClick={showSidebar}>
              <AiOutlineClose className="menu-bars" />
            </li>
            <img src={img1} alt="" />
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName} onClick={showSidebar}>
                  <NavLink to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
