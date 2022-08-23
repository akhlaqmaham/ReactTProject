import React from 'react';
import { FaTachometerAlt, FaUsers, FaShoppingCart, FaChartBar, FaBoxOpen, FaSignOutAlt, FaTruck, FaTasks } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="top"><span className="logo">ADMIN</span></div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li><Link to="/" id="homli" ><span><FaTachometerAlt className="faus"/>HOMEPAGE</span></Link></li>
                    <p className="title">SERVICE</p>
                    <li><Link to="/product" className="li1"><span><FaBoxOpen className="faus" />Products</span></Link></li>
                    <li><Link to="/dispatch" className="li1"><span><FaShoppingCart className="faus" />Orders</span></Link></li>
                    <li><Link to="/transporter" className="li1"><span><FaTruck className="faus" />Delivery</span></Link></li>
                    <p className="title">USEFUL</p>
                    <li><span><FaChartBar className="faus" />Statistics</span></li>
                    <li><Link to="/customerdash" className="li1"><span><FaTasks className="faus" />Customer Feedback</span></Link></li>
                    <p className="title">PERFORMANCE</p>
                    <li><Link to="/performance" className="li1"><span><FaChartBar className="faus" />Transporter Performance</span></Link></li>
                    <p className="title">USER</p>
                    <li><Link to="/register" className="li1"><span><FaUsers className="faus" />Users</span></Link></li>
                    <li><Link to="/login" className="li1"><span><FaSignOutAlt className="faus" />Logout</span></Link></li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOptions"></div>
                <div className="colorOptions"></div>
            </div>
        </div>
    )
}