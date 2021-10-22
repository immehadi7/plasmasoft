import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import HomeDrservice from './HomeDrService/HomeDrservice';
import "./home.css";
import { useHistory } from 'react-router';

const Home = () => {
    const history = useHistory();
    const [homedrs , setHomeDr] = useState([])
    useEffect(()=>{
        fetch(`https://immehadi7.github.io/jsonapi/homeDrservice.json`)
        .then(res=>res.json())
        .then(data => setHomeDr(data))
    },[])

    const seeMoreDoc = () =>{
        history.push("/seeavaialabledoc");
    }
    return (
        <div>
          <Banner></Banner>

        <div className='container m-5'>
            <h1>We have specialists Doctor</h1>
            <Row xs={1} md={4} className="homedrservice">{
                homedrs.map(homedr => <HomeDrservice  key={homedr.id}
                homedr={homedr}
                >
                </HomeDrservice>)
            }
            

            </Row>

            <br />
            <br />
            <button onClick={seeMoreDoc} className="bg-primary text-center">See more Doctor</button>
        </div>


        </div>
    );
};

export default Home;