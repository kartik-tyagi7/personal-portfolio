import React from "react";
import { projects } from "../constants";
import { githubLogo } from "../assets/icon";

const Project = () => {
  return (
    <section
      className="project-section py-14 max-container"
      id="project-section"
    >
      <div className="">
        <div
          className="service-heading-area text-center pb-12"
          data-aos="fade-up"
          data-aos-easing="ease-out"
        >
          <h1 className="text-primary font-palanquin  font-bold text-[60px] max-md:text-[40px] max-sm:text-[40px]">
            Projects
          </h1>
          <p className="text-lg max-sm:text-sm font-montserrat text-slate-gray">
            Coding Adventures: A Showcase of My Web Development Projects
          </p>
        </div>

        <div className="cards-area flex flex-wrap justify-around gap-10 py-4">
          {projects.map((item) => (
            <div
              className="project-card flex-1  rounded-lg p-5 shadow-3xl w-[448px] max-w-md min-w-[330px] "
              data-aos="fade-up"
              data-aos-easing="ease-out"
            >
              <a href={item.url} target="_blank">
                <img
                  src={item.coverPhoto}
                  alt="#"
                  height={200}
                  width={400}
                  className="rounded-lg w-full object-cover"
                />
              </a>

              <div className="py-5 ">
                <a href={item.url} target="_blank">
                  <h3 className="text-xl max-sm:text-lg font-bold font-poppins text-primary">
                    {item.projectName}
                  </h3>
                </a>
                <p className="text-md pt-2">{item.teckStack}</p>
                <p className="text-sm text-secondary font-montserrat pt-4">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
