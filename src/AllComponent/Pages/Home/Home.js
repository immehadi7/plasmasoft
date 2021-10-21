import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import HomeDrservice from './HomeDrService/HomeDrservice';
import "./home.css";

const Home = () => {
    const [homedrs , setHomeDr] = useState([])
    useEffect(()=>{
        fetch(`https://immehadi7.github.io/jsonapi/homeDrservice.json`)
        .then(res=>res.json())
        .then(data => setHomeDr(data))
    },[])


    return (
        <div>
          <Banner></Banner>

        <div className='container'>
            <h1>We have specialists Doctor</h1>
            <Row xs={1} md={4} className="homedrservice">{
                homedrs.map(homedr => <HomeDrservice  key={homedr.id}
                homedr={homedr}
                >
                </HomeDrservice>)
            }
            

            </Row>
        </div>


        </div>
    );
};

export default Home;