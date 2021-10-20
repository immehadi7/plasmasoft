import './header.css'; 

import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar bg="dark">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/seeavaialabledoc">See Available Doc</NavLink>
            <NavLink to="/aboutus">About Us</NavLink>

            </Navbar>
        </>
    );
};

export default Header;