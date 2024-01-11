import React, { useState } from "react";
import {
  NavLink,
  Link,
  Route,
  BrowserRouter as Router,
  Routes,
  Outlet,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

import logo from "../assets/images/logo/dark-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark  px-3   px-md-3 px-lg-5  menubar">
        <div>
        <Link className="navbar-brand" to="/">
          <img className="logo" style={{width:"200px"}} src={logo} />
        </Link>
        </div>
        <button
          className="navbar-toggler"
          onClick={()=>{setIsOpen(!isOpen)}}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className= {`navbar-collapse justify-content-center ${!isOpen && 'collapse'}`}>
          <ul className="navbar-nav me-xl-5">
            <li className="nav-item active mx-2">
              <NavLink className="nav-link" to={"/"}>
                Home 
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className="nav-link" to={"/about"}>
                About
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className="nav-link" to={"/services"}>
                Services
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className="nav-link" to={"/portfolio"}>
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className="nav-link" to={"/contact"}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
};

export default Navbar;
