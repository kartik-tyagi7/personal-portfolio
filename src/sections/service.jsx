import React from "react";
import { services } from "../constants";
import { webDevLogo } from "../assets/icon";

const Service = () => {
  return (
    <section className="service-section padding" id="service-section">
      <div className="">
        <div
          className="service-heading-area text-center pb-12"
          data-aos="fade-up"
          data-aos-easing="ease-out"
        >
          <h1 className="text-primary font-palanquin  font-bold text-[60px] max-md:text-[40px] max-sm:text-[40px]">
            Services
          </h1>
          <p className="text-lg max-sm:text-sm font-montserrat text-slate-gray">
            "Web Development and Programming Expertise: Crafting Digital
            Solutions with Precision"
          </p>
        </div>
        <div className="service-cards-area flex justify-center flex-wrap gap-9">
          {services.map((item) => (
            <div
              className="service-card flex-1 sm:w-[350px] sm:min-w-[350px] w-full shadow-3xl px-10 py-10"
              data-aos="fade-up"
              data-aos-easing="ease-out"
            >
              <div>
                <span className="icon">
                  {/* <i className="fa-solid fa-gear fa-2xl"></i> */}
                  <img src={webDevLogo} alt="" height={50} width={40} />
          
                </span>
                <div className="service-desc mt-5">
                  <h3 className="font-bold text-3xl max-sm:text-xl leading-normal pb-2 font-palanquin">
                    {item.name}
                  </h3>
                  <p className="text-slate-gray font-montserrat max-sm:text-sm">
                    {item.aboutService}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* <div className="service-card">
            <a href="#">
              <span className="icon">
                <i className="fa-solid fa-gear fa-2xl"></i>
              </span>
              <div className="service-desc">
                <h3>Front-end Development</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam, cum.
                </p>
              </div>
            </a>
          </div> */}

          {/* <div className="service-card">
            <a href="#">
              <span className="icon">
                <i className="fa-solid fa-gear fa-2xl"></i>
              </span>
              <div className="service-desc">
                <h3>API Integration</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam, cum.
                </p>
              </div>
            </a>
          </div> */}

          {/* <div className="service-card">
            <a href="#">
              <span className="icon">
                <i className="fa-solid fa-gear fa-2xl"></i>
              </span>
              <div className="service-desc">
                <h3>SEO Services</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam, cum.
                </p>
              </div>
            </a>
          </div> */}

          {/* <div className="service-card">
            <a href="#">
              <span className="icon">
                <i className="fa-solid fa-gear fa-2xl"></i>
              </span>
              <div className="service-desc">
                <h3>Web Hosting and Domain Setup</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam, cum.
                </p>
              </div>
            </a>
          </div> */}

          {/* <div className="service-card">
            <a href="#">
              <span className="icon">
                <i className="fa-solid fa-gear fa-2xl"></i>
              </span>
              <div className="service-desc">
                <h3>Web Application Development</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam, cum.
                </p>
              </div>
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Service;
