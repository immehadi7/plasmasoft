import React from 'react';
import { Card , Button} from 'react-bootstrap';
import './homeservice.css'

const HomeDrservice = (props) => {
    const {image, name , degree , hospitalName} = props.homedr;
    return (
        <div className="cardStyle">
          <Card style={{ width: '17rem' , height:"25rem" }}>
  <Card.Img variant="top" src={image} />
  <Card.Body>
    <Card.Title> {name} </Card.Title>
    <Card.Text>
     One of the best dr right now in {degree} . 
    </Card.Text>
    <Card.Text>Work at: {hospitalName}</Card.Text>
    <Button variant="primary">Book now</Button>
  </Card.Body>
</Card>
        </div>
    );
};

export default HomeDrservice;