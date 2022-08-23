import React, { useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { FaHome, FaBackward, FaSearch } from 'react-icons/fa';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

export default function Product() {

    const [product, setProduct] = useState([]);
    const [search, setSearch] = useState("");

    const getProduct = () => {
        Axios.get("http://localhost:3001/product")
            .then(response => {
                setProduct(response.data)
            });
    };

    return (
        <div className="product-wrapper">
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
                        table="products"
                        filename="Products Excel File"
                        sheet="Sheet"
                        buttonText="Export to Excel"
                    />
            </div>
            </div>
            {getProduct()}
            <div className='tabl'>
                <table id="products" border='1' align='center'>
                    <thead>
                        <tr >
                            <th >S NO.</th>
                            <th >DESCRIPTION</th>
                            <th >SALES DOCUMENT</th>
                            <th >SALES DOCUMENT ITEM</th>
                            <th >MATERIAL</th>
                            <th >MATERIAL ENTERED</th>
                            <th >MATERIAL GROUP</th>
                        </tr>
                    </thead>
                    {product.filter((pro) => {
                        if (search == "") {
                            return pro

                        } else if (pro.Description.toLowerCase().includes(search.toLowerCase())) {
                            return pro
                        }
                    }).map((pro) =>
                        <tbody id="content" align="center">
                            <tr>
                                <td>{pro.s_no}</td>
                                <td>{pro.Description}</td>
                                <td>{pro.SalesDocument}</td>
                                <td>{pro.SalesDocumentItem}</td>
                                <td>{pro.Material}</td>
                                <td>{pro.Materialentered}</td>
                                <td>{pro.MaterialGroup}</td>
                            </tr>
                        </tbody>
                    )}
                </table>
            </div>
        </div>
    )
}