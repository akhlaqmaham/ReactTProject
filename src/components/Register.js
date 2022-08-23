import React, { useState } from 'react';
import Axios from 'axios';
import './table.css';
import { FaUser, FaLock, FaHome, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

export default function Signup() {

    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [newusernameReg, setNewUsernameReg] = useState("");
    const [newpasswordReg, setNewPasswordReg] = useState("");
    const [search, setSearch] = useState("");

    const [users, setUsers] = useState([]);


    const register = () => {
        Axios.post("http://localhost:3001/register", {
            username: usernameReg,
            password: passwordReg,
        }).then(response => {
            console.log(response)

        });
    };

    const getData = () => {
        Axios.get("http://localhost:3001/signup")
            .then(response => {
                setUsers(response.data)
            });
    };

    const updateData = (s_id) => {
        Axios.put("http://localhost:3001/update", { username: newusernameReg, password: newpasswordReg, s_id: s_id }).then(
            (response) => {
                setUsers(
                    users.map((user) => {
                        return user.s_id == s_id
                            ? {
                                s_id: user.s_id,
                                username: user.newusernameReg,
                                password: user.newpasswordReg,
                            }
                            : user;
                    })
                );
            }
        );
    };

    const deleteData = (s_id) => {
        Axios.delete(`http://localhost:3001/delete/${s_id}`).then((response) => {
            setUsers(
                users.filter((user) => {
                    return user.s_id != s_id;
                })
            );
        });
    };

    const countuser = users.length;
    console.log(countuser)



    return (
        <div className="register-wrapper">
            <div className="registration">
                <div className="reg-mar">
                    <Link to="/" className="main-page"><h4><FaHome /> GO TO MAIN PAGE </h4></Link>
                    <h1 className="reg-head">Registration</h1>
                    <label><FaUser /> Username</label>
                    <input type="text" placeholder="Username.."
                        onChange={(e) => {
                            setUsernameReg(e.target.value);
                        }}
                    /><br />
                    <label>< FaLock />Password</label>
                    <input type="password" placeholder="Password.."
                        onChange={(e) => {
                            setPasswordReg(e.target.value);
                        }}
                    /> <br />
                    <button onClick={register}> Register</button>
                </div>
                <h1 className="reg-head" align="center">Users List</h1>
                <div className="flexsear">
                    <div className="search">
                        <input className="innav" type="text" placeholder="Search..." onChange={event => { setSearch(event.target.value) }} />
                        <FaSearch />
                    </div>
                    <div className="excelfile">
                        <ReactHTMLTableToExcel
                            className="btn-excel"
                            table="signup"
                            filename="Products Excel File"
                            sheet="Sheet"
                            buttonText="Export to Excel"
                        />
                    </div>
                </div>
                {getData()}
                <div className='tabl'>
                    <table id="signup" border='1' align='center'>
                        <thead>
                            <tr>
                                <th id='id'>ID</th>
                                <th id='use'>USERNAME</th>
                                <th id='pass'>PASSWORD</th>
                            </tr>
                        </thead>
                        {users.filter((user) => {
                            if (search == "") {
                                return user

                            } else if (user.username.toLowerCase().includes(search.toLowerCase())) {
                                return user
                            }
                        }).map(user =>
                            <tbody id="content" align="center">
                                <tr>
                                    <td>{user.s_id}</td>
                                    <td>{user.username}</td>
                                    <td>{user.password}</td>
                                    <td>
                                        <input
                                            type="text"
                                            placeholder="Edit Username"
                                            className="editdel"
                                            onChange={(e) => {
                                                setNewUsernameReg(e.target.value);
                                            }}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Edit Password"
                                            className="editdel"
                                            onChange={(e) => {
                                                setNewPasswordReg(e.target.value);
                                            }}
                                        />
                                        <button
                                            className="delbutton"
                                            onClick={() => {
                                                updateData(user.s_id);
                                            }}
                                        >
                                            {" "}
                                            EDIT
                                            </button>
                                        <span className="deled"></span>
                                        <button className="delbutton"
                                            onClick={() => {
                                                deleteData(user.s_id);
                                            }}
                                        >
                                            Delete
                                            </button>
                                    </td>
                                </tr>
                            </tbody>
                        )}
                    </table>
                </div>
            </div>
        </div>
    )
}
