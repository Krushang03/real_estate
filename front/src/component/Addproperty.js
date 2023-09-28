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
import { add_prop } from "../store/actions/addProperty";
import { FaTrash } from "react-icons/fa";
import axios from "axios";

const schema = yup.object({
  Holder_name: yup
    .string()
    // .matches(/^\S*$/, "No whitespaces allowed")
    .required("please enter your name"),
  mobile_no: yup
    .string()
    .required("please enter your contact number")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Must be exactly 10 digits")
    .max(10, "Must be exactly 10 digits"),
  house_no: yup.string().required("please enter house number and society name"),
  area_name: yup.string().required("please enter area name"),
  city_name: yup.string().required("please select city"),
  prop_type: yup.string().required("please select property type"),
  state_name: yup.string().required("please select state"),
  country_name: yup.string().required("please select country"),
  sell_or_rent: yup.string().required("please select one of the option"),
  bhk: yup.number().typeError("please enter your bhk").required(),
  prop_size: yup.number().typeError("please enter house size").required(),
  price: yup.number().typeError("please enter price").required(),
  furniture: yup.string().required("please select one of the option"),
  dis: yup.string().required("please provide discription for property"),
});

const Addproperty = () => {
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const fd = new FormData();
  var empty = [];
  const [images, setimages] = useState([]);
  const [photos, setphotos] = useState([]);
  const [imgerr, setimgerr] = useState();
  const [imglenerr, setimglenerr] = useState();


  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { refresh, loading } = useSelector((state) => state.addprop);

  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      navigate("/userauth");
    }
  }, []);

  const onReset = () => {
    //   setdata(empty)
    setimages(empty);
    setphotos(empty);
    //   seterrorHolder_name("")
    //   seterrormobile_no("")
    //   seterrorhouse_no("")
    //   seterrorarea_name("")
    //   seterrorcountry_name("")
    //   seterrorcity_name("")
    //   seterrorstate_name("")
    //   seterrorbhk("")
    //   seterrorprop_size("")
    //   seterrorprice("")
    setimgerr("")
    setimglenerr("")
    //   seterrorfurniture("")
    //   seterrorprop_type("")
    //   seterrordis("")
    //   seterrorsell_or_rent("")
  };

  useEffect(() => {
    setimages(empty);
  }, [refresh]);

  useEffect(() => {
    if (images.length > 0) {
      const rmv = "";
      setimgerr(rmv);
      setimglenerr(rmv);
    }
  }, [images]);

  const uploadimages = (e) => {
    const files = e.target.files;
    const imagePromises = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file) {
        const reader = new FileReader();
        imagePromises.push(
          new Promise((resolve) => {
            reader.onload = (e) => {
              resolve(e.target.result);
            };
            reader.readAsDataURL(file);
          })
        );
      }
    }

    Promise.all(imagePromises).then((results) => {
      setimages(results);
    });

    for (let i = 0; i < files.length; i++) {
      const file = Array.from(files)
      setphotos(file)
    }


  }

  const onSubmit = (data) => {
    fd.append("Holder_name", data.Holder_name);
    fd.append("mobile_no", data.mobile_no);
    fd.append("house_no", data.house_no);
    fd.append("area_name", data.area_name);
    fd.append("city_name", data.city_name);
    fd.append("prop_type", data.prop_type);
    fd.append("state_name", data.state_name);
    fd.append("country_name", data.country_name);
    fd.append("sell_or_rent", data.sell_or_rent);
    fd.append("bhk", data.bhk);
    fd.append("prop_size", data.prop_size);
    fd.append("price", data.price);
    fd.append("furniture", data.furniture);
    fd.append("dis", data.dis);
    // fd.append("statuss", "pending");
    // fd.append("prop_type", "true");
    Array.from(photos).map((file) => {
      fd.append("photo", file)
    })

    console.log(fd, "fd");
    if (photos.length > 0) {
      onReset();
      setimages(empty);
      dispatch(add_prop(fd));
    }

  };

  const validation = () => {
    if (images.length === 0) {
      const err2 = "You need to provide an image";
      setimgerr(err2);
    }
  };



  //delete img from preview
  const deleteimgs = (delitem, index) => {
    const handleDelete = images.filter((item, id) => item !== delitem);
    setimages(handleDelete);
    photos.splice(delitem, 1)
  };



  useEffect(() => {
    worldDataApi();
  }, []);

  const [worlddata, setWorlddata] = useState([]);
  const [state, setstate] = useState([]);
  const [city, setcity] = useState([]);

  //world data api
  const worldDataApi = async () => {
    const result = await axios.get(
      `https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json`,

      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setWorlddata(result.data);
    return result.data;
  };
  const country = [...new Set(worlddata.map((item) => item.country))];

  const handleState = (e) => {
    let allstate = worlddata.filter((val) => val.country === e);
    let statename = [...new Set(allstate.map((ele) => ele.subcountry))];
    setstate(statename);
  };
  const handleCity = (e) => {
    let allcity = worlddata.filter((val) => val.subcountry === e);
    let cityname = [...new Set(allcity.map((ele) => ele.name))];
    setcity(cityname);
  };

  return (
    <>
      <div
        className="bgcolor "
        style={{ backgroundColor: "rgba(243, 243, 244, 1)" }}
      >
        <div className="container py-4">
          <div className="row block">
            <div className="col-10 mx-auto">
              <form
                className="row g-3 justify-content-center"
                onSubmit={handleSubmit(onSubmit)}
                encType="multipart/form-data"
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
                    <label htmlFor="floatingInput">Name</label>
                  </div>
                  {errors && <p className="errormsg">{errors.Holder_name?.message}</p>}
                </div>
                <div className="col-md-5">
                  <div className="form-floating mb-3">
                    <input
                      type="number"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                      maxLength={10}
                      {...register("mobile_no")}
                    />
                    <label htmlFor="floatingInput">Contact No.</label>
                  </div>
                  {errors && <p className="errormsg">{errors.mobile_no?.message}</p>}
                </div>
                <div className="col-md-10">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="1234 Main St"
                      {...register("house_no")}
                    />
                    <label htmlFor="floatingInput">
                      Home/Flate no./Society Name
                    </label>
                  </div>
                  {errors && <p className="errormsg">{errors.house_no?.message}</p>}
                </div>
                <div className="col-md-10">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Apartment, studio, or floor"
                      {...register("area_name")}
                    />
                    <label htmlFor="floatingInput">Street/Area</label>
                  </div>
                  {errors && <p className="errormsg">{errors.area_name?.message}</p>}
                </div>
                <div className="col-md-10">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="form-floating">
                        <select
                          className="form-select"
                          id="floatingSelect"
                          aria-label="Floating label select example"
                          {...register("country_name", {
                            onChange: (e) => [handleState(e.target.value)]
                          })}
                        >
                          <option value="" defaultValue>
                            Select Country
                          </option>

                          {country.map((ele) => {
                            return (
                              <>
                                <option value={ele}>{ele}</option>
                              </>
                            );
                          })}
                        </select>
                        <label htmlFor="floatingSelect">Country</label>
                      </div>
                      <p className="errormsg2">
                        {errors && <p className="errormsg mt-1">{errors.country_name?.message}</p>}
                      </p>
                    </div>

                    <div className="col-md-4 mb-3">
                      <div className="form-floating">
                        <select
                          className="form-select"
                          id="floatingSelect"
                          aria-label="Floating label select example"
                          {...register("state_name", {
                            onChange: (e) => handleCity(e.target.value),
                          })}
                        >
                          <option value="" defaultValue>
                            Select State
                          </option>
                          {state.length > 0 ? state.map((val) => {
                            return (
                              <>
                                <option value={val}>{val}</option>
                              </>
                            );
                          }) : <option value="" style={{ color: "red" }} disabled >please select country</option>}
                        </select>
                        <label htmlFor="floatingSelect">State</label>
                      </div>
                      {errors && <p className="errormsg mt-1">{errors.state_name?.message}</p>}
                    </div>

                    <div className="col-md-4">
                      <div className="form-floating">
                        <select
                          className="form-select"
                          id="floatingSelect"
                          aria-label="Floating label select example"
                          {...register("city_name")}
                        >
                          <option value="" defaultValue >
                            Select City
                          </option>
                          {city.length > 0 ? city.map((val) => {
                            return (
                              <>
                                <option value={val}>{val}</option>
                              </>
                            );
                          }) : <option value="" style={{ color: "red" }} disabled >please select state</option>}

                        </select>
                        <label htmlFor="floatingSelect">city</label>
                      </div>
                      {errors && <p className="errormsg mt-1">{errors.city_name?.message}</p>}
                    </div>
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="form-floating mb-3">
                        <input
                          type="number"
                          className="form-control"
                          id="floatingInput"
                          placeholder="BHK"
                          {...register("bhk")}
                          name="bhk"
                        />
                        <label htmlFor="floatingInput">BHK</label>
                      </div>
                      {errors && <p className="errormsg">{errors.bhk?.message}</p>}
                    </div>

                    <div className="col-md-4">
                      <div className="form-floating mb-3">
                        <input
                          type="number"
                          className="form-control"
                          id="floatingInput"
                          placeholder="prop_size"
                          {...register("prop_size")}
                        />
                        <label htmlFor="floatingInput">
                          Property Area(sqft)
                        </label>
                      </div>
                      {errors && <p className="errormsg">{errors.prop_size?.message}</p>}
                    </div>

                    <div className="col-md-4">
                      <div className="form-floating mb-3">
                        <input
                          type="number"
                          className="form-control"
                          id="floatingInput"
                          {...register("price")}
                          placeholder="Price"
                        />
                        <label htmlFor="floatingInput">Price</label>
                      </div>
                      {errors && <p className="errormsg">{errors.price?.message}</p>}
                    </div>
                  </div>
                </div>
                <div className="col-md-10 ">
                  <div className="row d-flex align-items-center">
                    <div className="col-md-8 ">
                      <p>Furniture</p>
                      <div className="align-items-center mb-3">
                        <input
                          type="radio"
                          id=""
                          value="Fully Furnished"
                          className="form-radio ms-2"
                          {...register("furniture")}
                        />
                        <label
                          className="form-check-label ms-2"
                          htmlFor="flexRadioDefault2"
                        >
                          Fully Furnished
                        </label>
                        <input
                          type="radio"
                          id=""
                          value="Semi Furnished"
                          className="form-radio ms-2"
                          {...register("furniture")}
                        />
                        <label
                          className="form-check-label ms-2"
                          htmlFor="flexRadioDefault2"
                        >
                          Semi Furnished
                        </label>
                        <input
                          type="radio"
                          id=""
                          value="Un-Furnished"
                          className="form-radio ms-2"
                          {...register("furniture")}
                        />
                        <label
                          className="form-check-label ms-2"
                          htmlFor="flexRadioDefault2"
                        >
                          Un-Furnished
                        </label>
                        {errors && <p className="errormsg mt-1">{errors.furniture?.message}</p>}
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-floating">
                        <select
                          className="form-select"
                          id="floatingSelect"
                          aria-label="Floating label select example"
                          {...register("prop_type")}
                        >
                          <option value="" defaultValue >
                            Select type
                          </option>
                          <option value="Apartment">Apartment</option>
                          <option value="Commercial">Commercial</option>
                          <option value="Duplex">Duplex</option>
                          <option value="Full floor">Full floor</option>
                          <option value="Hotel apartment">Hotel apartment</option>
                          <option value="Pent house">Pent house</option>
                          <option value="Villa">Villa</option>

                        </select>
                        <label htmlFor="floatingSelect">Property Type</label>
                      </div>
                      {errors && <p className="errormsg mt-1">{errors.prop_type?.message}</p>}
                    </div>
                  </div>
                </div>

                <div className="col-md-10">
                  <p>Images</p>
                  <div className="d-flex align-items-center">
                    <label htmlFor="uploadimg" className="d-flex-align-items-center justify-content-center btn btn-outline-secondary col-12">Upload Properties images</label>
                    <input
                      accept=".jpg,.jpeg,.png"
                      multiple
                      type="file"
                      className="form-control"
                      id="uploadimg"
                      name="photoo"
                      onChange={(e) => [uploadimages(e)]}
                      style={{ display: "none" }}
                    />
                  </div>

                  {(imglenerr || imgerr) && (
                    <p style={{ color: "red" }}>
                      {imgerr || imglenerr}
                    </p>
                  )}
                </div>
                <div className="col-md-10">
                  <div className="row">
                    {images &&
                      images?.map((item, index) => {
                        return (
                          <>
                            <div
                              className="col-md-4 position-relative mb-4"
                              key={index}
                            >
                              <img
                                // src={item.image}
                                src={item}
                                alt="img-preview"
                                className="img-fluid"
                                style={{width:"250px",height:"200px"}}
                              />
  
                              <FaTrash
                                className="text-danger btn-trash"
                                style={{ cursor: "pointer" }}
                                // onClick={() => deleteimg(item.id)}
                                onClick={() => deleteimgs(item, index)}
                              />
                            </div>
                          </>
                        );
                      })

                    }
                  </div>
                </div>

                <div className="col-md-10">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      id="floatingTextarea2"
                      {...register("dis")}
                      placeholder="dis"
                    ></textarea>
                    <label htmlFor="floatingTextarea2">Discription</label>
                  </div>
                  {errors && <p className="errormsg mt-1">{errors.dis?.message}</p>}
                </div>
                <div className="col-md-10">
                  <p>Property For</p>
                  <div className="align-items-center">
                    <input
                      type="radio"
                      id=""
                      value="Rent"
                      className="form-radio ms-2"
                      {...register("sell_or_rent")}
                    />
                    <label
                      className="form-check-label ms-2"
                      htmlFor="flexRadioDefault2"
                    >
                      Rent
                    </label>
                    <input
                      type="radio"
                      id=""
                      value="Sell"
                      className="form-radio ms-2"
                      {...register("sell_or_rent")}
                    />
                    <label
                      className="form-check-label ms-2"
                      htmlFor="flexRadioDefault2"
                    >
                      Sell
                    </label>
                  </div>
                  {errors && <p className="errormsg mt-1">{errors.sell_or_rent?.message}</p>}
                </div>

                <div className="col-10">
                  <div className="d-flex justify-content-between">
                    <input
                      type="submit"
                      value="Add Property"
                      className="btn btn-lg btn-success"
                      onClick={validation}
                    >
                    </input>
                    <input
                      className="btn btn-danger"
                      type="reset"
                      onClick={() => [
                        clearErrors(),
                        onReset(),
                      ]}
                      value="Cancel"
                    />
                  </div>
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
