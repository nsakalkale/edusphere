import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import background from "../images/1.png";
import home from "../images/home.png";
import about from "../images/about.png";
import contactus from "../images/contactus.png";
import ourteam from "../images/ourteam.png";

export default function Navbar() {
  return (
    <div className="bg-white shadow-sm sticky-top poppins align-items-center">
      <div className="p-3 d-flex justify-content-between">
        <div className="">
          <div className="concert main_title poppins">
            <NavLink to="/">EduSphere</NavLink>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <NavLink to="/" className="me-xl-5 me-sm-3 me-4" exact>
            <img src={home} width={25} alt="Home" />
          </NavLink>
          <NavLink to="/about" className="me-xl-5 me-sm-3 me-4">
            <img src={about} width={25} alt="About" />
          </NavLink>
          <NavLink to="/ourteam" className="me-xl-5 me-sm-3 me-4">
            <img src={ourteam} width={25} alt="Our Team" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
