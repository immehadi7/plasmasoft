import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import "./serviceShow.css" ;

const ServiceShow = (props) => {
    const { images, details,Title } = props.service;
    
    return (
        <div  className="serviceStyle">
           
            <CardGroup>
  <Card style={{width:"18rem"}}>
    <Card.Img variant="top" src={images} />
    <Card.Body>
      <Card.Title>{Title}</Card.Title>
      <Card.Text>
        {details}
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

export default ServiceShow;