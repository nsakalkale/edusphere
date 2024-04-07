import React from "react";
import { NavLink } from "react-router-dom";
import home from "../images/home.png";
import about from "../images/about.png";
import contactus from "../images/contactus.png";
import ourteam from "../images/ourteam.png";

export default function SideNav() {
  const data = [
    { link: "/about", name: "About", icon: about },
    { link: "/contact", name: "Contact Us", icon: contactus }, // Corrected link for "Contact Us"
    { link: "/ourteam", name: "Our Team", icon: ourteam },
  ];

  return (
    <div className="side-nav p-2 shadow-sm">
      <NavLink to="/" exact className="nslink" activeClassName="active">
        <div className="p-3 rounded w-100 mb-2 d-flex align-items-center">
          <img src={home} width={20} alt="Home" className="me-2" />
          Home
        </div>
      </NavLink>
      {data.map((item) => (
        <NavLink to={item.link} className="nslink" activeClassName="active">
          <div className="p-3 rounded w-100 mb-2 d-flex align-items-center effect">
            <img src={item.icon} width={20} alt={item.name} className="me-2" />
            {item.name}
          </div>
        </NavLink>
      ))}
    </div>
  );
}
