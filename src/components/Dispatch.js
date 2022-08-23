import React, { useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { FaHome, FaBackward, FaSearch } from 'react-icons/fa';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

export default function Transporter() {

    const [dispatch, setDispatch] = useState([]);
    const [search, setSearch] = useState("");


    const getDispatch = () => {
        Axios.get("http://localhost:3001/dispatch")
            .then(response => {
                setDispatch(response.data)
            });
    };

    return (
        <div className="transporter-wrapper">
            <Link to="/" className="main-page"><h4><FaHome /> GO TO MAIN PAGE </h4></Link>
            <Link to="/dashboard" className="dash-main"><h4><FaBackward /> GO TO DASHBOARD </h4></Link>
            <h1 className="log-head" align="center">Dispatch Details</h1>
            <div className="flexsear">
                <div className="search">
                    <input className="innav" type="text" placeholder="Search..." onChange={event => { setSearch(event.target.value) }} />
                    <FaSearch />
                </div>
                <div className="excelfile">
                    <ReactHTMLTableToExcel
                        className="btn-excel"
                        table="dispatch"
                        filename="Dispatch Details Excel File"
                        sheet="Sheet"
                        buttonText="Export to Excel"
                    />
                </div>
            </div>
            {getDispatch()}
            <div className='tabl'>
                <table id="dispatch" border='1' align='center'>
                    <thead>
                        <tr >
                            <th >S NO.</th>
                            <th >DISPATCH DATE</th>
                            <th >TRANSPORT TYPE</th>
                            <th >VEHICLE NO.</th>
                            <th >DESTINATION</th>
                            <th >DISPATCHED QUANTITY</th>
                            <th >DOCUMENT NO.</th>
                            <th >PARENT/CHILD</th>
                            <th>PLANT</th>
                            <th>SALES ORDER</th>
                            <th >SALES ITEM NO.</th>
                            <th >CUSTOMER NO. </th>
                            <th >CUSTOMER NAME</th>
                            <th >ORDER AND DATE</th>
                            <th >MOBILE NO.</th>
                            <th >SALES CREATION DATE</th>
                            <th >MATERIAL NO.</th>
                            <th >SIZE</th>
                            <th >LENGTH</th>
                            <th >BATCH</th>
                            <th >REELS</th>
                            <th >CASES</th>
                            <th >LOADED BY</th>
                            <th >CREATED BY</th>
                            <th >RECEIVING LOCATION </th>
                            <th >STORAGE LOCATION</th>
                            <th >PARENT N0.</th>
                            <th >MATERIAL GROUP NAME</th>
                            <th >MATERIAL GROUP</th>
                            <th >UNIT OF MEASURE</th>
                            <th >REGION NO</th>
                            <th >REGIONAL AREA</th>
                            <th >SALES EXECUTIVE</th>
                            <th >SALES EXECUTIVE NO.</th>
                            <th >ORDER CONFIRMATION NO.</th>
                            <th >ORDER CONFIRMATION ITEM NO.</th>
                            <th>ORDER CONFIRMATION DATE</th>
                            <th >ISO/WSO DATE</th>
                            <th >ISO TRANSPORT TYPE </th>
                            <th >DELIVERY TYPE</th>
                            <th >MATERIAL TEXT</th>
                            <th >TOTAL PRICE.</th>
                            <th >ORDER QUANTITY</th>
                            <th >REMAINING QUANTITY</th>
                        </tr>
                    </thead>
                    {dispatch.filter((dis) => {
                        if (search == "") {
                            return dis

                        } else if (dis.customer_name.toLowerCase().includes(search.toLowerCase())) {
                            return dis
                        }
                    }).map(dis =>
                        <tbody id="content" align="center">
                            <tr>
                                <td>{dis.s_no}</td>
                                <td>{dis.dispatch_date}</td>
                                <td>{dis.transport_type}</td>
                                <td>{dis.vehicle_no}</td>
                                <td>{dis.destination}</td>
                                <td>{dis.dispatched_quantity}</td>
                                <td>{dis.document_no}</td>
                                <td>{dis.parentchild}</td>
                                <td>{dis.plant}</td>
                                <td>{dis.sales_order}</td>
                                <td>{dis.sales_itemno}</td>
                                <td>{dis.customer_no}</td>
                                <td>{dis.customer_name}</td>
                                <td>{dis.orderdate}</td>
                                <td>{dis.mobileno}</td>
                                <td>{dis.sales_date}</td>
                                <td>{dis.material_no}</td>
                                <td>{dis.size}</td>
                                <td>{dis.length}</td>
                                <td>{dis.batch}</td>
                                <td>{dis.reels}</td>
                                <td>{dis.cases}</td>
                                <td>{dis.loaded_by}</td>
                                <td>{dis.created_by}</td>
                                <td>{dis.receiving_loc}</td>
                                <td>{dis.storage_loc}</td>
                                <td>{dis.parent_no}</td>
                                <td>{dis.material_group_name}</td>
                                <td>{dis.material_group}</td>
                                <td>{dis.um}</td>
                                <td>{dis.region_no}</td>
                                <td>{dis.regional_area}</td>
                                <td>{dis.sales_exec}</td>
                                <td>{dis.sale_exec_no}</td>
                                <td>{dis.o_conf_date}</td>
                                <td>{dis.o_conf_no}</td>
                                <td>{dis.o_conf}</td>
                                <td>{dis.iso_date}</td>
                                <td>{dis.iso_trans}</td>
                                <td>{dis.delivery_type}</td>
                                <td>{dis.material_text}</td>
                                <td>{dis.price}</td>
                                <td>{dis.order_quant}</td>
                                <td>{dis.remain_quant}</td>
                            </tr>
                        </tbody>
                    )}
                </table>
            </div>
        </div>
    )
}