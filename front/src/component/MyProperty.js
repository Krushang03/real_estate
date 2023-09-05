import React from 'react'
import { my_prop } from '../store/actions/myProperty'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const MyProperty = () => {
    const { loading } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(my_prop());
      }, []);
    
      // useEffect(() => {
      //   if (getusers) {
      //     setitem(getusers)
      //   }
      // }, [my_prop])
  return (
    <div>
      
    </div>
  )
}

export default MyProperty
