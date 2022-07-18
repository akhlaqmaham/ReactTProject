import React, { useState } from 'react';
import Axios from 'axios';
import './table.css';
import { FaUser, FaLock, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

export default function Signup() {

    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [newusernameReg, setNewUsernameReg] = useState("");
    const [newpasswordReg, setNewPasswordReg] = useState("");

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
        Axios.put("http://localhost:3001/update", { username: newusernameReg, password: newpasswordReg ,s_id: s_id }).then(
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
                {getData()}
                <h1 className="reg-head" align="center">Users List</h1>
                <div className='tab'>
                    <table className="table table-striped" id="signup" border='1' align='center'>
                        <thead>
                            <tr>
                                <th id='id'>ID</th>
                                <th id='use'>USERNAME</th>
                                <th id='pass'>PASSWORD</th>
                            </tr>
                        </thead>
                        {users.map(user =>
                            <tbody id="content" align="center">
                                <tr>
                                    <td>{user.s_id}</td>
                                    <td>{user.username}</td>
                                    <td>{user.password}</td>
                                    <td>
                                        <input
                                            type="text"
                                            placeholder="Edit Username"
                                            onChange={(e) => {
                                                setNewUsernameReg(e.target.value);
                                            }}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Edit Password"
                                            onChange={(e) => {
                                                setNewPasswordReg(e.target.value);
                                            }}
                                        />
                                        <button
                                            onClick={() => {
                                                updateData(user.s_id);
                                            }}
                                        >
                                            {" "}
                                            EDIT
                                            </button>
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
                    <ReactHTMLTableToExcel
                    className="btn btn-info"
                    table="signup"
                    filename="Signup Excel File"
                    sheet="Sheet"
                    buttonText= "Export to Excel"
                    />
                </div>

            </div>
        </div>
    )
}