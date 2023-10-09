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


const Home = ({ setShow }) => {
  const dispatch = useDispatch()
  const ref = useRef(null)
  const { searchdata, success, loading } = useSelector((state) => state.searchprop)
  const [searchitem, setsearchitem] = useState()
  const [searchitemerr, setsearchitemerr] = useState()
  const [nodata, setnodata] = useState()

  useEffect(() => {
    // if (searchdata) {
    //   setsearchitem(searchdata)
    //   console.log(searchitem);
    // }
  }, [searchdata, success])

  useEffect(() => {
    setShow(true)
  }, [])

  useEffect(() => {
    worldDataApi();
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
  // const [disable, setdisable] = useState()
  const onSubmit = (data) => {
    const item = {
      area_name: data.area_name,
      city_name: data.city_name,
      state_name: data.state_name,
      country_name: data.country_name
    }
    console.log(item,"item");
    reset({
      country_name: "",
      area_name: "",
      state_name: "",
      city_name: ""
    })
    if (data.area_name.length > 0 || data.city_name.length > 0 || data.state_name.length > 0 || data.country_name.length > 0) {
      if (searchdata) {
        setsearchitem(searchdata)
        console.log(searchitem);
      }
      dispatch(SearchPropAction(item))
      // setsearchitemerr("")
      setTimeout(() => {
        ref.current?.scrollIntoView({ behavior: "smooth" })
      }, [500])
      if(searchitem?.length === 0){
        setnodata("no available data")
      }
    }

    if (data.area_name.length === 0 && data.city_name.length === 0 && data.state_name.length === 0 && data.country_name.length === 0) {
      if (searchdata.length === 0) {
        setsearchitemerr("Please enter one of this fields")
        // toast.error('Please enter one of the search field', {
        //   position: "top-right",
        //   autoClose: 2500,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "colored",
        // });
      }
    }

  }
  const Clear = () => {
    setsearchitemerr("")
    setsearchitem(null)
    setnodata("")
  }
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
                />
              </div>
              <div className="col-md-2 select">
                <div className="form-floating">
                  <select
                    className="form-select"
                    id="floatingSelect"
                    aria-label="Floating label select example"
                    {...register("country_name", {
                      onChange: (e) => handleState(e.target.value),
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
                      onChange: (e) => handleCity(e.target.value),
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

                {searchitem?.length > 0 || nodata ?
                  <button className="btn btn-outline-light form-control" style={{ padding: "8px" }} onClick={Clear}>
                    <h1 className="d-flex align-items-center justify-content-center" style={{ fontSize: "25px", margin: "0px" }}> clear</h1>
                  </button>
                  :
                  <button
                    type="submit"
                    className="btn btn-outline-light form-control"
                    style={{ padding: "8px" }}
                  >
                    <h1 className="d-flex align-items-center justify-content-center" onClick={() => setsearchitemerr("")} style={{ fontSize: "25px", margin: "0px" }}>Search</h1>
                  </button>
                }
              </div>
              {searchitemerr && <h4 class="alert alert-danger d-flex justify-content-start mt-2 p-1 ps-2" style={{ marginRight: "", width: "920px" }} role="alert">{searchitemerr}</h4>}
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


      <div className="col-md-12 scrolling" ref={ref}>

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
          searchitem &&
          (searchitem?.map((curval, index) => (
            <>
              <div className="col-lg-3 col-md-6 col-sm-6 ">
                <div class="card p-3" >
                  <NavLink to={`/property/${curval.p_id}`} style={{ textDecoration: "none", color: "black" }}>

                    <div style={{ height: "200px", width: "100%" }}>
                      <img src={curval.photo_path[0]} class="card-img-top img-fluid" alt="Product" style={{ height: "200px", width: "100%", objectFit: "contain" }} />
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
          ))
          )
        }
        {nodata &&
          <h1 >{nodata}</h1>}
      </div>
    </>
  );
};


export default Home;
