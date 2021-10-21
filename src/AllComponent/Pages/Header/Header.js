import './header.css'; 

import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./header.css"
import onMedi from "../../Images/OnMedi-removebg-preview.png";
const Header = () => {
    return (
        <div className="navbar-style">
            

            <Navbar bg="dark">
        <NavLink to="/" >
        <img
          alt=""
          src={onMedi}
          className="d-inline-block align-top"
        />
            
        </NavLink>
       
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/seeavaialabledoc">See Available Doc</NavLink>
            <NavLink to="/aboutus">About Us</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>

            </Navbar>
        </div>
    );
};

export default Header;