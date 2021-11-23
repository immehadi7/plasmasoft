import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import ServiceShow from '../Services/ServiceShow/ServiceShow';

import "./home.css";


const Home = () => {
    const[services , setServices] = useState([])
    useEffect(()=>{
        fetch(`https://immehadi7.github.io/jsonapi/servicesUpdate.json`)
            .then(res=>res.json())
                .then(data=> setServices(data))
    },[]);
    
    return (
        <div>
          <Banner></Banner>
          {/* banner part end  */}


        {/* services part start from here */}
        <div className="container">
             <h1 className="text-center m-5 services"> Services </h1>
             <div  className="serviceCardStyle">
             {
               services.map(service=><ServiceShow key={service.id}
                service={service}
                ></ServiceShow> )
            }
             </div>
          
        </div>


        </div>
    );
};

export default Home;