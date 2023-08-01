import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import "../Style/addproperty.css";

const schema = yup.object({
  Holder_name: yup
    .string()
    // .matches(/^\S*$/, "No whitespaces allowed")
    .required("please enter your name"),
  mobile_no: yup
    .number()
    .typeError("please enter your contact number")
    .required(),
  house_no: yup.string().required("please enter house number and society name"),
  area_name: yup.string().required("please enter area name"),
  city_name: yup.string().required("please enter city"),
  state_name: yup.string().required("please select state"),
  sell_or_rent: yup.string().required("please select one of the option"),
  pin_code: yup
    .number()
    .typeError("please enter pincode")
    .min(6)
    .max(6)
    .required(),
  bhk: yup.number().typeError("please enter your bhk").required(),
  prop_size: yup.number().typeError("please enter house size").required(),
  price: yup.number().typeError("please enter price").required(),
  furniture: yup.string().required("please select one of the option"),
  dis: yup.string(),
});

const Addproperty = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      navigate("/userauth");
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = () => {
    reset();
    console.log("huh");
  };
  return (
    <>
      <div className="bgcolor ">
        <div className="container my-4">
          <div className="row block">
            <div className="col-10 mx-auto">
              <form
                className="row g-3 justify-content-center"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="col-md-5">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                      {...register("Holder_name")}
                    />
                    <label for="floatingInput">Name</label>
                  </div>
                  <p className="errormsg">{errors.Holder_name?.message}</p>
                </div>
                <div className="col-md-5">
                  <div className="form-floating mb-3">
                    <input
                      type="int"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                      {...register("mobile_no")}
                    />
                    <label for="floatingInput">Contact No.</label>
                  </div>
                  <p className="errormsg">{errors.mobile_no?.message}</p>
                </div>
                <div className="col-10">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="1234 Main St"
                      {...register("house_no")}
                    />
                    <label for="floatingInput">
                      Home/Flate no./Society Name
                    </label>
                  </div>
                  <p className="errormsg">{errors.house_no?.message}</p>
                </div>
                <div className="col-10">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Apartment, studio, or floor"
                      {...register("area_name")}
                    />
                    <label for="floatingInput">Street/Area</label>
                  </div>
                  <p className="errormsg">{errors.area_name?.message}</p>
                </div>
                <div className="col-md-4">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="city"
                      {...register("city_name")}
                    />
                    <label for="floatingInput">City</label>
                  </div>
                  <p className="errormsg">{errors.city_name?.message}</p>
                </div>
                <div class="col-md-3">
                  <div class="form-floating">
                    <select
                      class="form-select"
                      id="floatingSelect"
                      aria-label="Floating label select example"
                    >
                      <option value="">Select State</option>
                      <option value="1">gujarat</option>
                      <option value="2">gujarat</option>
                      <option value="3">gujarat</option>
                    </select>
                    <label for="floatingSelect">State</label>
                  </div>
                  <p className="errormsg2">{errors.state_name?.message}</p>
                </div>
                <div className="col-md-3">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Zip"
                      {...register("pin_code")}
                    />
                    <label for="floatingInput">Zip</label>
                  </div>
                  <p className="errormsg">{errors.pin_code?.message}</p>
                </div>
                <div className="col-md-3">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="BHK"
                      {...register("bhk")}
                    />
                    <label for="floatingInput">BHK</label>
                  </div>
                  <p className="errormsg">{errors.bhk?.message}</p>
                </div>
                <div className="col-md-4">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      {...register("prop_size")}
                    />
                    <label for="floatingInput">Property Area(sqft)</label>
                  </div>
                  <p className="errormsg">{errors.prop_size?.message}</p>
                </div>
                <div className="col-md-3">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      {...register("price")}
                    />
                    <label for="floatingInput">Price</label>
                  </div>
                  <p className="errormsg">{errors.price?.message}</p>
                </div>
                <div className="col-md-10">
                  <p>Furniture</p>
                  <div className="align-items-center">
                    <input
                      type="radio"
                      id=""
                      className="form-radio ms-2"
                      {...register("furniture")}
                    />
                    <label
                      className="form-check-label ms-2"
                      htmlFor="flexRadioDefault2"
                      value="Fully Furnished"
                    >
                      Fully Furnished
                    </label>
                    <input
                      type="radio"
                      id=""
                      className="form-radio ms-2"
                      {...register("furniture")}
                    />
                    <label
                      className="form-check-label ms-2"
                      htmlFor="flexRadioDefault2"
                      value="Semi Furnished"
                    >
                      Semi Furnished
                    </label>
                    <input
                      type="radio"
                      id=""
                      className="form-radio ms-2"
                      {...register("furniture")}
                    />
                    <label
                      className="form-check-label ms-2"
                      htmlFor="flexRadioDefault2"
                      value="Un-Furnished"
                    >
                      Un-Furnished
                    </label>
                  </div>
                  <p className="errormsg2">{errors.furniture?.message}</p>
                </div>
                <div className="col-md-10">
                  <p>Images</p>
                  <label className="btn btn-outline-dark" htmlFor="uploadimg">
                    Upload Images
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="uploadimg"
                    placeholder="BHK"
                    style={{ display: "none" }}
                  />
                </div>
                <div className="col-md-10">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      id="floatingTextarea2"
                      {...register("dis")}
                    ></textarea>
                    <label for="floatingTextarea2">Discription</label>
                  </div>
                  <p className="errormsg">{errors.dis?.message}</p>
                </div>
                <div className="col-md-10">
                  <p>Property For</p>
                  <div className="align-items-center">
                    <input
                      type="radio"
                      id=""
                      className="form-radio ms-2"
                      {...register("sell_or_rent")}
                    />
                    <label
                      className="form-check-label ms-2"
                      htmlFor="flexRadioDefault2"
                      value="Rent"
                    >
                      Rent
                    </label>
                    <input
                      type="radio"
                      id=""
                      className="form-radio ms-2"
                      {...register("sell_or_rent")}
                    />
                    <label
                      className="form-check-label ms-2"
                      htmlFor="flexRadioDefault2"
                      value="Sell"
                    >
                      Sell
                    </label>
                  </div>
                  <p className="errormsg2">{errors.sell_or_rent?.message}</p>
                </div>

                <div className="col-10">
                  <button type="submit" className="btn btn-lg btn-success">
                    Add Property
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addproperty;
