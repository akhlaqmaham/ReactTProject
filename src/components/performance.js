import React, { useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { FaHome, FaBackward, FaSearch } from 'react-icons/fa';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';


export default function performance() {

    const [perfor, setPerfor] = useState([]);
    const [search, setSearch] = useState("");

    const getPerfor = () => {
        Axios.get("http://localhost:3001/performance")
            .then(response => {
                setPerfor(response.data)
            });
    };

  return (
    <div className="performance-wrapper">
      <Link to="/" className="main-page"><h4><FaHome /> GO TO MAIN PAGE </h4></Link>
            <Link to="/dashboard" className="dash-main"><h4><FaBackward /> GO TO DASHBOARD </h4></Link>
            
            <h1 className="log-head" align="center">Product Details</h1>
            <div className="flexsear">
            <div className="search">
                <input className="innav" type="text" placeholder="Search..." onChange={event => { setSearch(event.target.value) }} />
                <FaSearch />
            </div>
            <div className="excelfile">
            <ReactHTMLTableToExcel
                        className="btn-excel"
                        table="performance"
                        filename="Performance Excel File"
                        sheet="Sheet"
                        buttonText="Export to Excel"
                    />
            </div>
            </div>
            {getPerfor()}
            <div className='tabl'>
                <table id="performance" border='1' align='center'>
                    <thead>
                        <tr >
                            <th >RANKING</th>
                            <th >TRANSPORT TYPE</th>
                            <th >VEHICLE NO.</th>
                            <th >NO. OF DELIVERY</th>
                            <th >SCORE</th>
                        </tr>
                    </thead>
                    {perfor.filter((per) => {
                        if (search == "") {
                            return per

                        } else if (per.VehicleNo.toLowerCase().includes(search.toLowerCase())) {
                            return per
                        }
                    }).map((per) =>
                        <tbody id="content" align="center">
                            <tr>
                                <td>{per.SNo}</td>
                                <td>{per.TransportType}</td>
                                <td>{per.VehicleNo}</td>
                                <td>{per.NoofDelivery}</td>
                                <td>{per.Score}</td>
                            </tr>
                        </tbody>
                    )}
                </table>
            </div>
    </div>
  )
}


