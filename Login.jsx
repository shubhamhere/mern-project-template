import React, { useState } from "react";
import login from "./images/login.png";
import { NavLink, useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      window.alert("Login Successful");
      history.push("/");
    }
  };

  return (
    <>
      <section className="sign-in">
        <div className="container mt-5 ">
          <div className="signin-content  ">
            <h2 className="title-sign mb-2 ">Signin</h2>
            <div className="signin-image">
              <figure>
                <img src={login} alt="loginimage" id="login-image" />
              </figure>
              <NavLink to="/signup" className="signup-image-link">
                Create an Account
              </NavLink>
            </div>
            <div className="signin-form">
              <form method="POST" className="sign-form" id="sign-form">
                <div className="form-group">
                  <label htmlFor="email">
                    <i class="zmdi zmdi-email"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    placeholder="Enter Your Email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">
                    <i class="zmdi zmdi-lock"></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    placeholder="Enter Your Password"
                  />
                </div>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signin"
                    id="signin"
                    className="form-submit"
                    value="Signin"
                    onClick={loginUser}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
