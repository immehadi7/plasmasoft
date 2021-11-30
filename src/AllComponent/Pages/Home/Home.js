import React, { useEffect, useState } from 'react';
import { Row, Table } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import CovidLiveData from '../CovidLiveData/CovidLiveData';
import ServiceShow from '../Services/ServiceShow/ServiceShow';

import "./home.css";


const Home = () => {
    const[services , setServices] = useState([])
    const [liveshowData , setliveshowData] = useState()

    /* set services part  */
    useEffect(()=>{
        fetch(`https://immehadi7.github.io/jsonapi/servicesUpdate.json`)
            .then(res=>res.json())
                .then(data=> setServices(data))
    },[]);




    /* set data show part */

    useEffect(()=>{
        fetch(`https://api.covid19api.com/summary`)
            .then(res=>res.json())
                .then(data=> setliveshowData(data))
    },[])
/*     const showDatasArr = liveDatas.split(',');
    console.log(showDatasArr);  */
   /*  console.log(liveDatas); */
    





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
 {/*------- services part end here  --- */}




        {/* live data shown of covid */}
         <div className="container m-5">
            <h1 className="text-center m-5">Covid 19 live data</h1>
          
       
          {/*  {liveshowData.map(dataShow =>   <CovidLiveData   dataShow={dataShow}>
          </CovidLiveData> )

           } */}

          
        
           

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
      <td>45674</td>
      <td>3245</td>
      <td>4456436</td>
      <td>232314</td>
    </tr>
   
  </tbody>
</Table>

        </div>

           

        {/* Get help part  */}


 
 














        </div>
    );
};

export default Home;