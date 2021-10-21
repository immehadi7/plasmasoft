import React from 'react';
import error from '../../Images/ErrorPage404-04.jpg';
import "./notfound.css";


const NotFound = () => {
    return (
        <div className="error-style">
           <img src={error} alt="" />

        </div>
    );
};

export default NotFound;
