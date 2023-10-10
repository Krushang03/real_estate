import React, { useEffect, useRef, useState } from "react";
import "../Style/Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { NavLink } from "react-router-dom";
import { FaPlus, FaSearch } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios";
import { SearchPropAction } from "../store/actions/searchpropertyAction"
import { useDispatch, useSelector } from "react-redux"
import { ColorRing } from "react-loader-spinner"
import { toast } from 'react-toastify';
import { ClearSearchData } from "../store/Slices/searchpropertySlice";
import { IoIosBed } from 'react-icons/io';
import { FaLocationDot } from 'react-icons/fa6';
import { FaBuilding } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import { BiTime } from 'react-icons/bi';
import { BiDollar } from 'react-icons/bi';
import { FaTrashAlt } from 'react-icons/fa';
import { RiHome4Line } from 'react-icons/ri';
import { BiArea } from 'react-icons/bi';

const Home = ({ setShow }) => {
  const dispatch = useDispatch()
  const ref = useRef(null)
  const { searchdata, success, loading } = useSelector((state) => state.searchprop)
  const [searchitem, setsearchitem] = useState()
  const [searchitemerr, setsearchitemerr] = useState()
  const [nodata, setnodata] = useState()
  const [showerrmsg, setshowerrmsg] = useState(false)
  const [searchitemview, setsearchitemview] = useState(false)

  useEffect(() => {
    if (searchdata) {
      setsearchitem(searchdata)
    }
  }, [searchdata, success])

  useEffect(() => {
    setShow(true)
  }, [])

  useEffect(() => {
    worldDataApi();
    ClearSearchData()
  }, []);

  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
    reset,
  } = useForm({
  });

  const [worlddata, setWorlddata] = useState([]);
  const [state, setstate] = useState([]);
  const [city, setcity] = useState([]);

  const worldDataApi = async () => {
    const result = await axios.get(
      `https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json`,

      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setWorlddata(result.data);
    return result.data;
  };
  const country = [...new Set(worlddata.map((item) => item.country))];

  const handleState = (e) => {
    let allstate = worlddata.filter((val) => val.country === e);
    let statename = [...new Set(allstate.map((ele) => ele.subcountry))];
    setstate(statename);
  };
  const handleCity = (e) => {
    let allcity = worlddata.filter((val) => val.subcountry === e);
    let cityname = [...new Set(allcity.map((ele) => ele.name))];
    setcity(cityname);
  };
  const [search, setsearch] = useState()
  const onSubmit = (data) => {
    const item = {
      area_name: data.area_name,
      city_name: data.city_name,
      state_name: data.state_name,
      country_name: data.country_name
    }
    reset({
      country_name: "",
      area_name: "",
      state_name: "",
      city_name: ""
    })
    if (data.area_name.length === 0 && data.city_name.length === 0 && data.state_name.length === 0 && data.country_name.length === 0) {
      setsearchitemerr("Please enter one of this fields")
      setshowerrmsg(false)
    }
    if (showerrmsg && (data.area_name.length === 0 && data.city_name.length === 0 && data.state_name.length === 0 && data.country_name.length === 0)) {
      setsearchitemerr("")
    }
    if (search) {
      if (data.area_name.length > 0 || data.city_name.length > 0 || data.state_name.length > 0 || data.country_name.length > 0) {

        if (searchitem?.length === 0 || !searchdata || !searchitem || searchdata?.length === 0 || searchitem?.length === null || searchdata?.length === null) {
          setnodata("no available data")
        }

        if ((searchdata?.length > 0 || searchitem?.length > 0) && searchitemview === true) {
          setnodata(" ")
        }

        dispatch(SearchPropAction(item))

        setTimeout(() => {
          ref.current?.scrollIntoView({ behavior: "smooth" })
        }, [500])
      }
    }
  }
  const Clear = () => {
    if (search) {
      setsearch(null)
    }
    setsearchitemerr("")
    setshowerrmsg(true)
    dispatch(ClearSearchData())
    if (searchitem) {
      setsearchitem(null)
      setsearchitemview(true)
    }
    setnodata(null)
    reset({
      country_name: "",
      area_name: "",
      state_name: "",
      city_name: ""
    })
  }

  const HandleError = (e) => {
    setsearch({ ...search, [e.target.name]: e.target.value })
    setsearchitemview(false)
  }
  useEffect(() => {
    if (search) {
      setsearchitemerr("")
    }
  }, [search])

  useEffect(() => {
    if (searchitemview === false && searchdata) {
      setsearchitem(searchdata)
    }
  }, [searchitem])

  return (
    <>
      <section className="home">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={1000}
          stopOnHover={false}
          infiniteLoop={true}
          showStatus={false}
          showArrows={false}
          showIndicators={false}
          emulateTouch={true}
          className="slider1"
        >
          <div className="image" id="img-1">
            <div className="black-bg d-flex justify-content-center align-items-center">
              <div className="d-md-block d-none">
                <h1 className="flex-wrap">
                  FIND YOUR PLACE WITH OUR LOCAL LIFE STYLE
                </h1>
                <p className="flex-wrap">
                  Search real estate property records, houses, condos, land and
                  more on realestate.com®. Find property info from the most
                  comprehensive source data.
                </p>
              </div>
            </div>
          </div>
          <div className="image" id="img-2">
            <div className="black-bg d-flex justify-content-center align-items-center">
              <div className="d-md-block d-none">
                <h1 className="flex-wrap">
                  FIND YOUR PLACE WITH OUR LOCAL LIFE STYLE
                </h1>
                <p className="flex-wrap">
                  Search real estate property records, houses, condos, land and
                  more on realestate.com®. Find property info from the most
                  comprehensive source data.
                </p>
              </div>
            </div>
          </div>
          <div className="image" id="img-3">
            <div className="black-bg d-flex justify-content-center align-items-center">
              <div className="d-md-block d-none">
                <h1 className="flex-wrap">
                  FIND YOUR PLACE WITH OUR LOCAL LIFE STYLE
                </h1>
                <p className="flex-wrap">
                  Search real estate property records, houses, condos, land and
                  more on realestate.com®. Find property info from the most
                  comprehensive source data.
                </p>
              </div>
            </div>
          </div>
        </Carousel>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="search">
            <div className="row form_search d-flex justify-content-evenly align-items-center">
              <div className="col-md-3">
                <input
                  type="text"
                  placeholder="Enter a street name,address number"
                  className="form-control address"
                  {...register("area_name")}
                  style={{ height: "56px" }}
                  onChange={(e) => HandleError(e)}
                />
              </div>
              <div className="col-md-2 select">
                <div className="form-floating">
                  <select
                    className="form-select"
                    id="floatingSelect"
                    aria-label="Floating label select example"
                    {...register("country_name", {
                      onChange: (e) => [handleState(e.target.value), HandleError(e)],
                    })}
                  >
                    <option value="" defaultValue>
                      Select Country
                    </option>

                    {country.map((ele) => {
                      return (
                        <>
                          <option value={ele}>{ele}</option>
                        </>
                      );
                    })}
                  </select>
                  <label htmlFor="floatingSelect">Country</label>
                </div></div>
              <div className="col-md-2 select">
                <div className="form-floating">
                  <select
                    className="form-select"
                    id="floatingSelect"
                    aria-label="Floating label select example"
                    {...register("state_name", {
                      onChange: (e) => [handleCity(e.target.value), HandleError(e)],
                    })}

                  >
                    <option value="" defaultValue>
                      Select State
                    </option>
                    {state.length > 0 ? state.map((val) => {
                      return (
                        <>
                          <option value={val}>{val}</option>
                        </>
                      );
                    }) : <option value="" style={{ color: "red" }} disabled >please select country</option>}
                  </select>
                  <label htmlFor="floatingSelect">State</label>
                </div>
              </div>
              <div className="col-md-2 select">
                <div className="form-floating">
                  <select
                    className="form-select"
                    id="floatingSelect"
                    aria-label="Floating label select example"
                    {...register("city_name")}
                    onChange={(e) => HandleError(e)}
                  >
                    <option value="" defaultValue >
                      Select City
                    </option>
                    {city.length > 0 ? city.map((val) => {
                      return (
                        <>
                          <option value={val}>{val}</option>
                        </>
                      );
                    }) : <option value="" style={{ color: "red" }} disabled >please select state</option>}

                  </select>
                  <label htmlFor="floatingSelect">city</label>
                </div>
              </div>
              <div className="col-md-2">

                {(searchitem?.length > 0 || nodata) ?
                  <button className="btn btn-outline-light form-control" style={{ padding: "8px" }} onClick={Clear}>
                    <h1 className="d-flex align-items-center justify-content-center" style={{ fontSize: "25px", margin: "0px" }}> clear</h1>
                  </button>
                  :
                  <button
                    type="submit"
                    className="btn btn-outline-light form-control"
                    style={{ padding: "8px" }}
                    onClick={() => setsearchitemerr("")}
                  >
                    <h1 className="d-flex align-items-center justify-content-center" style={{ fontSize: "25px", margin: "0px" }}>Search</h1>
                  </button>
                }
              </div>
              {searchitemerr && !showerrmsg && <h4 class="alert alert-danger d-flex justify-content-start mt-2 p-1 ps-2" style={{ marginRight: "", width: "920px" }} role="alert">{searchitemerr}</h4>}
            </div>
            <div>
            </div>
          </div>
        </form>
        <NavLink className="nav-link nav-text" to="/addproperty">
          <button className="btn btn-dark btn-lg  d-flex align-items-center p-3" id="add-btn">
            <FaPlus />
          </button>
        </NavLink>

      </section>
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
        :
        <>
          <div className='container' ref={ref}>
            <div className='row d-flex justify-content-evenly align-items-center mt-5'>
              {(searchitem?.length > 0 || searchdata?.length > 0) ?
                (searchitem?.map((val, index) => (
                  <>                    
                    {/* {val.prop_deal === false && */}
                      <div className='col-md-5 col-lg-4 my-4 mx-md-2 mx-lg-0 d-flex justify-content-center' style={{ cursor: "pointer" }}>
                      <div className='card'>
                        <div class="card__image-holder">
                          <NavLink to={`/myproperty/${val?.p_id}`} style={{ textDecoration: "none", color: "black" }}>
                            <img class="card__image img-card" src={val.photo_path[0]} alt="wave" />
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
                :
                searchitemview === false &&
                nodata &&
                <h1 >{nodata}</h1>
              }
            </div>
          </div>
        </>}
    </>

  );
};


export default Home;
