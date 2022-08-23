import React, {useState} from 'react';
import { FaSearch, FaRegMoon, FaExternalLinkAlt, FaGlobe, FaUserCircle } from 'react-icons/fa';


export default function Navbar() {

    

    return (
        <div className="navbardash">
            <div className="wrapperdash">
                <div className="items">
                    <div className="itemnav">
                        <FaGlobe />
                        English
                    </div>
                    <div className="itemnav">
                        <FaRegMoon />
                    </div>
                    <div className="itemnav">
                        <FaExternalLinkAlt />
                    </div>
                    <div className="itemnav">
                        <FaUserCircle className="user1" />
                    </div>
                </div>
            </div>
        </div>
    )
}