import React from 'react';
import { Form } from 'react-bootstrap';
import "./contactus.css" ;
import backgroundImage from "./images/young-handsome-physician-medical-robe-with-stethoscope.jpg" ;
/* import mailImage from "./images/contact-concept-landing-page.jpg"; */
const ContactUS = () => {
    return (
        <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundPosition:"fixed" , backgroundRepeat:"no-repeat" , backgroundSize:"cover" , opacity:"0.9" ,  }}>
            {/* mail vector logo file show here */}
            {/* <div>
                <img src={mailImage} width="150" alt="" />

            </div> */}
         
            {/* form part start form here */}
           <div className="w-50 m-auto p-5">
           <h1 className="questionHave">Have you any Question ?</h1>
           <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
   
    <Form.Control type="email" placeholder="your email address kindly" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    
    <Form.Control as="textarea" rows={3} placeholder="Your Comments here" />
  </Form.Group>
  <input type="submit" value="Submit" />
</Form>
           </div>
        </div>
    );
};

export default ContactUS;