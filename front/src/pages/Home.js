import React from "react";
import { FaSearch } from "react-icons/fa"
import '../Style/Home.css'


const Home = () => {
    return (
        <>
        <div className="comtainer-fluid">
            <div className="img img-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-12 textbox">
                            <h1 className="text" style={{ fontSize: '50px' }}>
                                Welcome to RealEstate,<br></br>
                                Helping you live life to the fullest
                            </h1>
                        </div>
                        <div className="row search rounded">
                            <div className="col-12 textbox2">
                                <div className="shadow rounded">
                                    <h1 style={{ paddingTop: '18px', paddingLeft: '18px' }}>Explore Our Properties</h1><br />
                                    <div className="row d-flex justify-content-evenly">
                                        <div className="col-lg-3 col-md-10 col-sm-10 ">
                                            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                                <option selected>Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-3 col-md-10 col-sm-10">
                                            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                                <option selected>Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-3 col-md-10 col-sm-10">
                                            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                                <option selected>Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-2 col-md-10 col-xl-1">
                                            <button type="button" class="btn btn-outline-light d-flex justify-content-center align-items-center"><FaSearch style={{ fontSize:'20px',paddingLeft: '2px', height: '35px'}} /> <span style={{ fontSize:'20px'}}>Search</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
            
    );
}

export default Home;
