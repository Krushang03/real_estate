import React from "react";
import { NavLink } from "react-router-dom";
const Features = () => {
  return (
    <>
      <NavLink className="nav-link nav-text" to="/addproperty">
        <button className="btn btn-primary">Add Property</button>
      </NavLink>
    </>
  );
};

export default Features;
