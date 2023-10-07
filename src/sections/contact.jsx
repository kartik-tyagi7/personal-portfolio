import React from "react";
import { contactForm, contactMe } from "../constants";

const Contact = () => {
  return (
    <section
      className="contactMe-section max-container padding max-sm:pb-20"
      id="contactMe-section"
    >
      <div className="container">
        <div
          className="contact-me-heading"
          data-aos="fade-up"
          data-aos-easing="ease-out"
        >
          <h1 className="text-center font-palanquin text-[60px] max-md:text-[40px] text-primary font-bold pb-12 max-sm:pb-8">
            Contact Me
          </h1>
        </div>
        <div className="contact-area flex justify-between max-md:flex-col">
          <div
            className="left-contact-area w-[40%] max-md:m-auto  max-md:w-[70%] max-sm:w-full max-md:pb-20"
            data-aos="fade-up"
            data-aos-easing="ease-out"
          >
            <h2 className="text-xl font-bold font-poppins pb-2">
              Get In Touch
            </h2>

            <p className="text-slate-gray font-montserrat text-sm pb-10">
              Feel free to get in touch with me. I am always open to discusing
              new projects, creative ideas or opprotunities to be part of your
              vision.
            </p>

            {contactMe.map((item) => (
              <div className="contact-details flex pb-4">
                <div className="contact-me-icon education-icon">
                  <i className={item.iconClass}></i>
                </div>
                <div className="contact-component">
                  <h3 className="font-bold ">{item.heading}</h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      className="text-slate-gray font-palanquin"
                    >
                      {item.p}
                    </a>
                  ) : (
                    <p className="text-slate-gray font-palanquin">{item.p}</p>
                  )}
                </div>
              </div>
            ))}

            {/* <div className="contact-details flex">
              <div className="contact-me-icon">
                <i className="fa-solid fa-location-dot fa-2xl "></i>
              </div>
              <div className="contact-component">
                <h3>ADDRESS POINT</h3>
                <a href="https://goo.gl/maps/smoS3U58gLDDoigH8" target="_blank">
                  <p>H No 643 Gadla MZN UP, INDIA</p>
                </a>
              </div>
            </div> */}

            {/* <div className="contact-details flex">
              <div className="contact-me-icon">
                <i className="fa-regular fa-envelope fa-2xl"></i>
              </div>
              <div className="contact-component">
                <h3>MAIL ME</h3>
                <a href="mailto: kartiktyagi905@gmail.com">
                  <p>kartiktyagi905@gmail.com</p>
                </a>
              </div>
            </div> */}

            {/* <div className="contact-details flex">
              <div className="contact-me-icon">
                <i className="fa-solid fa-phone fa-2xl"></i>
              </div>
              <div className="contact-component">
                <h3>CALL ME</h3>
                <p>+91 9149356161</p>
              </div>
            </div> */}
          </div>

          <div
            className="right-contact-area w-[40%] flex justify-center items-center shadow-3xl rounded-lg max-md:m-auto max-md:w-[70%] max-sm:w-full "
            data-aos="fade-up"
            data-aos-easing="ease-out"
          >
            <div className="contact-form w-full p-12 max-md:p-6 max-sm:p-10">
              <form action="#">
                {contactForm.map((item) => (
                  <p className="pb-6">
                    <label
                      for={item.for}
                      className="block pb-1 font-montserrat font-semibold"
                    >
                      {item.text}
                    </label>
                    <input
                      type={item.type}
                      id={item.id}
                      placeholder={item.placeholder}
                      required
                      className="w-full h-8 px-2 border border-secondary rounded-md focus:outline-none text-sm"
                    ></input>
                  </p>
                ))}

                {/* <p>
                  <label for="fullname">Full Name</label>
                  <input
                    type="text"
                    id="fullname"
                    placeholder="Enter name here"
                    required
                    className=""
                  ></input>
                </p> */}

                {/* <p>
                  <label for="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email here"
                    required
                    className=""
                  ></input>
                </p> */}

                {/* <p>
                  <label for="phone">Enter your phone number:</label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Enter no. here"
                    required
                  ></input>
                </p> */}

                {/* <p>
                  <label for="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    cols="57"
                  ></textarea>
                </p> */}

                <p className="pt-5">
                  <input
                    type="submit"
                    id="submit"
                    className="primary-btn w-full" 
                    value="Send"
                  ></input>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
