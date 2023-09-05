import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { single_prop } from '../store/actions/singlepropertyaction';
import { useParams } from 'react-router-dom'

const SingleProperty = () => {
  const dispatch = useDispatch()
  const { singleuser } = useSelector((state) => state.singleprop);
  const [item, setitem] = useState([])
  const { id } = useParams();

  useEffect(() => {
    dispatch(single_prop(id));
  }, []);

  useEffect(() => {
    if (singleuser) {
      setitem(singleuser)
    }
  }, [singleuser])
  const img = [item.photo];
  console.log(img);
  return (
    <div>
      {img.length > 0 ?
        img.map((e, i) => {
          return (
            <>
              <img src={e} alt="image_property" key={i} className='img-fluid' />
            </>
          )
        })
        : ""
      }
      <p> name : {item.Holder_name}</p>
      <p> area name : {item.area_name}</p>
      <p> state name : {item.state_name}</p>
      <p> city name : {item.city_name}</p>
      <p> country name : {item.country_name}</p>
      <p> bhk : {item.bhk}</p>
      <p> dis : {item.dis}</p>
      <p> mobile_no : {item.mobile_no}</p>
      <p> house_no : {item.house_no}</p>
      <p> furniture : {item.furniture}</p>
      <p> price : {item.price}</p>
      <p> rent_or_sell : {item.rent_or_sell}</p>
      <p> prop_size : {item.prop_size}</p>
    </div>
  )
}

export default SingleProperty
