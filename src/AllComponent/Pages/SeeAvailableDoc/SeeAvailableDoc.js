import { useEffect, useState } from "react";
import React from 'react';
import SeeDoc from "./SeeDoc/SeeDoc";
import { Row } from "react-bootstrap";

const SeeAvailableDoc = () => {
    const [showDocs , setshowDocs] = useState([])
    useEffect(()=>{
        fetch(`https://immehadi7.github.io/jsonapi/allservice.json`)
            .then(res=>res.json())
                .then(data=>setshowDocs(data))
    },[])
    return (
        <div className="container">
            <h1>Find your doctor here</h1>
            <div>
            <Row xs={1} md={3} style={{margin:"20px 20px"}}> {
                    showDocs.map(showDoc=> <SeeDoc key={showDoc.id} showDoc={showDoc}></SeeDoc> )
                }
                </Row>
            </div>
        </div>
    );
};

export default SeeAvailableDoc;