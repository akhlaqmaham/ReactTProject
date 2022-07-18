import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
import { FaUserEdit, FaShieldVirus, FaUserFriends } from 'react-icons/fa';
import { Container } from 'reactstrap';


export default function Main() {
    return (
        <Container fluid className="main">
            <div className="main-wrapper">
                <h1>TRIPACK FILMS LIMITED</h1>
                <Link to="/login"><button className="mainb">< FaUserEdit  className="fa"/>Management</button></Link>
                <Link to="/guard"><button className="mainb">< FaShieldVirus className="fa"/> Guard</button></Link>
                <Link to="/customer"><button className="mainb">< FaUserFriends className="fa"/>Customer</button></Link>
            </div>
        </Container>
    )
}