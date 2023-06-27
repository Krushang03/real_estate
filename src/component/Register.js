import React from 'react'

const Register = () => {
    return (
        <>
            <form action="">
                <input type="text" placeholder="username" class="form-control" />
                {/* <input type="email" placeholder="Email" class="form-control" /> */}
                {/* <input type="password" class="form-control" placeholder="Password" /> */}
                <input type="password" class="form-control" placeholder="Confirm Password" />
                <button class="btn form-control btn-login" type="submit">Register</button>

            </form>
        </>
    )
}

export default Register