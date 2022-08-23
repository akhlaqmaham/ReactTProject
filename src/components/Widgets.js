import React, { useState } from 'react';
import Axios from 'axios';
import { FaUserCircle, FaChevronUp, FaBoxOpen, FaShoppingCart, FaTruck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Widgets() {
    const [users, setUsers] = useState([]);
    const [dispatch, setDispatch] = useState([]);
    const [trans, setTrans] = useState([]);
    const [product, setProduct] = useState([]);


    const getData = () => {
        Axios.get("http://localhost:3001/signup")
            .then(response => {
                setUsers(response.data)
            });
    };

    const getDispatch = () => {
        Axios.get("http://localhost:3001/dispatch")
            .then(response => {
                setDispatch(response.data)
            });
    };

    const getTrans = () => {
        Axios.get("http://localhost:3001/transporter")
            .then(response => {
                setTrans(response.data)
            });
    };

    const getProduct = () => {
        Axios.get("http://localhost:3001/product")
            .then(response => {
                setProduct(response.data)
            });
    };


    return (
        <div className="widgets" >
            <div className="widget1">
                <div className="left">
                    <span className="titl">USERS </span>
                    <span className="counter">{getData()}
                        {users.length} </span>
                    <span className="link"><Link to="/register" className="li1">See all user details</Link></span>
                </div>
                <div className="right">
                    <span className="logosp">
                        <FaChevronUp />
                    </span>
                    <FaUserCircle className="user1" />
                </div>
            </div>

            <div className="widget2">
                <div className="left">
                    <span className="titl">ORDERS </span>
                    <span className="counter">{getDispatch()}
                        {dispatch.length} </span>
                    <span className="link"><Link to="/dispatch" className="li1">See all order details</Link></span>
                </div>
                <div className="right">
                    <span className="logosp">
                        <FaChevronUp />
                    </span>
                    <FaShoppingCart className="user1" />
                </div>
            </div>

            <div className="widget3">
                <div className="left">
                    <span className="titl">PRODUCTS </span>
                    <span className="counter">{getProduct()}
                        {product.length} </span>
                    <span className="link"><Link to="/product" className="li1">See all product details</Link></span>
                </div>
                <div className="right">
                    <span className="logosp">
                        <FaChevronUp />
                    </span>
                    <FaBoxOpen className="user1" />
                </div>
            </div>

            <div className="widget4">
                <div className="left">
                    <span className="titl">TRANSPORTER </span>
                    <span className="counter">{getTrans()}
                        {trans.length} </span>
                    <span className="link"><Link to="/transporter" className="li1">See transporter details</Link></span>
                </div>
                <div className="right">
                    <span className="logosp">
                        <FaChevronUp />
                    </span>
                    <FaTruck className="user1" />
                </div>
            </div>

        </div>
    )
}

