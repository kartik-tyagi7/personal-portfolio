import React from "react";

const Greeting = () => {
  return (
    <section className="greeting-section max-container " id="greeting-section">
      <div className="light-bg"></div>
      <div className="flex w-full justify-center items-center text-center min-h-screen">
        <div
          className="greeting-text"
          data-aos="fade-up"
          data-aos-easing="ease-out"
        >
          <h4 className="font-bold text-xl max-sm:text-xl font-montserrat">
            HEY! I AM
          </h4>
          <h1 className="text-8xl max-sm:text-4xl font-bold font-palanquin text-primary tracking-tight pb-8 pt-2">
            Kartik Tyagi
          </h1>
          <h3 className="wrapper text-2xl max-sm:text-sm font-bold font-poppins inline-flex">
            <div className="static-text">I'm a</div>
            <ul className="dynamic-text ml-2 text-left text-primary  overflow-hidden ">
              <li>
                <span>Web Developer</span>
              </li>
              <li>
                <span>Programmer</span>
              </li>
              <li>
                <span>Freelancer</span>
              </li>
            </ul>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Greeting;
