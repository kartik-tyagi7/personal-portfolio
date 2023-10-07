import React from "react";
import { education } from "../constants";

const Education = () => {
  return (
    <section
      className="education-section toggle-class-section pb-32 max-sm:pb-14"
      id="education-section"
    >
      <div className="container">
        <div className="section-area">
          <h2 className="sec-h-padding secondary-heading text-4xl  max-sm:text-[40px] font-palanquin font-bold text-primary pb-8 max-sm:pb-3">
            Education
          </h2>
          {education.map((item) => (
            <>
              <div
                className="flex education-qualification py-10 max-sm:py-6"
                data-aos="fade-up"
                data-aos-easing="ease-out"
              >
                <div className="education-icon pr-7 max-sm:mx-0">
                  {/* <i className="fa-solid fa-house fa-2xl"></i> */}
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADDElEQVR4nO2aX4gNURzHP9e/FGLt5s+iZVfhWRTyQinUWskLEQ+kbHmTJxIPS1FeFG/+ZUtqPSjRhl0P5IFVREhhL2KXsOvuWjs69b11mu7uzJ2Zu3dmm2/9mnvvzPmd+cz5nTnn/M6FVKlSpZLuAjmgW/YVeAHcAy4Bh4CNQCXFqwrYABwGLgLtwBvgG9ALODJTV2g5Pu0f8Ehgc4bxNxM4CDxUGb/+QyvvaAJQAcwGFgFrgd1Ak1rtl3XtgFqr1vJjyp0H+qzrfgP3gZPytUa+q1RXphQgXjKg6xUiOZUxcPuABoWL+a0faAbqgYkR1l8SR7P09Add4XEBmFekL6ecIHltVj8wobZtpOuv0NN8CbyN4Ink1BeCypHl35g31N881RzxWyMqEMeyFj8FTaf8C1S7HJUbxGi61Tqe6pERQxCs17anUpAhlLaIlIZWT8SdvWO0dHajZYwCkKkhysYGpElzLTPN3wVMSSrIcdfUwvi9DKwDxiYJZLFV/o9rWv/Y5/LYiQMIWv6a8o3AfC288j6f+IBx4gKyX+VvApOAVn3v8wnjxAWkUjdtZtRfLH87tebxgnHiAmJ03fJjFmu3rESGF4wTJ5AFwHv5aQMmW+e8YJy4gCzUsS4gTF9cQJ4BS/S5Bngnfw9cA6RJ3D3XuafKbaFMZC5KkDvANeAKcA44DRwD9ihZZ8JnXAF/WaVB8dEy1UO0zKYoQLqGSAAUsl5NR44CK5UpzKrijHVjQWBCg5gY3+qyHcAB3fBZ4LZCxp3Lfa0RfUDnfwDLQ8L0BwUpRtMU02dcY0beuhSSmRAwW/RASgpia7xi29zEB2C7fnPLhmn3CVM/kiC2xnicDwLjqe+KwyAbN2EUOUyLCti7VKW0TmC1D5i9Rc6amQFcBT6PEIixj8CKYWAarBG+O0iYlUt1FkyHBXFCYfbKGqRjr1oLxtFrG23NdVprmlUkDKYNWGpBZHU0O8wkDWZQx1b1nZ/6HiQ7E4swawFO6fMnEqa5wJEC2+BmxpBI1eifEk0hU7GpKKX+A77aJnRFdlV6AAAAAElFTkSuQmCC"></img>
                  
                </div>
                <div>
                  <div className="secondary-heading font-bold font-poppins text-primary pb-1">
                    {item.year}
                  </div>
                  <div className="course font-poppins font-bold text-2xl max-sm:text-xl pb-5 max-sm:pb-3">
                    {item.course}
                  </div>
                  <div className="institute font-poppins font-semibold max-sm:text-sm">
                    {item.institute}
                  </div>
                  <div className="font-semibold font-palanquin max-sm:text-sm">
                    {item.persectageOrCGPA}
                  </div>
                </div>
              </div>
              <hr></hr>
            </>
          ))}

          {/* <div className="flex education-qualification">
            <div className="education-icon">
              <i className="fa-solid fa-house fa-2xl"></i>
            </div>
            <div>
              <div className="secondary-heading bold">2019-2023</div>
              <div className="course">
                Bachelor of Technology in Computer Science (CSE)
              </div>
              <div className="institute">
                Meerut Institute of Engineering and technology, Meerut
              </div>
              <div>CGPA - 8.5</div>
            </div>
          </div>
          <hr></hr>

          <div className="flex education-qualification">
            <div className="education-icon">
              <i className="fa-solid fa-house fa-2xl"></i>
            </div>
            <div>
              <div className="secondary-heading bold">2018-2019</div>
              <div className="course">
                ALL India Senior School Certificate Examination(12th)
              </div>
              <div className="institute">
                Golden Public School, Muzaffarnagar
              </div>
              <div>Percentage-86.8</div>
            </div>
          </div>
          <hr></hr>

          <div className="flex education-qualification">
            <div className="education-icon">
              <i className="fa-solid fa-house fa-2xl"></i>
            </div>
            <div>
              <div className="secondary-heading bold">2016-2017</div>
              <div className="course">
                ALL India Senior School Certificate Examination(10th)
              </div>
              <div className="institute">
                Golden Public School, Muzaffarnagar
              </div>
              <div>CGPA - 10</div>
            </div>
          </div>

          <hr></hr> */}
        </div>
      </div>
    </section>
  );
};

export default Education;
