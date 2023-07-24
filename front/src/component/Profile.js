import "../Style/Profile.css";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ThreeDots } from "react-loader-spinner";
import { Logout } from "../store/Slices/auth";
import { useDispatch } from "react-redux";


const Profile = () => {
  const { loading } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userDetail = JSON.parse(localStorage.getItem("userInfo"));

  const LogoutUser = () => {
    navigate("/userauth");
    dispatch(Logout());
  };

  return (
    <>
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-outline-light dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <FaUser style={{ fontSize: "14px" }} />
        </button>
        <ul className="dropdown-menu">
          <li className="dropdown-item d-flex justify-content-evenly">
            {userDetail?.username}
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <button
            type="button"
            onClick={LogoutUser}
            className="btn btn-danger d-flex mx-auto swapbtn"
          >
            {loading ? (
              <ThreeDots
                height="30"
                width="50"
                radius="9"
                color="#0d6efd"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              />
            ) : (
              "Logout"
            )}
          </button>
        </ul>
      </div>
    </>
  );
};
export default Profile;
