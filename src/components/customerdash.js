import React, { useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { FaHome, FaBackward, FaSearch } from 'react-icons/fa'

export default function customerdash() {

    const [customerdash, setCustomerdash] = useState([]);
    const [search, setSearch] = useState("");

    const getCustdash = () => {
        Axios.get("http://localhost:3001/customerdash")
            .then(response => {
                setCustomerdash(response.data)
            });
    };

    return (
        <div className="dashcustom">
            <Link to="/" className="main-page"><h4><FaHome /> GO TO MAIN PAGE </h4></Link>
            <Link to="/dashboard" className="dash-main"><h4> <FaBackward /> GO TO DASHBOARD </h4></Link>
            <h1 className="log-head" align="center">CUSTOMER FEEDBACK</h1>
            <div className="search">
                <input className="innav" type="text" placeholder="Search..." onChange={event => { setSearch(event.target.value) }} />
                <FaSearch />
            </div>
            {getCustdash()}
            <div className='tabl'>
                <table border='1' align='center'>
                    <thead>
                        <tr >
                            <th >S NO.</th>
                            <th >CUSTOMER NAME</th>
                            <th >CUSTOMER EMAIL</th>
                            <th >ORDER DELIVERED ON TIME</th>
                            <th >QUANTITY AS PER REQUIREMENT</th>
                            <th >CUSTOMER SUGGESTION</th>
                        </tr>
                    </thead>
                    {customerdash.filter((cus) => {
                        if (search == "") {
                            return cus

                        } else if (cus.customername.toLowerCase().includes(search.toLowerCase())) {
                            return cus
                        }
                    }).map(cus =>
                        <tbody id="content" align="center">
                            <tr>
                                <td>{cus.idcustomer}</td>
                                <td>{cus.customername}</td>
                                <td>{cus.email}</td>
                                <td>{cus.delivered_on_time}</td>
                                <td>{cus.quantity_per_req}</td>
                                <td>{cus.suggestion}</td>
                            </tr>
                        </tbody>
                    )}
                </table>
            </div>
        </div>
    )
}
