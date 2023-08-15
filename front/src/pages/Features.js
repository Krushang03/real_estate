import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get_prop } from "../store/actions/getPropAction.js";


const Features = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(get_prop());
  }, []);

  return (
    <>
      {/* <NavLink className="nav-link nav-text" to="/addproperty">
        <button className="btn btn-primary">Add Property</button>
      </NavLink> */}
    </>
  );
};

export default Features;
