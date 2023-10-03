import React from 'react'
import { my_prop_Action } from '../store/actions/myProperty'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"
import { del_prop_action } from '../store/actions/delPropAction';
import { useForm } from "react-hook-form";

const MyProperty = () => {
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
    reset,
  } = useForm({
  });

  const { usersproppendding } = useSelector((state) => state.myprop);
  const { U_id, refresh } = useSelector((state) => state.addprop);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [uid, setuid] = useState()
  const [mypropdata, setmypropdata] = useState();

  useEffect(() => {
    const a = "pending"
    dispatch(my_prop_Action(a));
  }, [refresh]);

  useEffect(() => {
    if (usersproppendding) {
      setmypropdata(usersproppendding)
    }
  }, [usersproppendding])

  const deletePropetry = (id) => {
    const ids = {
      id
    }
    const update = mypropdata.filter((val) => val.p_id !== id)
    setmypropdata(update)
    dispatch(del_prop_action(ids))
  }
  const mypropcng = (e) => {
    dispatch(my_prop_Action(e));
  }
  return (
    <div>
      <div className="col-md-12">
        <div className="row d-flex justify-content-evenly gy-3 m-5">
        <h1 className='d-flex justify-content-center'>My Properties</h1>
          <div className="d-flex justify-content-center align-items-center">
            <input
              type="radio"
              id=""
              value="pending"
              defaultChecked
              className="form-radio ms-2"
              {...register("myproperty")}
              onChange={(e) => mypropcng(e.target.value)}
            />
            <label
              className="form-check-label ms-2"
              htmlFor="flexRadioDefault2"
            >
              Pending
            </label>
            <input
              type="radio"
              id=""
              value="verified"
              className="form-radio ms-4"
              {...register("myproperty")}
              onChange={(e) => mypropcng(e.target.value)}
            />
            <label
              className="form-check-label ms-2"
              htmlFor="flexRadioDefault2"
            >
              Verified
            </label>
            <input
              type="radio"
              id=""
              value="rejected"
              className="form-radio ms-4"
              {...register("myproperty")}
              onChange={(e) => mypropcng(e.target.value)}
            />
            <label
              className="form-check-label ms-2"
              htmlFor="flexRadioDefault2"
            >
              Rejected
            </label>
          </div>
          <hr />
          {mypropdata?.length > 0 ?
            mypropdata.map((curval, index) => (
              <>
                <div className="col-lg-3 col-md-6 col-sm-6 ">
                  <div class="card p-3" >
                    <NavLink to={`/myproperty/${curval.p_id}`} style={{ textDecoration: "none", color: "black" }}>

                      <div style={{ height: "200px", width: "100%" }}>
                        <img src={curval.photo[0]} class="card-img-top img-fluid" alt="Product" style={{ height: "200px", width: "100%", objectFit: "contain" }} />
                      </div>


                      <div class="card-body px-1  pb-0 ">
                        <div className="d-flex justify-content-between">
                          <p class="">Price : {curval.price}</p>
                          <p class="product_brand mb-0">BHK : {curval.bhk}</p>
                        </div>
                        <p>Property Size(sqrft) : {curval.prop_size}</p>
                        <p>State Name : {curval.state_name}</p>
                        <p>City Name : {curval.city_name}</p>
                      </div>
                    </NavLink>
                    <button className="btn btn-danger" onClick={() => {
                      deletePropetry(curval.p_id)

                    }}>remove</button>
                  </div>
                </div>
              </>
            )
            )
            : ("")
          }
        </div>

      </div>
    </div>
  )
}

export default MyProperty
