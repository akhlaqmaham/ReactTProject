import React from 'react';
import { Link } from 'react-router-dom';
import Charts from './Charts.js';
import { Container, Row, Col, Button } from 'reactstrap';
import { FaUserCircle, FaChartBar, FaBoxOpen, FaStopwatch, FaTasks, FaTruck, FaHome } from 'react-icons/fa';

export default function Dashboard() {
    return (
        <Container className='mgt'>  
            <Row className='slidebar'>
                <Col sm={4} className='dashboard'>
                    <Row>
                        <Col sm={4} >
                            <div id='pvt' className='slidebarinner'><h3>Tripack PVT Limited</h3></div>

                        </Col>
                        <Col sm={4} >
                            <div className='slidebarinner'>
                                <div><Link to="/register"><Button className='button' ><FaUserCircle className="faus" />Signup </Button></Link></div>
                            </div>

                        </Col>
                        <Col sm={4}>

                            <div className='slidebarinner'>
                                <Button className='button'> <FaChartBar className="faus" />Charts </Button>
                            </div>

                        </Col>
                        <Col sm={4}>

                            <div className='slidebarinner'>
                                <Button className='button' ><FaBoxOpen className="faus" /> Products</Button>
                            </div>
                        </Col>

                        <Col sm={4} >
                            <div className='slidebarinner'>
                                <Button className='button' ><FaStopwatch className="faus" /> Total Penalties</Button>
                            </div>
                        </Col>
                        <Col sm={4} >
                            <div className='slidebarinner'>
                                <Button className='button'><FaTasks className="faus" /> Performance</Button>
                            </div>
                        </Col>
                        <Col sm={4} >
                            <div className='slidebarinner'>
                                <Link to="/transporter">
                                    <Button className='button'><FaTruck className="faus" /> Transporter Information</Button></Link>
                            </div>
                        </Col>
                        <Col sm={4} >
                            <div className='slidebarinner'>
                                <Link to="/dispatch">
                                    <Button className='button'><FaTruck className="faus" /> Dispatch Details</Button></Link>
                            </div>
                        </Col>
                        <Col sm={4} >
                            <div className='slidebarinner'>
                            <Link to="/" className="ho"><h4><FaHome /> GO TO MAIN PAGE </h4></Link>
                            </div>
                        </Col>
                        
                        

                    </Row>
                </Col>
                <Col sm={6} id='hello'>
                    <div className='charts'>
                        <Charts />
                    </div>
                </Col>

            </Row>
        </Container>

    )
}
