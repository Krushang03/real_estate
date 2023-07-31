import React from "react";
import '../Style/addproperty.css'
const Addproperty = () => {
    return (
        <>
            <div className="bgcolor ">
                <div className="container mb-4">
                    {/* <h1 className="text-center flex-warp p-4">Add property</h1> */}
                    <div className="row block">
                        <div className="col-10 mx-auto">
                            <form class="row g-3 justify-content-center">
                                <div class="col-md-5">
                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                        <label for="floatingInput">Name</label>
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <div class="form-floating mb-3">
                                        <input type="int" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                        <label for="floatingInput">Contact No.</label>
                                    </div>
                                </div>
                                <div class="col-10">
                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="floatingInput" placeholder="1234 Main St" />
                                        <label for="floatingInput">Home/Flate no./Society Name</label>
                                    </div>
                                </div>
                                <div class="col-10">
                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="floatingInput" placeholder="Apartment, studio, or floor" />
                                        <label for="floatingInput">Street/Area</label>
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="floatingInput" placeholder="city" />
                                        <label for="floatingInput">City</label>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    {/* <div class="form-floating mb-3"> */}
                                    {/* <label for="inputState" class="form-label">State</label> */}
                                    <select id="inputState" class="form-select" style={{ padding: "16px 12px" }}>
                                        <option selected>State</option>
                                        <option>gujarat</option>
                                        <option>gujarat</option>
                                        <option>gujarat</option>
                                    </select>
                                    {/* </div> */}
                                </div>
                                <div class="col-md-2">
                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="floatingInput" placeholder="Zip" />
                                        <label for="floatingInput">Zip</label>
                                    </div>
                                </div>
                                {/* <h1 className="flex-warp text-center">Property Details</h1> */}
                                <div class="col-md-3">
                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="floatingInput" placeholder="BHK" />
                                        <label for="floatingInput">BHK</label>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="floatingInput" placeholder="BHK" />
                                        <label for="floatingInput">Property Area(sqft)</label>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="floatingInput" placeholder="BHK" />
                                        <label for="floatingInput">Price</label>
                                    </div>
                                </div>
                                <div class="col-md-10">
                                    <p>Furniture</p>
                                    <div class="align-items-center">
                                        <input type="radio" name="fully" id="" className="form-radio ms-2" /> Fully Furnished
                                        <input type="radio" name="semi" id="" className="form-radio ms-2" /> Semi Furnished
                                        <input type="radio" name="un" id="" className="form-radio ms-2" /> Un-Furnished
                                    </div>
                                </div>
                                <div class="col-md-10">
                                    <label className="btn btn-outline-dark" htmlFor="uploadimg">Upload Images</label>
                                    <input type="file" class="form-control" id="uploadimg" placeholder="BHK" style={{ display: "none" }} />
                                </div>
                                <div class="col-md-10">
                                    <div class="form-floating">
                                        <textarea class="form-control" placeholder="Discription" id="floatingTextarea2"></textarea>
                                        <label for="floatingTextarea2">Discription</label>
                                    </div>
                                </div>


                                <div class="col-10">
                                    <button type="submit" class="btn btn-lg btn-success">Add Property</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Addproperty;