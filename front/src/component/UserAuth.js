import React, { useState, useEffect } from 'react'
import Back from "../images/login.gif"
import "../Style/UserAuth.css"
import Login from './Login'
import Register from './Register'
import { useNavigate } from "react-router-dom";
import EmailOTP from './EmailOTP'

// import { useSelector } from "react-redux";


const UserAuth = () => {
    // const { userToken } = useSelector((state) => state.auth);

    const [user, setUser] = useState(true);
    const [forgotpasson, setforgotpasson] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("userInfo")) {
            navigate("/")
        }
    }, [])

    return (
        <>
            <div className="content d-flex align-items-center justify-content-evenly" style={{ minHeight: "90vh" }} id='userauth'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 order-lg-1 order-2">
                            <img src={Back} alt="signlog_background_img" className="img-fluid" />
                        </div>
                        <div className="col-lg-5 offset-lg-1 order-lg-2 order-1">
                            {forgotpasson ?
                                <>
                                    <div className="d-flex justify-content-around button-box  ">
                                        <button type="button" onClick={() => [setUser(true),setforgotpasson(false)]} className="btn btn-primary swapbtn">Register</button>
                                        <button type="button" onClick={() => [setUser(false),setforgotpasson(false)]} className="btn btn-primary swapbtn">Login</button>
                                    </div>
                                    {/* <div className='col-md-12 mx-auto p-5' style={{ boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px" }} > */}
                                        <EmailOTP setforgotpasson={setforgotpasson} />
                                    {/* </div> */}
                                </>
                                :
                                <>
                                    <div className="d-flex justify-content-around button-box  ">
                                        <button type="button" onClick={() => [setUser(true)]} className="btn btn-primary swapbtn">Register</button>
                                        <button type="button" onClick={() => [setUser(false)]} className="btn btn-primary swapbtn">Login</button>
                                    </div>
                                    {user ? <Register /> : <Login setforgotpasson={setforgotpasson} />}
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserAuth;