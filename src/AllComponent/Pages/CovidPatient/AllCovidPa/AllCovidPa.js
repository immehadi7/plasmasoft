import React from 'react';
import { Card , Button, CardGroup } from 'react-bootstrap';
import "./allpatient.css"
const AllCovidPa = (props) => {
    const {name , id ,  covidPatient , readyForPlasma } = props.info ;
    
    return (
        <div classname="serviceStyle">
            <CardGroup>
<Card style={{width:"18rem"}}>
 {/*  <Card.Img variant="top" src={image} width="220px" height="300px"	
 /> */}
  <Card.Body>
    <Card.Title> {name}</Card.Title>
    <Card.Title> ID no: {id}</Card.Title>
    <Card.Text>
    Covid Patient : {covidPatient}
    </Card.Text>
    <Card.Text>
    Ready for plasma : {readyForPlasma}
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <small className="text-muted">Working updated 3 mins ago</small>
  </Card.Footer>
</Card>
  





</CardGroup>
</div> 
    );
};

export default AllCovidPa;