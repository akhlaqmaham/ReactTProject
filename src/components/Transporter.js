import React, { useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { FaHome, FaBackward, FaSearch } from 'react-icons/fa';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

export default function Transporter() {

    const [trans, setTrans] = useState([]);
    const [search, setSearch] = useState("");

    const getTrans = () => {
        Axios.get("http://localhost:3001/transporter")
            .then(response => {
                setTrans(response.data)
            });
    };

    return (
        <div className="transporter-wrapper">
            <Link to="/" className="main-page"><h4><FaHome /> GO TO MAIN PAGE </h4></Link>
            <Link to="/dashboard" className="dash-main"><h4> <FaBackward /> GO TO DASHBOARD </h4></Link>
            <h1 className="log-head" align="center">TRANSPORTER INFORMATION</h1>
            <div className="flexsear">
                <div className="search">
                    <input className="innav" type="text" placeholder="Search..." onChange={event => { setSearch(event.target.value) }} />
                    <FaSearch />
                </div>
                <div className="excelfile">
                    <ReactHTMLTableToExcel
                        className="btn-excel"
                        table="transport"
                        filename="Transport Details Excel File"
                        sheet="Sheet"
                        buttonText="Export to Excel"
                    />
                </div>
            </div>
            {getTrans()}
            <div className='tabl'>
                <table id="transport" border='1' align='center'>
                    <thead>
                        <tr >
                            <th >S NO.</th>
                            <th >VEHICLE NO.</th>
                            <th >DRIVER NAME</th>
                            <th >DRIVER NO.</th>
                            <th className="cnic">CNIC NO.</th>
                            <th >DATE IN</th>
                            <th >TIME IN</th>
                            <th >TRANSPORTER TYPE</th>
                            <th >NO. OF PERSON</th>
                            <th >COMPANY CODE</th>
                            <th >DATE OUT</th>
                            <th >TIME OUT</th>
                            <th >CREATED BY</th>

                        </tr>
                    </thead>
                    {trans.filter((tran) => {
                        if (search == "") {
                            return tran

                        } else if (tran.Driver_Name.toLowerCase().includes(search.toLowerCase())) {
                            return tran
                        } else if (tran.Vehicle_no.toLowerCase().includes(search.toLowerCase())) {
                            return tran
                        } else if (tran.Created_By.toLowerCase().includes(search.toLowerCase())) {
                            return tran
                        }
                    }).map(tran =>
                        <tbody id="content" align="center">
                            <tr>
                                <td>{tran.S_no}</td>
                                <td>{tran.Vehicle_no}</td>
                                <td>{tran.Driver_Name}</td>
                                <td>{tran.Driver_Number}</td>
                                <td>{tran.CNIC_Number}</td>
                                <td>{tran.Date_in}</td>
                                <td>{tran.Time_in}</td>
                                <td>{tran.Transporter_Type}</td>
                                <td>{tran.Number_of_Person}</td>
                                <td>{tran.Company_Code}</td>
                                <td>{tran.Date_Out}</td>
                                <td>{tran.Time_out}</td>
                                <td>{tran.Created_By}</td>

                            </tr>
                        </tbody>
                    )}
                </table>
            </div>
        </div>
    )
}
