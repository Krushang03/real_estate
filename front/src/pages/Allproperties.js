import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get_prop } from "../store/actions/getPropAction.js";
import { useNavigate } from "react-router-dom";
import "../Style/allproperty.css";
import { ColorRing } from "react-loader-spinner"
import { GetPropDealTrueAction } from "../store/actions/propdealtrueAction.js"

const Features = () => {
  const { getusers, loading } = useSelector((state) => state.getprop);
  const { gettruepropdealdata, loading2, success2 } = useSelector((state) => state.propertydeal);
  // const { success } = useSelector((state) => state.delprop);
  const [item, setitem] = useState([])
  const [propdealitem, setpropdealitem] = useState([])
  // const [limit, setlimit] = useState(3)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(get_prop());
    dispatch(GetPropDealTrueAction())
  }, []);

  useEffect(() => {
    if (getusers) {
      setitem(getusers)
    }
  }, [getusers])

  useEffect(() => {
    if (gettruepropdealdata) {
      setpropdealitem(gettruepropdealdata)
    }
  }, [gettruepropdealdata, success2])

  // useEffect(() => {
  //   if (!localStorage.getItem("userInfo")) {
  //     navigate("/userauth");
  //   }
  // }, []);

  return (
    <>
      <div className="col-md-12">
        {loading ?
          <div className='d-flex justify-content-center mt-5'>
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
          </div>
          : <div className="row d-flex justify-content-evenly gy-3 m-5">
            <h1 className="d-flex justify-content-center text-capitalize">all property</h1>
            {item.length > 0 ?
              item.slice(0).reverse().map((curval, index) => (
                <>
                  <div className="col-lg-3 col-md-6 col-sm-6 ">
                    <div class="card p-3" >
                      <NavLink to={`/property/${curval.p_id}`} style={{ textDecoration: "none", color: "black" }}>

                        <div style={{ height: "200px", width: "100%" }}>
                          <img src={curval.photo[0]} class="card-img-top img-fluid" alt="Product" style={{ height: "200px", width: "100%", objectFit: "contain" }} />
                        </div>


                        <div class="card-body px-1  pb-0 ">
                          <div className="d-flex justify-content-between">
                            <p class="">Price : {curval.price}</p>
                            <p class="product_brand mb-0">BHK : {curval.bhk}</p>
                          </div>
                          <p>Property Size(sqrft) : {curval.prop_size}</p>
                          <p>State Name : {curval.state_name}</p>
                          <p>City Name : {curval.city_name}</p>
                        </div>
                      </NavLink>
                    </div>
                  </div>
                </>
              )
              )
              : <h1 className='d-flex justify-content-center' style={{ color: "red" }}>No Available Verified Propties</h1>
            }
          </div>}
      </div>


      <div className="col-md-12">
        {loading ?
          <div className='d-flex justify-content-center mt-5'>
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
          </div>
          : <div className="row d-flex justify-content-evenly gy-3 m-5">
            <h1 className="d-flex justify-content-center text-capitalize">resent dealed property</h1>
            {propdealitem.length > 0 ?
              propdealitem.slice(0).reverse().map((curval, index) => (
                <>
                  <div className="col-lg-3 col-md-6 col-sm-6 ">
                    <div class="card p-3" >
                      <NavLink to={`/property/${curval.p_id}`} style={{ textDecoration: "none", color: "black" }}>

                        <div style={{ height: "200px", width: "100%" }}>
                          <img src={curval?.photo_path[0]} class="card-img-top img-fluid" alt="Product" style={{ height: "200px", width: "100%", objectFit: "contain" }} />
                        </div>


                        <div class="card-body px-1  pb-0 ">
                          <div className="d-flex justify-content-between">
                            <p class="">Price : {curval.price}</p>
                            <p class="product_brand mb-0">BHK : {curval.bhk}</p>
                          </div>
                          <p>Property Size(sqrft) : {curval.prop_size}</p>
                          <p>State Name : {curval.state_name}</p>
                          <p>City Name : {curval.city_name}</p>
                        </div>
                      </NavLink>
                    </div>
                  </div>
                </>
              )
              )
              : <h1 className='d-flex justify-content-center' style={{ color: "red" }}>No Available Verified Propties</h1>
            }
          </div>}
      </div>
    </>
  );
};

export default Features;
