import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import AllCovidPa from './AllCovidPa/AllCovidPa';
import "./covidpatient.css"

const CovidPatient = () => {
    const [patientLists , setpatientLists] = useState([])
    useEffect(()=>{
        fetch(`https://immehadi7.github.io/jsonapi/covidpatients.json`)
        .then(res=> res.json())
        .then(data=>setpatientLists(data))
    },[])
    return (
        <div>
            <h1>Covid patients information are here</h1>
            <div className="serviceCardStyle">
            {
                patientLists.map(info => <AllCovidPa key={info.id} info={info} ></AllCovidPa> )
                }
                
                 

            </div>
        </div>
    );
};

export default CovidPatient;