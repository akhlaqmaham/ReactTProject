import React, { useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { FaHome , FaBackward} from 'react-icons/fa'

export default function Transporter() {

    const [trans, setTrans] = useState([]);

    const getTrans = () => {
        Axios.get("http://localhost:3001/transporter")
            .then(response => {
                setTrans(response.data)
            });
    };

    return (
        <div className="transporter-wrapper">
            <Link to="/" className="main-page"><h4><FaHome/> GO TO MAIN PAGE </h4></Link>
            <Link to="/dashboard" className="dash-main"><h4> <FaBackward /> GO TO DASHBOARD </h4></Link>
            <h1 className="log-head" align="center">TRANSPORTER INFORMATION</h1>
            {getTrans()}
            <div className='tabl'>
                <table border='1' align='center'>
                <thead>
                    <tr >
                        <th >S NO.</th>
                        <th >VEHICLE NO.</th>
                        <th >DATE IN</th>
                        <th >TIME IN</th>
                        <th className="cnic">CNIC NO.</th>
                        <th >TRANSPORTER TYPE</th>
                        <th >NO. OF PERSON</th>
                        <th >COMPANY CODE</th>
                        <th >DATE OUT</th>
                        <th >TIME OUT</th>
                        <th >CREATED BY</th>
                        <th >DRIVER NAME</th>
                        <th >DRIVER NO.</th>
                    </tr>
                    </thead>
                    {trans.map(tran =>
                        <tbody id="content" align="center">
                            <tr>
                                <td>{tran.S_no}</td>
                                <td>{tran.Vehicle_no}</td>
                                <td>{tran.Date_in}</td>
                                <td>{tran.Time_in}</td>
                                <td>{tran.CNIC_Number}</td>
                                <td>{tran.Transporter_Type}</td>
                                <td>{tran.Number_of_Person}</td>
                                <td>{tran.Company_Code}</td>
                                <td>{tran.Date_Out}</td>
                                <td>{tran.Time_out}</td>
                                <td>{tran.Created_By}</td>
                                <td>{tran.Driver_Name}</td>
                                <td>{tran.Driver_Number}</td>
                            </tr>
                        </tbody>
                    )}
                </table>
            </div>
        </div>
    )
}
