/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
import NavBar from "./nav";

const Contact = ({ setContact }: any) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <NavBar />
      <div
        className="my-mother"
        onClick={() => {
          setContact(false);
        }}
      >
        <div
          className="my-col-12 xs-container bg-white my-bottom-50"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="my-col-10 off-1 md-10 md-off-1 md-down-20 xs-12">
            <div className="my-mother xs-down-5vh down-20 centered">
              <span className="faded-sol md-px20 poppings-Light my-col-12 xs-px15 px15">
                Contact Us
              </span>
              <div className="px30  my-mother md-px40 xs-px20 red NeueMontreal-Bold">
                Get In touch with Us
              </div>
            </div>

            <div className="my-mother ls-gap-elements xs-down-5 md-down-5 down-5 my-bottom-50">
              <div className="my-col-4 md-12 xs-12 my-bottom-50 rad-10 bg-faded-4">
                <div className="my-col-10 xs-10 md-10 md-off-1 md-down-5 xs-off-1 xs-down-10 bd-bottom-bold my-bottom-20 off-1 down-8">
                  <div className="my-col-2 xs-2 gap-elements md-1">
                    <span className="white icons bg-red">
                      <i className="fas px9md-px20 xs-px12 centered-align md-px20 xs-px13 fa-phone"></i>
                    </span>
                  </div>
                  <span className="px18 xs-8 md-8 mg-10 md-down-3 down-2 my-col-8 NeueMontreal-Bold px15 xs-px15 xs-down-3">
                    Call Us
                  </span>
                  <div className="my-mother md-down-5 down-3 xs-down-5">
                    <span className="faded-sol poppings-Light my-col-12 xs-px13 md-px20 px10">
                      Speak directly with our experts to get immediate
                      assistance.
                    </span>
                  </div>
                  <div className="my-mother md-down-5 xs-down-5 down-2">
                    <span className="poppings-Bold md-px20 my-col-12 xs-px13 px10">
                      Phone: +234 704 8649 590
                    </span>
                  </div>
                </div>
                <div className="my-col-10 md-10 md-down-5 md-off-1 off-1 xs-10 xs-off-1 xs-down-10 down-5">
                  <div className="my-col-2 md-1 xs-2 centered-align">
                    <span className="white icons bg-red">
                      <i className="fas px9 md-px20 xs-px12 md-px20 xs-px13 fa-envelope"></i>
                    </span>
                  </div>
                  <span className="px18 xs-8 md-8 md-down-2 down-2 my-col-8 NeueMontreal-Bold mg-10 px15 xs-px15 xs-down-3">
                    Email us
                  </span>
                  <div className="my-mother down-3 md-down-5 xs-down-5">
                    <span className="faded-sol md-px20 poppings-Light my-col-12 xs-px13 px10">
                      We are available 24hrs/ 7 days.
                    </span>
                  </div>
                  <div className="my-mother down-3 md-down-5 xs-down-5">
                    <span className="poppings-Bold md-px20 my-col-12 xs-px13 px10">
                      Email: info@aniomaranch.com
                    </span>
                  </div>
                </div>
              </div>
              <div className="my-col-8 md-12 md-down-5 my-bottom-50  xs-12 xs-down-10 rad-10 bg-faded-4">
                <div className="my-col-10 md-10 md-off-1 md-down-5 off-1 down-5 xs-10 xs-off-1 xs-down-10">
                  <div>
                    <span className="px18 xs-8 my-col-8 md-down-4  NeueMontreal-Bold mg-3 px15 xs-px15 xs-down-3">
                      Leave a Message
                    </span>
                  </div>
                  <div className="my-mother down-5 md-down-4  ls-gap-elements">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="input xs-down-5 md-down-2 InterLight rad-10 px9 md-px20 xs-px12 bg-white"
                      placeholder="Your Name*"
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="input xs-down-5 md-down-2  InterLight rad-10 px9 md-px20 xs-px12 bg-white"
                      placeholder="Your Email*"
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="input xs-down-5 md-down-2 InterLight rad-10 px9 md-px20 xs-px12 bg-white"
                      placeholder="Your Phone Number*"
                    />
                  </div>
                  <div className="my-mother down-4 xs-down-5 md-down-2">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your Message*"
                      className="my-area InterLight px9 md-px20 xs-px12"
                    ></textarea>
                  </div>
                  <div className="my-col-12 xs-12 down-5 md-12 md-down-6 right xs-down-10">
                    <span
                      onClick={() => {
                        console.log(formData); // Do something with the formData, e.g., send to an API
                      }}
                      className="pd-10 bg-red white my-b-shadow c-pointer xs-px12 md-px20 rad-10"
                    >
                      Send Message
                      <i className="fas fa-arrow-up mg-5 rotate-45"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
