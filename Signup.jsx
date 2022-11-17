import React, { useState } from "react";
import register from "../components/images/register.png";
import { NavLink, useHistory } from "react-router-dom";
const Signup = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  const handleInputs = (e) => {
    console.log(e);
    // name = e.target.name;
    // value = e.target.value;
    let { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, phone, work, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });

    const data = await res.json();

    if (data.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successful");
      console.log("valid Registration");
      history.push("/login");
    }
  };

  return (
    <>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content ">
            <h2 className="form-title">Signup</h2>
            <form method="post" className="register-form" id="register-form">
              <div className="form-group">
                <label htmlFor="name">
                  <i class="zmdi zmdi-accounts"></i>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="off"
                  value={user.name}
                  onChange={handleInputs}
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  <i class="zmdi zmdi-email"></i>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={user.email}
                  onChange={handleInputs}
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">
                  <i class="zmdi zmdi-phone-in-talk"></i>
                </label>
                <input
                  type="phone"
                  name="phone"
                  id="phone"
                  autoComplete="off"
                  value={user.phone}
                  onChange={handleInputs}
                  placeholder="Enter Your Phone Number"
                />
              </div>
              <div className="form-group">
                <label htmlFor="work">
                  <i class="zmdi zmdi-slideshow"></i>
                </label>
                <input
                  type="text"
                  name="work"
                  id="work"
                  autoComplete="off"
                  value={user.work}
                  onChange={handleInputs}
                  placeholder="Enter Your Profession"
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
                  value={user.password}
                  onChange={handleInputs}
                  placeholder="Enter Your Password"
                />
              </div>
              <div className="form-group">
                <label htmlFor="cpassword">
                  <i class="zmdi zmdi-lock"></i>
                </label>
                <input
                  type="password"
                  name="cpassword"
                  id="cpassword"
                  autoComplete="off"
                  value={user.cpassword}
                  onChange={handleInputs}
                  placeholder="Confirm Your Password"
                />
              </div>
              <div className="form-group form-button">
                <input
                  type="submit"
                  name="signup"
                  id="signup"
                  className="form-submit"
                  value="Register"
                  onClick={PostData}
                />
              </div>
            </form>
            <div className="signup-image">
              <figure>
                <img src={register} alt="register" />
              </figure>
              <NavLink to="/Login" className="alreadyreg">
                I am already registered
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
