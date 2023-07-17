import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setViewLS } = useContext(AppContext);
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email().required("Please Enter your Email"),
    password: yup
      .string()
      .required("Please enter your password")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Please enter your correct password"
      ),
  });

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    reset();
    try {
      const result = await axios.post("http://127.0.0.1:5000/login", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setViewLS(localStorage.setItem("users", JSON.stringify(result.data)));
      if (result.status === 200) {
        navigate("/");
        toast.success("User successfully Login", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }

      // setTimeout(() => {
      //   document.location.reload();
      // }, 100);
    } catch (error) {
      if (error) {
        toast.warning("Please enter your currect email or password", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  },[]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control from-ctr"
            id="floatingInput"
            placeholder="name@example.com"
            autoComplete="off"
            {...register("email")}
          />
          <label htmlFor="floatingInput">
            <span style={{ fontSize: "18px" }}>Email Address</span>
          </label>
          <p style={{ color: "red" }}>{errors.email?.message}</p>
        </div>

        <div className="form-floating">
          <input
            type={passwordShown ? "text" : "password"}
            className="form-control from-ctr"
            id="floatingPassword"
            placeholder="Password"
            autoComplete="off"
            {...register("password")}
          />
          <label htmlFor="floatingPassword" style={{ fontSize: "18px" }}>
            Password
          </label>
          <p style={{ color: "red" }}>{errors.password?.message}</p>
        </div>

        <div className="d-flex justify-content-between">
          <div className="form-check">
            <input
              className="form-check-input border-secondary"
              type="checkbox"
              value=""
              onClick={togglePassword}
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Show Password
            </label>
          </div>
          <div>
            <a href="forgot.html" style={{ textDecoration: "none" }}>
              Forgot password?
            </a>
          </div>
        </div>

        <button className="btn form-control btn-login" type="submit">
          Log in
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

export default Login;
