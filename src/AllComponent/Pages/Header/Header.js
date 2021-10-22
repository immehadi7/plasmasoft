import './header.css'; 

import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./header.css"
import onMedi from "../../Images/OnMedi-removebg-preview.png";
import useAuth from '../../Hooks/useAuth';
import firebaseAuthentication from '../../Firebase/firebase.init';


firebaseAuthentication()
const Header = () => {
    const {users , logOut} = useAuth()
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
            {
                    users?.email && <span style={{color:'white' , padding:"25px"}} >Hello {users.displayName}</span>
                }

            {
                    users.email?  <button onClick={logOut} >Log Out</button>  :
                    <NavLink to="/signup">Sign Up</NavLink>
                }
                

            </Navbar>
        </div>
    );
};

export default Header;