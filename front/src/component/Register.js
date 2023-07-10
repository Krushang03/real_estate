import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from "axios";


const Register = () => {

    const schema = yup.object().shape({
        username: yup.string().min(4, 'Please Enter your username and it must be at least 4 characters ').required(),
        email: yup.string().email().required('Please Enter your Email'),
        password: yup
            .string()
            .required("Please enter your password")
            .matches(
                /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                "Password must contain at least 8 characters, one uppercase, one number and one special case character"            ),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null], "password does not match").required(""),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data);
        axios
            .post("http://127.0.0.1:5000/register", data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com"
                        autoComplete="off"
                        {...register("username")}
                         />
                    <label htmlFor="floatingInput" style={{ fontSize: '18px' }}>Username</label>
                    <p style={{ color: 'red' }}>{errors.username?.message}</p>
                </div>

                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                        autoComplete="off"
                        {...register("email")}
                         />
                    <label htmlFor="floatingInput" style={{ fontSize: '18px' }}>Email Address</label>
                    <p style={{ color: 'red' }}>{errors.email?.message}</p>
                </div>

                <div className="form-floating mb-3">
                    <input type={passwordShown ? "text" : "password"} className="form-control" id="floatingInput" placeholder="name@example.com"
                        autoComplete="off"
                        {...register("password")}
                         />
                    <label htmlFor="floatingInput" style={{ fontSize: '18px' }}>Password</label>
                    <p style={{ color: 'red' }}>{errors.password?.message}</p>
                </div>

                <div className="form-floating mb-3">
                    <input type={passwordShown ? "text" : "password"} className="form-control" id="floatingInput" placeholder="name@example.com"
                        autoComplete="off"
                        {...register("confirmPassword")}
                         />
                    <label htmlFor="floatingInput" style={{ fontSize: '18px' }}>Confirm Password</label>
                    <p style={{ color: 'red' }}>{errors.confirmPassword?.message}</p>
                </div>

                <div className="form-check">
                    <input className="form-check-input border-secondary" type="checkbox" value="" onClick={togglePassword} id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Show Password
                    </label>
                </div>
                <button className="btn form-control btn-login" type="submit">Register</button>
            </form>
        </>
    )
}

export default Register
