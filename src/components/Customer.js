import '../App.css';
import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';
import StarRatingDemo from './StarRating';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Axios from 'axios';


export default function Customer() {

  const [customernameCustomer, setCustomernameCustomer] = useState("");
  const [emailCustomer, setemailCustomer] = useState("");
  const [delivered_on_timeCustomer, setDelivered_on_timeCustomer] = useState("");
  const [quantity_per_reqCustomer, setQuantity_per_reqCustomer] = useState("");
  const [product_conditionCustomer, setProduct_conditionCustomer] = useState("");
  const [suggestionCustomer, setSuggestionCustomer] = useState("");
  const [ratingCustomer, setRatingCustomer] = useState("");

  const [customers, setCustomers] = useState([]);

  const customer = () => {
    Axios.post("http://localhost:3001/customer", {
      customername: customernameCustomer,
      email: emailCustomer,
      delivered_on_time: delivered_on_timeCustomer,
      quantity_per_req: quantity_per_reqCustomer,
      product_condition: product_conditionCustomer,
      suggestion: suggestionCustomer,
      rating: ratingCustomer,
    }).then(response => {
      console.log(response)

    });
  };
  const getCustomer = () => {
    Axios.get("http://localhost:3001/customer")
      .then(response => {
        setCustomers(response.data)
        console.log(response.data)
      });
  };

  return (

    <Container className='customer-form'>
      <Link to="/" className="main-page"><h4><FaHome /> GO TO MAIN PAGE </h4></Link>
      <h1 className='feedback-heading'>FEEDBACK FORM</h1> <br />
      <div className='form-container'>
        <Form className='forms'>
          <FormGroup className='form-group'>
            <Row className='customer-form-label'>
              <Col className='customer-label'><label > Customer's Name</label></Col>
            </Row>
            <Row className='customer-input-row'>
              <Col><Input className='item customer-input' type="text" name="firstName"
                onChange={(e) => {
                  setCustomernameCustomer(e.target.value);
                }} /></Col>
            </Row>


            <Row className='customer-form-label'>
              <Col className='customer-label'><label > Email</label></Col>
            </Row>
            <Row className='customer-input-row'>
              <Col><Input className='item customer-input' type="email" name="email"
                onChange={(e) => {
                  setemailCustomer(e.target.value);
                }} /></Col>
            </Row>



            <Row className='customer-form-label'>
              <Col className='customer-label'><label>Was the product delivered to you on time?</label></Col>
            </Row>
            <Row className='customer-input-row'>
              <Col><Input className='item customer-input cust-dropdown' type="select" name="select" id="exampleSelect">
                <option>Yes</option>
                <option>No</option>
                onChange={(e) => {
                  setDelivered_on_timeCustomer(e.target.value);
                }}
              </Input>
              </Col>
            </Row>
            <Row className='customer-form-label'>
              <Col className='customer-label'><label>Was the quantity of product as per requirement?</label></Col>
            </Row>
            <Row className='customer-input-row'>
              <Col><Input className='item customer-input cust-dropdown' type="select" name="select" id="exampleSelect">
                <option>Yes</option>
                <option>No</option>
                onChange={(e) => {
                  setQuantity_per_reqCustomer(e.target.value);
                }}
              </Input>
              </Col>
            </Row>


          </FormGroup>
          {/* <FormGroup className='form-group' id="cust-for" tag="fieldset">
            <Row className='customer-form-label'>
              <Col className='customer-label'><Label>The product delivered</Label></Col>
            </Row>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" />{' '}
                Complete
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" />{' '}
                Incomplete
              </Label>
            </FormGroup> */}

          {/* </FormGroup> */}

          <Row className='customer-form-label'>
            <Col className='customer-label'><Label>The product delivered</Label></Col>
          </Row>

          {/* <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
                Broken
              </Label>
          </FormGroup> */}
          {/* <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
                Unbroken
                onChange={(e) => {
                setProduct_conditionCustomer(e.target.value);
              }}
            </Label> */}
            <FormGroup>

            <Row className='customer-form-label'>
              <Col className='customer-label'><Label for="exampleText">Any suggestion?</Label></Col>
            </Row>
            <Input className='item customer-input customer-suggestion' type="text" name="text" id="exampleText"
             onChange={(e) => {
              setSuggestionCustomer(e.target.value);
          }} />
            <Row className='customer-form-label'>
              <Col className='customer-label'><label>Rate the Service</label></Col>
            </Row>
            <Row className='customer-form-label'>
              <Col>
                < StarRatingDemo />
              </Col>
            </Row>
            <Button className='cust-submit' onClick={customers}>Submit</Button>

          </FormGroup>


        </Form>
        {getCustomer()}

      </div>




    </Container>
  );

}