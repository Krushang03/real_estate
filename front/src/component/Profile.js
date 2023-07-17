// import React, { useEffect, useState } from "react";
import "../Style/Profile.css";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";

const Profile = () => {
  const { viewls, setViewLS } = useContext(AppContext);

  const navigate = useNavigate();
  //   let userdetails = JSON.parse(localStorage.getItem("users"));

  const Logout = () => {
    // setViewLS(viewls);
    setViewLS(localStorage.removeItem("users"));
    navigate("/");
  };

  //   let userdetails = JSON.parse(localStorage.getItem("users"));

  //   const Logout = () => {
  //     localStorage.removeItem("users");
  //     // setTimeout(() => {
  //     //   window.location.reload(false);
  //     // }, 100);

  //     const loggedInUser = JSON.parse(localStorage.getItem("users"));
  //     if (!loggedInUser) {
  //       navigate("/");
  //     }
  //   };

  return (
    <>
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-info dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <FaUser style={{ fontSize: "14px" }} />
        </button>
        <ul className="dropdown-menu">
          <li className="dropdown-item d-flex justify-content-evenly">{viewls?.username}</li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <button
            type="button"
            onClick={Logout}
            className="btn btn-danger d-flex mx-auto swapbtn"
          >
            Logout
          </button>
        </ul>
      </div>
    </>
  );
};
export default Profile;
