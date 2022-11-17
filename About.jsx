import React from "react";
import mohit from "./images/mohit.jpg";

const About = () => {
  return (
    <>
      <div className="container emp-profile">
        <form method="">
          <div className="row">
            <div className="col-md-4">
              <img src={mohit} alt="userimage" id="userimage" />
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>Elon Musk</h5>
                <h6>Engineer</h6>
                <p className="profile-rating mt-3 mb-5">
                  RANKINGS: <span> 1/10 </span>
                </p>

                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                    >
                      Timeline
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-2">
              <input
                type="submit"
                className="profile-edit-btn"
                name="btnAddMore"
                value="Edit Profile"
              />
            </div>
          </div>

          <div className="row">
            {/* left side url */}
            <div className="col-md-4">
              <div className="profile-work">
                <p>WORK LINK</p>
                <a
                  href="https://www.youtube.com/channel/UCX05pT3ajhLBxUl89qy7r6w"
                  target="_blank"
                  rel="noreferrer"
                >
                  Youtube
                </a>
                <br />
                <a
                  href="https://www.facebook.com/mohit.saud"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
                <br />
                <a
                  href="https://www.twitter.com/Mohit_Saud"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </a>
                <br />
                <a
                  href="https://www.instagram.com/_.____mohit2755"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
                <br />
                <a
                  href="https://www.github.com/manutdmohit"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <br />
              </div>
            </div>

            {/* right side data toggle*/}
            <div className="col-md-8 pl-5 about-info">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>USER ID</label>
                    </div>
                    <div className="col-md-6">
                      <p>12212121212</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>Elon Musk </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default About;
