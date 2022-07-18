import './guard.css';
import React, { useState} from 'react';
import { Button, Form, FormGroup, Input, Container, Row, Col } from 'reactstrap';
import { FaHome } from 'react-icons/fa';
import {Link} from 'react-router-dom';
import Axios from 'axios';


export default function Guard() {
    // state={
    //     curTime : new Date().toLocaleString(),
    //   }
        const [drivernameGuard, setDriverNameGuard]= useState("");
        const [cnicGuard, setCnicGuard] = useState("");
        const [phonenoGuard, setPhonenoGuard] = useState("");
        const [vehiclenoGuard, setVehiclenoGuard] = useState("");
        const [no_of_personsGuard, setNo_of_personsGuard] = useState("");
        const [transporter_typeGuard, setTransporter_typeGuard] = useState("");
        const [company_codeGuard, setCompany_codeGuard] = useState("");
        const [created_byGuard, setCreated_byGuard] = useState("");

        const [guards, setGuards] = useState([]);
        
        const guard = () => {
            Axios.post("http://localhost:3001/guard", {
                drivername: drivernameGuard,
                cnic: cnicGuard,
                phoneno: phonenoGuard,
                vehicleno: vehiclenoGuard,
                no_of_persons: no_of_personsGuard,
                transporter_type: transporter_typeGuard,
                company_code: company_codeGuard,
                created_by: created_byGuard,
            }).then(response => {
                console.log(response)
    
            });
        };
        const getGuard = () => {
            Axios.get("http://localhost:3001/guard")
                .then(response => {
                    setGuards(response.data)
                    console.log(response.data)
                });
        };

    return (

        <Container className='guard-form'>
            <Link to="/" className="main-page"><h4><FaHome/> GO TO MAIN PAGE </h4></Link>
            <h1 className='guard-heading'>DRIVER'S INFORMATION</h1> <br />
            <div className='form-container'>
                <Form className='forms'>
                    <FormGroup className='form-group'>
                        <Row className='guard-form-label'>
                            <Col className='guard-label'><label > Driver's Name</label></Col>
                        </Row>
                        <Row className='guard-input-row'>
                            <Col><Input className='item guard-input' type="text" name="driverName"
                            onChange={(e) => {
                                setDriverNameGuard(e.target.value);
                            }} /></Col>
                        </Row>


                        <Row className='guard-form-label'>
                            <Col className='guard-label'><label > CNIC Number</label></Col>
                        </Row>
                        <Row className='guard-input-row'>
                            <Col><Input className='item guard-input' type="text" name="driverCnic"
                            onChange={(e) => {
                                setCnicGuard(e.target.value);
                            }} /></Col>
                        </Row>

                        <Row className='guard-form-label'>
                            <Col className='guard-label'><label > Phone Number</label></Col>
                        </Row>
                        <Row className='guard-input-row'>
                            <Col><Input className='item guard-input' type="number" name="driverNum" 
                            onChange={(e) => {
                                setPhonenoGuard(e.target.value);
                            }}/></Col>
                        </Row>


                        <Row className='guard-form-label'>
                            <Col className='guard-label'><label > Vehicle Number</label></Col>
                        </Row>
                        <Row className='guard-input-row'>
                            <Col><Input className='item guard-input' type="text" name="vehicleNum"
                            onChange={(e) => {
                                setVehiclenoGuard(e.target.value);
                            }} /></Col>
                        </Row>
                        <Row className='guard-form-label'>
                            <Col className='guard-label'><label >Number of Persons</label></Col>
                        </Row>
                        <Row className='guard-input-row'>
                            <Col><Input className='item guard-input' type="number" name="numOfPersons"
                            onChange={(e) => {
                                setNo_of_personsGuard(e.target.value);
                            }} /></Col>
                        </Row>


                        <Row className='guard-form-label'>
                            <Col className='guard-label'><label >  Transporter Type</label></Col>
                        </Row>
                        <Row className='guard-input-row'>
                            <Col><Input className='item guard-input' type="text" name="transporterType"
                            onChange={(e) => {
                                setTransporter_typeGuard(e.target.value);
                            }} /></Col>
                        </Row>

                        {/* <Row className='guard-form-label'>
                            <Col className='guard-label'><label >Time In</label></Col>
                        </Row>
                        <Row className='guard-input-row'>
                            <Col><Input className='item guard-input' type="time" name="timeIn" /></Col>
                        </Row>
                        <Row className='guard-form-label'>
                            <Col className='guard-label'><label >Time Out</label></Col>
                        </Row>
                        <Row className='guard-input-row'>
                            <Col><Input className='item guard-input' type="time" name="timeOut" /></Col>
                        </Row> */}
                    

                        <Row className='guard-form-label'>
                            <Col className='guard-label'><label > Company Code</label></Col>
                        </Row>
                        <Row className='guard-input-row'>
                            <Col><Input className='item guard-input' type="text" name="companyCode"
                            onChange={(e) => {
                                setCompany_codeGuard(e.target.value);
                            }} /></Col>
                        </Row>
                        <Row className='guard-form-label'>
                            <Col className='guard-label'><label > Created By</label></Col>
                        </Row>
                        <Row className='guard-input-row'>
                            <Col><Input className='item guard-input' type="text" name="createdBy" 
                            onChange={(e) => {
                                setCreated_byGuard(e.target.value);
                            }}/></Col>
                        </Row>
                        <br></br>
                        {/* <Row className='guard-input-row'>
                            <Col><p>Created at : {this.state.curTime}</p></Col>
                        </Row> */}
                        <Button className='guard-submit' onClick={guard}>Submit</Button>

                    </FormGroup>


                </Form>
                {getGuard()}

            </div>
           




        </Container>
    );

}
