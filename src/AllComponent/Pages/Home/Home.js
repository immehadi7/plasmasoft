import React, { useEffect, useState } from 'react';
import { Row, Table } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import ServiceShow from '../Services/ServiceShow/ServiceShow';

import "./home.css";


const Home = () => {
    const[services , setServices] = useState([])
    const [liveDatas, setliveDatas] = useState()
    useEffect(()=>{
        fetch(`https://immehadi7.github.io/jsonapi/servicesUpdate.json`)
            .then(res=>res.json())
                .then(data=> setServices(data))
    },[]);
    useEffect(()=>{
        fetch(`https://api.covid19api.com/summary`)
            .then(res=>res.json())
                .then(data=> setliveDatas(data.Global))
    },[])








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
        {/*------- services part end here  --- */}
        </div>
        
        {/* live data shown of covid */}
        <div className="container">
            <h1>Covid 19 live data</h1>
            {
                liveDatas.map(livedata=>console.log(livedata))
            }


        <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>New Confirmed</th>
      <th>New Deaths</th>
      <th>Total Confirmed</th>
      <th>Total Deaths</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
   
  </tbody>
</Table>

        </div>




















        </div>
    );
};

export default Home;