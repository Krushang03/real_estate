import React, { useState } from 'react'
import Back from "../images/login.gif"
import "../Style/UserAuth.css"
import Login from './Login'
import Register from './Register'

export default function UserAuth() {
    const [user, setUser] = useState(true);
    return (
        <>
            <button type="button" className="btn btn-outline-light swapbtn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Login
            </button>

            <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content ">
                        {/* <div className="modal-header">
                        </div> */}
                        <button type="button" className="btn-close ms-auto m-4" data-bs-dismiss="modal" aria-label="Close"></button>

                        <div className="modal-body" style={{overflowX:"hidden"}}>
                            <div className="content " id='userauth'>
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-lg-5 order-lg-1 order-2">
                                            <img src={Back} alt="signlog_background_img" className="img-fluid"/>
                                        </div>
                                        <div className="col-lg-5 offset-lg-1 order-lg-2 order-1">
                                            <div className="d-flex justify-content-around button-box  ">
                                                <button type="button" onClick={() => setUser(true)} className="btn btn-primary swapbtn">Register</button>
                                                <button type="button" onClick={() => setUser(false)} className="btn btn-primary swapbtn">Login</button>
                                            </div>
                                            {user ? <Register /> : <Login />}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}