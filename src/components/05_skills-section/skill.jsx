import React from "react";

const Skill = () => {
  return (
    <section className="skills-section" id="skills-section">
      <div className="container">
        <div className="section-area">
          <h2 className="sec-h-padding secondary-heading">Skills</h2>
          <div className="skill-container">
            <div className="skill">
              <div className="skill-name-area">
                <h4>Python</h4>
              </div>
              <div className="skill-progress-area">
                <div className="progress-fill"></div>
                <span className="progress-text">50%</span>
              </div>
            </div>
            <div className="skill">
              <div className="skill-name-area">
                <h4>Data Structure</h4>
              </div>
              <div className="skill-progress-area">
                <div className="progress-fill"></div>
                <span className="progress-text">50%</span>
              </div>
            </div>
            <div className="skill">
              <div className="skill-name-area">
                <h4>HTML</h4>
              </div>
              <div className="skill-progress-area">
                <div className="progress-fill"></div>
                <span className="progress-text">50%</span>
              </div>
            </div>
            <div className="skill">
              <div className="skill-name-area">
                <h4>CSS</h4>
              </div>
              <div className="skill-progress-area">
                <div className="progress-fill"></div>
                <span className="progress-text">50%</span>
              </div>
            </div>
            <div className="skill">
              <div className="skill-name-area">
                <h4>Javascript</h4>
              </div>
              <div className="skill-progress-area">
                <div id="skill1" className="progress-fill"></div>
                <span id="skill1-text" className="progress-text">
                  50%
                </span>
              </div>
            </div>
            <div className="skill">
              <div className="skill-name-area">
                <h4>SQL</h4>
              </div>
              <div className="skill-progress-area">
                <div className="progress-fill"></div>
                <span className="progress-text">50%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
