import { NavLink } from "react-router-dom";
import "../Style/Header.css";
import { FaHome } from "react-icons/fa";
import Profile from "./Profile";
import { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import { toast } from "react-toastify";

const Header = () => {
  //   const [showheader, setShowHeader] = useState();
  //   useEffect(() => {
  //     setShowHeader(JSON.parse(localStorage.getItem("users")));
  //   }, []);

  const { viewls, setViewLS } = useContext(AppContext);
  useEffect(() => {
    const timer = setTimeout(() => {
      setViewLS(JSON.parse(localStorage.getItem("users")));
    }, 100);
    return(()=> {
      clearTimeout(timer);
    })
  }, [viewls]);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ background: "rgba(23,38,86,0.9)" }}
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
              {viewls ? (
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
            {viewls ? (
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
