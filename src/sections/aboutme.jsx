import React from "react";
import { aboutMeLinks } from "../constants";

const Aboutme = () => {
  const customstyle = {
    style: {
      color: "rgb(141, 141, 141)",
    },
  };

  return (
    <section
      className="about-me-section max-container"
      data-aos="fade-up"
      data-aos-easing="ease-out"
      id="about-me-section"
    >
      <div className="flex justify-center items-center gap-20 max-lg:gap-10">
        <div
          className="profile-photo-div max-md:hidden"
        >
          {/* <img
            src="/kartik_tyagi-removebg-preview.jpg"
            alt="Profile Photo"
            className="profile-photo max-lg:h-[25rem] max-lg:w-[300px]"
          ></img> */}
        </div>

        <div className="about-me-text-area w-[40%] max-md:w-auto">
          <h1 className="text-[60px] font-bold font-palanquin text-primary max-sm:text-[35px]">
            About Me
          </h1>

          <p className="text-slate-gray font-montserrat py-6">
            Passionate Web Developer and Programmer Transforming Ideas into
            Innovative Digital Experiences.
          </p>
          <ul className="about-me-text">
            {aboutMeLinks.map((item) => (
              <li className="py-3">
                <span className="left-span w-[150px] max-sm:w-[120px] inline-block font-bold font-poppins">
                  {item.label}
                </span>
                <span className="right-span text-slate-gray inline-block font-montserrat w-[160px]">
                  {item.href && <a href={item.href}>{item.value}</a>}
                  {item.href ? "" : item.value}
                </span>
              </li>
            ))}

            {/* <li className="py-3">
              <span className="left-span w-[150px] inline-block font-bold font-palanquin">Address:</span>
              <span className="right-span text-secondary inline-block w-[250px] font-montserrat">
                <a
                  href="https://goo.gl/maps/smoS3U58gLDDoigH8"
                  target="_blank"
                >
                  H No 643 Gadla MZN UP, INDIA
                </a>
              </span>
            </li> */}
          </ul>

          <div className="pt-7">
            <a
              href="/Kartik's Resume (12).pdf"
              className="primary-btn download-resume-btn"
              download="resume_pdf"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
