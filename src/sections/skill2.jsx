import React from "react";
import { skillList } from "../constants";

const Skill = () => {
  return (
    <section
      id="skill-section"
      className="skill-section toggle-class-section pb-32 max-sm:pb-14"
    >
      <div className="container skill-container">
        <div className="skill-heading-area">
          <h2 className="sec-h-padding secondary-heading text-4xl max-sm:text-[40px] font-palanquin font-bold text-primary pb-16 max-sm:pb-5">
            Skills
          </h2>
        </div>

        {/* Frontend */}
        {skillList.map((item) => (
          <div
            className="skills-content"
            data-aos="fade-up"
            data-aos-easing="ease-out"
          >
            <div className="skill-type-heading">
              <h3 className="text-2xl max-sm:text-xl font-bold font-poppins pb-3 max-sm:pb-1">
                {item.skillTitle}
              </h3>
            </div>

            <div className="skills-area flex gap-5 flex-wrap pb-14 max-sm:pb-8 max-xsm:justify-around">
              {item.skills.map((skill) => (
                <div className="skill-card">
                  <div className="programming-language">
                    <a href="">
                      <img
                        src={skill.src}
                        className="skill-card-image h-[100px] w-[170px] max-md:h-[70px] max-md:max-w-[120px] rounded-lg max-md:rounded-md"
                      ></img>
                    </a>
                    <div className="skill-name bold font-bold font-poppins pl-2 pt-1 max-md:text-xs">
                      {skill.skillName}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* <div className="skills-content">
          <div className="skill-type-heading">
            <h3>Frontend</h3>
          </div>
          <div className="skills-area">
            <div className="skill-card">
              <div className="programming-language">
                <a href="">
                  <img src="./" className="skill-card-image"></img>
                </a>
                <div className="skill-name bold">HTML</div>
              </div>
            </div>

            <div className="skill-card">
              <div className="programming-language">
                <a href="">
                  <img src="css3.svg" className="skill-card-image"></img>
                </a>
                <div className="skill-name bold">CSS</div>
              </div>
            </div>

            <div className="skill-card">
              <div className="programming-language">
                <a href="">
                  <img src="bootstrap.svg" className="skill-card-image"></img>
                </a>
                <div className="skill-name bold">Bootstrap</div>
              </div>
            </div>

            <div className="skill-card">
              <div className="programming-language">
                <a href="">
                  <img src="javascript.svg" className="skill-card-image"></img>
                </a>
                <div className="skill-name bold">Javascript</div>
              </div>
            </div>

            <div className="skill-card">
              <div className="programming-language">
                <a href="">
                  <img src="reactsvg.svg" className="skill-card-image"></img>
                </a>
                <div className="skill-name bold">ReactJs</div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Databases and DevOps */}
        {/* <div className="skills-content">
          <div className="multi-column-skills">
            <div className="skills-left-content">
              <div className="skill-type-heading">
                <h3>Database</h3>
              </div>
              <div className="skills-area">
                <div className="skill-card">
                  <div className="programming-language">
                    <a href="">
                      <img src="mysql.webp" className="skill-card-image"></img>
                    </a>
                    <div className="skill-name bold">MySQL</div>
                  </div>
                </div>

                <div className="skill-card">
                  <div className="programming-language">
                    <a href="">
                      <img
                        src="mongoDb.webp"
                        className="skill-card-image"
                      ></img>
                    </a>
                    <div className="skill-name bold">MongoDB</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="skills-right-content">
              <div className="skill-type-heading">
                <h3>DevOps</h3>
              </div>
              <div className="skills-area">
                <div className="skill-card">
                  <div className="programming-language">
                    <a href="">
                      <img src="git.svg" className="skill-card-image"></img>
                    </a>
                    <div className="skill-name bold">GIT</div>
                  </div>
                </div>

                <div className="skill-card">
                  <div className="programming-language">
                    <a href="">
                      <img src="aws.png" className="skill-card-image"></img>
                    </a>
                    <div className="skill-name bold">AWS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* language(programming) */}
        {/* <div className="skills-content">
          <div className="skill-type-heading">
            <h3>Programming Language</h3>
          </div>
          <div className="skills-area">
            <div className="skill-card">
              <div className="programming-language">
                <a href="">
                  <img src="python.svg" className="skill-card-image"></img>
                </a>
                <div className="skill-name bold">Python</div>
              </div>
            </div>

            <div className="skill-card">
              <div className="programming-language">
                <a href="">
                  <img src="c.svg" className="skill-card-image"></img>
                </a>
                <div className="skill-name bold">C</div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Skill;
