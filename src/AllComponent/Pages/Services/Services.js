import React, { useEffect, useState } from 'react';
import ServiceShow from './ServiceShow/ServiceShow';
import "./services.css"

const Services = () => {
    const[services , setServices] = useState([])
    useEffect(()=>{
        fetch(`https://immehadi7.github.io/jsonapi/servicesUpdate.json`)
            .then(res=>res.json())
                .then(data=> setServices(data))
    },[]);
    return (
        <div className="container">
             <h1>We are offerings</h1>
             <div  className="serviceCardStyle">
             {
               services.map(service=><ServiceShow key={service.id}
                service={service}
                ></ServiceShow> )
            }
             </div>
          
        </div>
    );
};

export default Services;