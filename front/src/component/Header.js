import { NavLink } from "react-router-dom";
import "../Style/Header.css";
import { FaHome } from "react-icons/fa";
import Profile from "./Profile";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const { refresh, userToken } = useSelector((state) => state.auth);

  const userDetail = JSON.parse(localStorage.getItem("userInfo"));
  useEffect(() => {
    localStorage.getItem("userInfo");
  }, [userToken, refresh]);
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ background: "rgba(22,22,22)" }}
      >
        <div className="container-fluid">
          <NavLink
            className="navbar-brand d-flex align-items-center"
            id="logotext"
            to="./"
          >
            <FaHome /> <span>RealEstate</span>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <NavLink className="nav-link" to="./">
                  <span
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                  >
                    Home
                  </span>
                </NavLink>
              </li>
              {userDetail ? (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="./services">
                      <span
                        data-bs-toggle="collapse"
                        data-bs-target=".navbar-collapse.show"
                      >
                        Services
                      </span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="./fetures">
                      <span
                        data-bs-toggle="collapse"
                        data-bs-target=".navbar-collapse.show"
                      >
                        Features
                      </span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="./about">
                      <span
                        data-bs-toggle="collapse"
                        data-bs-target=".navbar-collapse.show"
                      >
                        About
                      </span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="./contact">
                      <span
                        data-bs-toggle="collapse"
                        data-bs-target=".navbar-collapse.show"
                      >
                        Contact Us
                      </span>
                    </NavLink>
                  </li>
                </>
              ) : (
                " "
              )}
            </ul>
            {userDetail ? (
              <Profile />
            ) : (
              <NavLink className="nav-link " to="/userauth">
                <button type="button" className="btn btn-outline-light swapbtn">
                  <span
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                  >
                    Login
                  </span>
                </button>
              </NavLink>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
