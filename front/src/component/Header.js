import React from 'react'
import { NavLink } from 'react-router-dom';
import "../Style/Header.css"
import { FaHome } from "react-icons/fa"
import UserAuth from './UserAuth';
export const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: 'rgba(23,38,86,0.9)' }}>
                    <div className="container-fluid">
                    <NavLink className="navbar-brand d-flex align-items-center" id='logotext' to="./" >
                        <FaHome />  <span>RealEstate</span>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <NavLink className="nav-link " to="./">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " to="./services">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " to="./fetures">Features</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " to="./about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " to="./contact">Contact Us</NavLink>
                            </li>
                        </ul>
                        
                        <UserAuth />
                        {/* <NavLink className="nav-link " to='./userauth' >
                            <button type="button" class="btn btn-outline-light">Login</button>
                        </NavLink> */}

                    </div>
                </div>
            </nav>

        </>
    )
}
