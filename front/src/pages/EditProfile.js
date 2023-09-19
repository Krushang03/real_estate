import { useForm } from "react-hook-form";
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetProfileAction } from '../store/actions/profilegetupdate'
import { UpdateProfileAction } from '../store/actions/profilegetupdate'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";



const EditProfile = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(),
    });
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { profiledata } = useSelector((state) => state.getupdateprofile)
    const [profileitem, setprofileitem] = useState()
    const [img, setimg] = useState()

    const newData = (e) => {
        setprofileitem({ ...profileitem, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        dispatch(GetProfileAction())
    }, [])

    useEffect(() => {
        if (profiledata) {
            setprofileitem(profiledata)
        }
    }, [profiledata])

    useEffect(() => {
        setprofileitem({ ...profileitem, photo: img });
    }, [img])

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
            setimg(results);
        });
    }

    const onSubmit = (data) => {

    }
    const updateprofiledata = () => {
        if (profileitem) {
            dispatch(UpdateProfileAction(profileitem))
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4 col-md-12">
                    <label htmlFor="floatingInput" className="btn btn-outline-dark">Upload Profile</label>
                    <input
                        type="file"
                        className="form-control from-ctr"
                        id="floatingInput"
                        placeholder="name@example.com"
                        autoComplete="off"
                        {...register("photo")}
                        onChange={uploadimages}
                        style={{ display: "none" }}
                    />
                    {
                        img ?
                            <img src={img} alt="profile image" className="img-fluid img-thumbnail mt-4 mb-2 img-size" />
                            :
                            <img src={profileitem?.photo} alt="profile image" className="img-fluid img-thumbnail mt-4 mb-2 img-size" />
                    }
                </div>

                <div className="form-floating mb-4">
                    <input
                        type="text"
                        className="form-control from-ctr"
                        id="floatingInput"
                        placeholder="name@example.com"
                        autoComplete="off"
                        defaultValue={profileitem && profileitem?.Username}
                        {...register("username")}
                        onChange={profileitem && newData}
                    />
                    <label htmlFor="floatingInput" style={{ fontSize: "18px" }}>
                        Username
                    </label>
                </div>

                <div className="form-floating mb-4">
                    <input
                        type="email"
                        className="form-control from-ctr"
                        id="floatingInput"
                        placeholder="name@example.com"
                        autoComplete="off"
                        defaultValue={profileitem && profileitem?.email}
                        {...register("email")}
                        onChange={profileitem && newData}
                    />
                    <label htmlFor="floatingInput" style={{ fontSize: "18px", paddingLeft: "20px" }}>
                        Email
                    </label>
                </div>

                <div className="form-floating mb-4">
                    <input
                        type="int"
                        maxLength={10}
                        minLength={10}
                        className="form-control from-ctr"
                        id="floatingInput"
                        placeholder="name@example.com"
                        autoComplete="off"
                        defaultValue={profileitem && profileitem?.mobile_no}
                        {...register("mobile_no")}
                        onChange={profileitem && newData}
                    />
                    <label htmlFor="floatingInput" style={{ fontSize: "18px", paddingLeft: "20px" }}>
                        Phone No.
                    </label>
                </div>
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close" onClick={updateprofiledata} >Save changes</button>
            </form>
        </div>
    )
}

export default EditProfile
