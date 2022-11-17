import React from "react";

const Contact = () => {
  return (
    <>
      <div className="contact_info">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 d-flex justify-content-xl-between">
              {/* phone number */}
              <div className="contact_info_item d-flex justify-content-start align-items-center">
                <div className="contact_info_content d-flex justify-content-start align-items-center">
                  <img
                    src="https://img.icons8.com/android/24/000000/phone.png"
                    alt="phone"
                  />
                  <div className="contact_info_text">+977 9888 888 888</div>
                </div>
              </div>
              {/* email */}
              <div className="contact_info_item d-flex justify-content-start align-items-center">
                <div className="contact_info_content d-flex justify-content-start align-items-center">
                  <img
                    src="
                    https://img.icons8.com/clouds/24/000000/email.png"
                    alt="email"
                  />
                  <div className="contact_info_text">
                    mohit@learnwithmohit.com
                  </div>
                </div>
              </div>
              {/* address  */}
              <div className="contact_info_item d-flex justify-content-start align-items-center">
                <div className="contact_info_content d-flex justify-content-start align-items-center">
                  <img
                    src="https://img.icons8.com/doodle/24/000000/address.png"
                    alt="address"
                  />

                  <div className="contact_info_text">Kathmandu</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* contact us form */}
      <div className="contact-form">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="contact_form_container py-5">
                <div className="contact_form_title">Get in Touch</div>
                <form id="contact_form">
                  <div className="contact_form_name d-flex justify-content-between align-items-between">
                    <input
                      type="text"
                      id="contact_form_name"
                      className="contact-form_name input_field"
                      placeholder="Your name"
                      required="true"
                    />
                    <input
                      type="email"
                      id="contact_form_email"
                      className="contact-form_email input_field"
                      placeholder="Your Email"
                      required="true"
                    />
                    <input
                      type="number"
                      id="contact_form_phone"
                      className="contact-form_phone input_field"
                      placeholder="Your Phone"
                      required="true"
                    />
                  </div>
                  <div className="contact_form_text mt-5">
                    <textarea
                      className="text_field contact-form_message"
                      placeholder="Message"
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>
                  <div className="contact_form_button">
                    <button
                      type="submit"
                      className="btn btn-primary button contact_submit_button"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
