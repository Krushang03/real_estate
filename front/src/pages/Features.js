import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get_prop } from "../store/actions/getPropAction.js";

const Features = () => {
  const { getusers } = useSelector((state) => state.getprop);
  const [item, setitem] = useState([])
  const [limit, setlimit] = useState(3)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(get_prop());
  }, []);
  useEffect(() => {
    if (getusers) {
      setitem(getusers)
    }
  }, [getusers])
  const viewProduct = () => {

  }
  return (
    <>

      {/* <NavLink className="nav-link nav-text" to="/addproperty">
        <button className="btn btn-primary">Add Property</button>
      </NavLink> */}

      <div className="col-md-12">
        <div className="row d-flex justify-content-evenly m-5">
          {item.length > 0 ?
            item.slice(0, limit).map((curval, index) => (
              <>
                <div className="col-md-3 rounded m-3" style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }} key={item.index}>
                  <NavLink to={`/property/${curval.p_id}`} style={{ textDecoration: "none", color: "black" }}>
                    <ul style={{ listStyle: "none" }}>
                      <img src={curval.photo[0]} className="img-fluid" style={{}} alt="house_photo" />
                      <li> price : {curval.price}</li>
                      <li>bhk : {curval.bhk}</li>
                      <li>property size : {curval.prop_size}</li>
                      <li>city name : {curval.city_name}</li>
                      <li>state name : {curval.state_name}</li>
                    </ul>
                  </NavLink>
                </div>
              </>
            )
            )
            : ("")
          }
        </div>
        <div className='col-12'>
          <button type='button' className='btn btn-primary w-100' onClick={() => setlimit(limit + 3)}>load more</button>
        </div>
      </div>
    </>
  );
};

export default Features;
