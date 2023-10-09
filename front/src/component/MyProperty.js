import React from 'react'
import { my_prop_Action } from '../store/actions/myProperty'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"
import { del_prop_action } from '../store/actions/delPropAction';
import { useForm } from "react-hook-form";
import { BiArea } from 'react-icons/bi';
import { BsCurrencyRupee } from 'react-icons/bs';
import { RiHome4Line } from 'react-icons/ri';
import { FiHeart } from 'react-icons/fi';
import "../Style/myproperty.css";
import { ColorRing } from "react-loader-spinner";
import { IoIosBed } from 'react-icons/io';
import { FaLocationDot } from 'react-icons/fa6';
import { FaBuilding } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import { BiTime } from 'react-icons/bi';
import { BiDollar } from 'react-icons/bi';
import { FaTrashAlt } from 'react-icons/fa';


const MyProperty = () => {
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
    reset,
  } = useForm({
  });

  const { usersproppendding, loading } = useSelector((state) => state.myprop);
  const { refresh, propertyadded } = useSelector((state) => state.addprop);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [pid, setpid] = useState()
  const [toggle, settoggle] = useState(false)
  const [mypropdata, setmypropdata] = useState();

  useEffect(() => {
    const a = "pending"
    dispatch(my_prop_Action(a));
  }, [refresh, propertyadded]);

  useEffect(() => {
    if (usersproppendding) {
      setmypropdata(usersproppendding)
    }
  }, [usersproppendding])

  const deletePropetry = (id) => {
    const ids = {
      id
    }
    const update = mypropdata.filter((val) => val?.p_id !== id)
    setmypropdata(update)
    dispatch(del_prop_action(ids))
    settoggle(!toggle)
  }
  const mypropcng = (e) => {
    dispatch(my_prop_Action(e));
  }

  return (
    <div>
      <div className="col-md-12">
        <div className="row d-flex justify-content-evenly gy-3 m-5">
          <h1 className='d-flex justify-content-center'>My Properties</h1>
          <div className="d-flex justify-content-center align-items-center">
            <input
              type="radio"
              id=""
              value="pending"
              defaultChecked
              className="form-radio ms-2"
              {...register("myproperty")}
              onChange={(e) => mypropcng(e.target.value)}
            />
            <label
              className="form-check-label ms-2"
              htmlFor="flexRadioDefault2"
            >
              Pending
            </label>
            <input
              type="radio"
              id=""
              value="verified"
              className="form-radio ms-4"
              {...register("myproperty")}
              onChange={(e) => mypropcng(e.target.value)}
            />
            <label
              className="form-check-label ms-2"
              htmlFor="flexRadioDefault2"
            >
              Verified
            </label>
            <input
              type="radio"
              id=""
              value="rejected"
              className="form-radio ms-4"
              {...register("myproperty")}
              onChange={(e) => mypropcng(e.target.value)}
            />
            <label
              className="form-check-label ms-2"
              htmlFor="flexRadioDefault2"
            >
              Rejected
            </label>
          </div>
          <hr />
          {/* {mypropdata?.length > 0 ?
            mypropdata.map((curval, index) => (
              <>
                <div className="col-lg-3 col-md-6 col-sm-6 ">
                  <div class="card p-3" >
                    <NavLink to={`/myproperty/${curval.p_id}`} style={{ textDecoration: "none", color: "black" }}>

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
                    <button className="btn btn-danger" onClick={() => {
                      deletePropetry(curval.p_id)

                    }}>remove</button>
                  </div>
                </div>
              </>
            )
            )
            : ("No Available Propties")
          } */}
        </div>


      </div>
      {/* <div className='container'>
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
          : <div className='row d-flex justify-content-evenly align-items-center mt-5'>

            {mypropdata?.length > 0 ?
              mypropdata.map((val, index) => {
                const singleprop = mypropdata.filter((data) => data?.p_id === pid)
                return (
                  <>
                    <div className='col-md-4 my-4 mx-md-2 mx-lg-0 d-flex justify-content-center' style={{ filter: toggle && singleprop[0]?.p_id !== val?.p_id && "blur(2px)" }}>
                      <div className='cards'>
                        <div class="card" >
                          <div class="card__image-holder">
                            <img class="card__image img-fluid" style={{ height: "228px", width: "298px" }} src={val.photo[0]} alt="wave" />
                          </div>
                          <div class="card-title" >
                  

                            {(!toggle) ?
                              <BiSolidDownArrow onClick={() => [settoggle(!toggle), setpid(val?.p_id)]} style={{
                                cursor: "pointer"
                              }} />

                              :
                              <AiOutlineClose onClick={() => [settoggle(!toggle), setpid(val?.p_id)]} style={{
                                cursor: "pointer"
                              }} />
                            }

                            <p>
                              <BsCurrencyRupee className='card-icon' />: {val.price}
                            </p>
                            <p>
                              <BiArea className='card-icon' /> : {val.prop_size} sqft
                            </p>
                            {toggle &&
                              singleprop &&
                              singleprop[0]?.p_id === val?.p_id &&
                              <>
                                <p>
                                  <RiHome4Line className='card-icon' /> : {singleprop[0].bhk} BHK
                                </p>
                                <p>
                                  <LiaCitySolid className='card-icon' /> : {singleprop[0].city_name}
                                </p>
                                <p>
                                  <FaLocationArrow className='card-icon' /> : {singleprop[0].state_name}
                                </p>
                                <NavLink to={`/myproperty/${singleprop[0]?.p_id}`} style={{ textDecoration: "none", color: "black" }}>
                                  <button className='btn btn-outline-dark'>Read More</button>
                                </NavLink>
                                <button className="btn btn-danger" onClick={() => {
                                  deletePropetry(val.p_id)

                                }}>remove</button>
                              </>
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })
              : <h1 className='d-flex justify-content-center' style={{ color: "red" }}>No Available Propties</h1>
            }
          </div>}

      </div> */}

      <div className='container'>
        <div className='row d-flex justify-content-evenly align-items-center mt-5'>

          {
            mypropdata?.map((val, index) => {
              return (
                <>
                  {/* {val.prop_size === "2000" && */}
                    <div className='col-md-5 col-lg-4 my-4 mx-md-2 mx-lg-0 d-flex justify-content-center' style={{ cursor: "pointer" }}>
                      <div className='card'>
                        <div class="card__image-holder">
                          <NavLink to={`/myproperty/${val?.p_id}`} style={{ textDecoration: "none", color: "black" }}>
                            <img class="card__image img-card" src={val.photo[0]} alt="wave" />
                          </NavLink>
                          <div className='sale-notic' style={{ background: val.sell_or_rent.trim() === "Sell" ? "red" : "#f48225" }} >for {val.sell_or_rent}</div>
                          <FaTrashAlt className="delete" onClick={() => {
                            deletePropetry(val.p_id)

                          }} />
                        </div>
                        <NavLink to={`/myproperty/${val?.p_id}`} style={{ textDecoration: "none", color: "black" }}>
                          <div className='border-card'>
                            <div className='text-center card-address'>
                              {/* <h5 style={{ margin: "0" }}>{val.house_no}</h5> */}
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
              )
            })
          }
        </div>

      </div>

    </div>

  )
}

export default MyProperty
