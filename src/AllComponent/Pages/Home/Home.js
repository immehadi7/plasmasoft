import React, { useEffect, useState } from 'react';
import { Row, Table } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import CovidLiveData from '../CovidLiveData/CovidLiveData';
import ServiceShow from '../Services/ServiceShow/ServiceShow';
import symtromsimg from '../../Images/symptomsofcovid.png';


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


      {/* recognize covid19 syndroms part start  */}
      <div className="container m-5">
        <h1 className="text-center text-black" >Top Symptoms of covid19</h1>
        <div className='text-center '>
          <img src={symtromsimg} width='1100' height='auto' className='img-fluid shadow-4 mt-2' alt="top 5 symptomps of covid 19" fluid />
        </div>
        <div>
        <h4>
          <p>Didn't you get vaccinate yet?
 <a href="https://surokkha.gov.bd/enroll">Registration here</a> </p>
        </h4>
        </div>
       
      </div>

      {/* recognize covid19 syndroms part end  */}





















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
      <td>55786</td>
      <td>3255</td>
      <td>4593242</td>
      <td>23252</td>
    </tr>
   
  </tbody>
</Table>

        </div>

           

        {/* Get help part  */}


 
 














        </div>
    );
};

export default Home;