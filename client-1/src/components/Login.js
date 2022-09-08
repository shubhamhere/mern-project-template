import React, { useContext, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { UserContext } from "../App";
const Login = () => {

     const {state,dispatch} = useContext(UserContext)

    const history = useHistory();
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
  
    const loginUser = async (e) => {
      e.preventDefault();
  
      const res = await fetch("/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email, 
          password,
        }),
      });
      const data = res.json();
  
      if (res.status === 400 || !data) {
        window.alert("Invalid Credentials");
      } else {
          dispatch({type:"USER",payload:true})//type mtlb jo action perform karne jaa rahe hai..  payload mtlb extra information (all will be checked in Usereducer.js) from where we will change its state
        window.alert("Login Successful");
        history.push("/");
      }
    };
  
    return (
        <>
            <div className="login-form">
                <form method="POST">
                    <h2 className="text-center">Log in</h2>
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <span className="fa fa-user"></span>
                                </span>
                            </div>
                            <input type="email" className="form-control" name="email" placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setemail(e.target.value)}
                                required="required" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fa fa-lock"></i>
                                </span>
                            </div>
                            <input type="password" className="form-control" name="password" placeholder="Enter Password"
                                value={password}
                                onChange={(e) => setpassword(e.target.value)}
                                required="required" />
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary login-btn btn-block"
                            name="signin"
                            value="Signin"
                            onClick={loginUser}
                        >Log in</button>
                    </div>
                    <div className="clearfix">
                        <label className="float-left form-check-label"><input type="checkbox" /> Remember me</label>
                        <NavLink to="#" className="float-right">Forgot Password?</NavLink>
                    </div>
                    <div className="or-seperator"><i>or</i></div>
                    <p className="text-center">Login with your social media account</p>
                    <div className="text-center social-btn">
                        <NavLink to="/" className="btn btn-secondary"><i className="fa fa-facebook"></i>&nbsp; Facebook</NavLink>
                        <NavLink to="/" className="btn btn-info"><i className="fa fa-twitter"></i>&nbsp; Twitter</NavLink>
                        <NavLink to="/" className="btn btn-danger"><i className="fa fa-google"></i>&nbsp; Google</NavLink>
                    </div>
                </form>
                <p className="text-center text-muted small">Don't have an account? <NavLink to="/signup">Sign up here!</NavLink></p>
            </div>
        </>
    )
}

export default Login
