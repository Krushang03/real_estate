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
import $ from 'jquery';
import { BsCurrencyRupee } from 'react-icons/bs';
import { RiHome4Line } from 'react-icons/ri';
import { LiaCitySolid } from 'react-icons/lia';
import { FaLocationArrow } from 'react-icons/fa';
import { BiSolidDownArrow } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { FiHeart } from 'react-icons/fi';
import "../Style/myproperty.css"

const MyProperty = () => {
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
    reset,
  } = useForm({
  });

  const { usersproppendding } = useSelector((state) => state.myprop);
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
    const update = mypropdata.filter((val) => val.p_id !== id)
    setmypropdata(update)
    dispatch(del_prop_action(ids))
  }
  const mypropcng = (e) => {
    dispatch(my_prop_Action(e));
  }

  // $(document).ready(function () {
  //   var zindex = 10;

  //   $("div.card").click(function (e) {
  //     e.preventDefault();

  //     var isShowing = false;

  //     if ($(this).hasClass("show")) {
  //       isShowing = true
  //     }

  //     if ($("div.cards").hasClass("showing")) {
  //       // a card is already in view
  //       $("div.card.show")
  //         .removeClass("show");

  //       if (isShowing) {
  //         // this card was showing - reset the grid
  //         $("div.cards")
  //           .removeClass("showing");
  //       } else {
  //         // this card isn't showing - get in with it
  //         $(this)
  //           .css({ zIndex: zindex })
  //           .addClass("show");

  //       }

  //       zindex++;

  //     } else {
  //       // no cards in view
  //       $("div.cards")
  //         .addClass("showing");
  //       $(this)
  //         .css({ zIndex: zindex })
  //         .addClass("show");

  //       zindex++;
  //     }

  //   });
  // });

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
      <div className='container'>
        <div className='row d-flex justify-content-evenly align-items-center mt-5'>

          {mypropdata?.length > 0 ?
            mypropdata.map((val, index) => {
              const singleprop = mypropdata.filter((data) => data.p_id === pid)
              return (
                <>
                  <div className='col-md-4 my-4 mx-md-2 mx-lg-0 d-flex justify-content-center' style={{ filter: toggle && singleprop[0].p_id !== val.p_id && "blur(2px)" }}>
                    <div className='cards'>
                      <div class="card" >
                        <div class="card__image-holder">
                          <img class="card__image img-fluid" src={val.photo[0]} alt="wave" />
                        </div>
                        <div class="card-title" >
                          {/* <a href="#" class="toggle-info btn">
                            <span class="left"></span>
                            <span class="right"></span>
                          </a> */}

                          {(!toggle) ?
                            <BiSolidDownArrow onClick={() => [settoggle(!toggle), setpid(val.p_id)]} style={{
                              cursor: "pointer"
                            }} />

                            :
                            singleprop[0].p_id === val.p_id &&
                            <AiOutlineClose onClick={() => [settoggle(!toggle), setpid(val.p_id)]} style={{
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
                            singleprop[0].p_id === val.p_id &&
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
                                deletePropetry(singleprop[0].p_id)

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
            : ("No Available Propties")
          }
        </div>

      </div>
    </div>

  )
}

export default MyProperty
