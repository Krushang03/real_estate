import React from 'react'
import Back from "../images/login.gif"
import "../Style/UserAuth.css"
import Login from './Login'
import Register from './Register'
const UserAuth = () => {
    return (
        <div className="content">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 d-lg-block d-none">
                        <img src={Back} alt="signlog_background_img" className="img-fluid" />
                    </div>
                    <div class="col-lg-5 offset-lg-1">
                        <div class="d-flex justify-content-evenly button-box">
                            <button type="button" class="btn btn-primary">Register</button>
                            <button type="button" class="btn btn-primary">Login</button>
                        </div>
                        <Login />
                        <Register/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserAuth