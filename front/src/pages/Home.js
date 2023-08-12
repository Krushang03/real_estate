import React, { useEffect } from "react";
import "../Style/Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { NavLink } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const Home = ({setShow}) => {
  useEffect(()=> {
    setShow(true)
  },[])
  
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    stopOnHover : false

  };
  return (
    <>
      <section className="home">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
          showArrows={false}
          showIndicators={false}
          emulateTouch={true}
        >
          <div className="image" id="img-1">
            <div className="black-bg d-flex justify-content-center align-items-center">
              <div>
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
              <div>
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
              <div>
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
      </section>
      <section className="search">
        <div className="container">
          <div className="row form_search d-flex justify-content-evenly align-items-center">
            <div className="col-md-4">
              <input
                type="text"
                placeholder="Enter a street name,address number or keybord"
                className="form-control address"
              />
            </div>
            <div className="col-md-3 select">
              <select name="city" id="city" className="form-select">
                <option value="city">City</option>
                <option value="surat">Surat</option>
                <option value="vadodra">Vadodra</option>
                <option value="ahemdabad">Ahemdabad</option>
                <option value="bardoli">Bardoli</option>
              </select>
            </div>
            <div className="col-md-3 select">
              <select name="state" id="state" className="form-select">
                <option value="state">State</option>
                <option value="gujarat">Gujarat</option>
                <option value="maharashatra">Maharashatra</option>
                <option value="rajsthan">Rajsthan</option>
              </select>
            </div>
            <div className="col-md-2">
              <button
                type="button"
                className="btn btn-outline-light form-control"
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <NavLink className="nav-link nav-text" to="/addproperty">
          <button className="btn btn-dark btn-lg  d-flex align-items-center p-3" id="add-btn">
            <FaPlus />
          </button>
        </NavLink>
      </section>
    </>
  );
};

export default Home;
