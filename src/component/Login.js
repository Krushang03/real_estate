import React from 'react'

const Login = () => {
  return (
  
        
                       
                       <form action="">
                               <input type="email" placeholder="Email" class="form-control"/>
                               <input type="password" class="form-control" placeholder="Password"/>
                               <div class="block">
                                   <div class="d-flex flex-row">
                                       <input type="checkbox" name="" id=""/>
                                       <p>Remember me</p>
                                   </div>
                                   <a href="forgot.html">Forgot password?</a>
                               </div>
                               
                               <button class="btn form-control btn-login" type="submit">Log in</button> 
                        
                        </form>
    
  )
}

export default Login