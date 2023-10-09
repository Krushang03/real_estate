

// const SingleProperty = () => {


//   return (
//     <>
//       <div className='container mt-5'>
//         <div className='row mx-auto'>
//           <div className='col-md-6' style={{ width: "550px" }}>
//             <Carousel

//               autoPlay={true}
//               transitionTime={3}
//               infiniteLoop={true}
//               showStatus={false}
//               showArrows={false}
//               showIndicators={false}
//               emulateTouch={true}
//             >
//               {imgs && imgs.map((val, index) => {
//                 return (
//                   <>
//                     <img src={val} alt='single property' className='img-fluid'></img>
//                   </>
//                 )
//               })}
//             </Carousel>
//           </div>
//           <div className='col-md-6 mx-auto'>
//             <p> name : {item.Holder_name}</p>
//             <p> area name : {item.area_name}</p>
//             <p> state name : {item.state_name}</p>
//             <p> city name : {item.city_name}</p>
//             <p> country name : {item.country_name}</p>
//             <p> bhk : {item.bhk}</p>
//             <p> dis : {item.dis}</p>
//             <p> mobile_no : {item.mobile_no}</p>
//             <p> house_no : {item.house_no}</p>
//             <p> furniture : {item.furniture}</p>
//             <p> price : {item.price}</p>
//             <p> rent_or_sell : {item.rent_or_sell}</p>
//             <p> prop_size : {item.prop_size}</p>
//           </div>
//         </div>
//       </div>

//     </>
//   )
// }

// export default SingleProperty


import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { single_prop } from '../store/actions/singlepropertyaction';
import { useParams } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BiArea } from 'react-icons/bi';
import { BsCurrencyRupee } from 'react-icons/bs';
import { RiHome4Line } from 'react-icons/ri';
import { IoIosBed } from 'react-icons/io';
import { FaLocationDot } from 'react-icons/fa6';
import { FaBuilding } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import { BiTime, BiLogoGmail } from 'react-icons/bi';
import { MdCall } from 'react-icons/md';
import { BiDollar } from 'react-icons/bi';
import ReactSwitch from 'react-switch';
import "../Style/singleProperty.css"
import { GetPropertyUserAction } from '../store/actions/propaddeduserAction';
import { PropDealTrueAction } from '../store/actions/propdealtrueAction';
import { useNavigate } from 'react-router-dom';

const SingleProperty = () => {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { singleuser, refresh } = useSelector((state) => state.singleprop);
  const { getusersdetails } = useSelector((state) => state.getpropuserdetails);
  const [item, setitem] = useState([])
  const [userdetails, setuserdetails] = useState()
  const [imgs, setimgs] = useState([])
  const [color, setcolor] = useState()
  const { id } = useParams();

  useEffect(() => {
    dispatch(single_prop(id));
  }, []);

  useEffect(() => {
    dispatch(GetPropertyUserAction(singleuser?.u_id));
  }, [singleuser, refresh])

  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      navigate("/userauth");
    }
  }, []);

  useEffect(() => {
    if (singleuser) {
      setitem(singleuser)
    }
    if (getusersdetails) {
      setuserdetails(getusersdetails)
    }
  }, [singleuser, refresh, getusersdetails, id])

  useEffect(() => {
    setimgs(item.photo)
  }, [item])

  const handleChange = () => {
    setChecked((prev) => !prev)
  }

  useEffect(() => {
    if (checked === true) {
      dispatch(PropDealTrueAction(item.p_id))
      setTimeout(() => {
        navigate("/allproperty")
      }, 100);
    }
  }, [checked])

  const userDetail = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <div className='container'>
      <div className='row d-flex justify-content-evenly align-items-center my-5'>
        {item &&
          [item].map((val, index) => {
            console.log(val, "nn")
            return (
              <>
                <div className='col-md-10 single-list-page'>
                  <div className='carousel'>
                    <Carousel
                      autoPlay={true}
                      transitionTime={1000}
                      infiniteLoop={true}
                      showStatus={false}
                      showArrows={false}
                      showIndicators={false}
                      stopOnHover={false}
                      emulateTouch={true}
                      thumbWidth={80}
                      // thumbHeight={120}
                      className='slider'
                    >
                      {imgs && imgs.map((val, index) => {
                        return (
                          <>
                            <img src={val} alt='single property' className='img-fluid'></img>
                          </>
                        )
                      })}
                    </Carousel>
                    <div className='sale-notice' style={{ backgroundColor: "#e94646" }}>for {val.sell_or_rent}</div>
                    {val.prop_deal === true &&
                      <div className='deal-prop' style={{ backgroundColor: "#e94646", color: "white" }}>Recently dealed Property</div>
                    }
                  </div>
                  <div className='single-list-content'>
                    <div className='row mb-4'>
                      <div className='col-xl-8 sl-title'>
                        <h4 className='flex-sm-warp'>{val.house_no}, {val.area_name}</h4>
                        <p className='text-uppercase'>
                          <FaLocationDot className='card-icon me-2' />  {val.city_name} , {val.state_name}, {val.country_name}
                        </p>
                      </div>
                      <div className='col-xl-4'>
                        <a className='room-price d-flex align-items-center justify-content-center' style={{ textDecoration: "none", color: "white" }}>
                          <BiDollar className='card-icon' style={{ color: "#fff" }} />{val.price}
                        </a>
                      </div>
                    </div>
                    {
                      (val.statuss === "verified" && val.prop_deal === false) &&
                      userDetail.u_id === val.u_id &&
                      <div className='d-flex mb-4'>
                        <h5>Property-Deals</h5>
                        <ReactSwitch
                          checked={checked}
                          onChange={handleChange}
                          className='ms-5'
                        />
                      </div>}
                    <div className='row'>
                      <div className='col-md-7'>
                        <h3 class="sl-sp-title">Property Details</h3>
                        <div className='row mb-4 prop-details'>
                          <div className='col-md-6 col-sm-6'>
                            <p>
                              <BiArea className='card-icon me-2' />  {val.prop_size} sqft
                            </p>
                            <p>
                              <IoIosBed className='card-icon me-2' />  {val.furniture}
                            </p>
                            <p>
                              <FaUserCircle className='card-icon me-2' />  {val.Holder_name}
                            </p>
                          </div>
                          <div className='col-md-6 col-sm-6'>
                            <p>
                              <RiHome4Line className='card-icon me-2' />  {val.bhk} BHK
                            </p>
                            <p>
                              <FaBuilding className='card-icon me-2' />  {val.prop_type}
                            </p>
                            <p>
                              <BiTime className='card-icon me-2' />  {val.ddate}
                            </p>
                          </div>
                        </div>
                      </div>
                      {userdetails &&
                        <div className='col-md-4'>
                          <div className='user-card'>
                            <div className='d-flex align-items-center card-border'>
                              <img src={userdetails?.photo} className='user-img' alt='userprofile'></img>
                              <div className='d-flex flex-column ms-4'>
                                <h5 className='mb-0'>{val.user}</h5>
                                <p>Real Estate Agent</p>
                              </div>
                            </div>
                            <div className='mt-4'>
                              <p>
                                <MdCall className='card-icon me-2' /> (+91) {val.mobile_no}
                              </p>
                              <p>
                                <BiLogoGmail className='card-icon me-2' /> {userdetails?.email}
                              </p>
                            </div>
                          </div>
                        </div>}
                    </div>
                    <h3 class="sl-sp-title">Description</h3>
                    <div className='description'>
                      <p>
                        {val.dis}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )
          })
        }

      </div>
    </div>
  )
}

export default SingleProperty;