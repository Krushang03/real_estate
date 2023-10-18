import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get_prop } from "../store/actions/getPropAction.js";
import { useNavigate } from "react-router-dom";
import "../Style/allproperty.css";
import { ColorRing } from "react-loader-spinner"
import { GetPropDealTrueAction } from "../store/actions/propdealtrueAction.js"
import { IoIosBed } from 'react-icons/io';
import { FaLocationDot } from 'react-icons/fa6';
import { FaBuilding } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import { BiTime } from 'react-icons/bi';
import { BiDollar } from 'react-icons/bi';
import { FaTrashAlt } from 'react-icons/fa';
import { RiHome4Line } from 'react-icons/ri';
import { BiArea } from 'react-icons/bi';

const Features = () => {
  const { getusers, loading } = useSelector((state) => state.getprop);
  // const { success } = useSelector((state) => state.delprop);
  const [item, setitem] = useState([])
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
            {/* {item.length > 0 ?
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
              ) */}
              {(item?.length > 0 ) ?
                (item?.map((val, index) => (
                  <>                    
                    {/* {val.prop_deal === false && */}
                      <div className='col-md-5 col-lg-4 my-4 mx-md-2 mx-lg-0 d-flex justify-content-center' style={{ cursor: "pointer" }}>
                      <div className='card'>
                        <div class="card__image-holder">
                          <NavLink to={`/myproperty/${val?.p_id}`} style={{ textDecoration: "none", color: "black" }}>
                            <img class="card__image img-card" src={val.photo[0]} alt="wave" />
                          </NavLink>
                          <div className='sale-notic' style={{ background: val.sell_or_rent.trim() === "Sell" ? "red" : "#f48225" }} >for {val.sell_or_rent}</div>
                        </div>
                        <NavLink to={`/myproperty/${val?.p_id}`} style={{ textDecoration: "none", color: "black" }}>
                          <div className='border-card'>
                            <div className='text-center card-address'>
                              <p className='text-uppercase'>
                                <FaLocationDot className='card-icon' /> : {val.city_name},{val.state_name}
                              </p>
                            </div>
                            <hr style={{ margin: "0" }}></hr>
                            <div className='room-info-warp over'>
                              <div className='room-info'>
                                <p>
                                  <BiArea className='card-icon' /> : {val.prop_size} sqft
                                </p>
                                <p>
                                  <RiHome4Line className='card-icon' /> : {val.bhk} BHK
                                </p>
                              </div>
                              <div className='room-info'>
                                <p>
                                  <IoIosBed className='card-icon' /> : {val.furniture}
                                </p>
                                <p>
                                  <FaBuilding className='card-icon' /> : {val.prop_type}
                                </p>
                              </div>
                            </div>
                            <hr style={{ margin: "0" }}></hr>
                            <div className='room-info-warp'>
                              <div className='room-info'>
                                <p>
                                  <FaUserCircle className='card-icon' /> : {val.Holder_name}
                                </p>
                                <p>
                                  <BiTime className='card-icon' /> : {val.ddate}
                                </p>
                              </div>
                            </div>
                            <a className='room-price d-flex align-items-center justify-content-center' style={{ textDecoration: "none", color: "white" }}>
                              <BiDollar className='card-icon' style={{ color: "#fff" }} />{val.price}
                            </a>
                          </div>
                        </NavLink>
                      </div>
                    </div>
                    {/* } */}
                  </>
                ))
                )
              : <h1 className='d-flex justify-content-center' style={{ color: "red" }}>No Available Verified Propties</h1>
            }
          </div>}
      </div>


     
    </>
  );
};

export default Features;
