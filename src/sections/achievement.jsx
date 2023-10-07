import React from "react";
import { Achievements } from "../constants";

const Achievement = () => {
  return (
    <section
      class="achievement-section toggle-class-section max-md:pb-4"
      id="achievement-section"
    >
      <div class="container">
        <div class="section-area">
          <h2 class="sec-h-padding secondary-heading text-4xl max-sm:text-[40px] font-palanquin font-bold text-primary pb-8 max-sm:pb-3">
            Achievements
          </h2>

          {Achievements.map((item) => (
            <>
              <div
                class="flex flex-right education-qualification py-10 max-sm:py-6"
                data-aos="fade-up"
                data-aos-easing="ease-out"
              >
                <div class="education-icon pr-7 max-sm:mx-0">
                  {/* <i class="fa-solid fa-house fa-2xl"></i> */}
                  
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACCElEQVR4nO2aTUoDQRCFP0EXIYIalOz0ALmEunSnBxC3RkRcKIiioktFtwoBPYO5gD8rEYwKHiAudCX4kygo2hKogSZMQjrpHkfTD3qR7qp69aYm1UnPgIeHR7MYADaAS6AEqIjGG3Al3JUcWsI48Bxh8rXGk+TStIgvCXQEDANJ7GMM+AzhSQIjQF7WvpoRM6BVYgl3SAGPDfAsa5XpNyHY0K6QS6wZ8OTFdt2EoCBOlTK7hAnPqNhWmk7DeBWn7uZztM7TLbYvJgRBt3ANUx5lmte/E6IiGs6EnEUo4tSlkN++5WrBC2nLiqgIGoDyQtrx1ooCygtpx4oo37WIV/uNAsoLqYKvyH++tSaAB+De4LxKxUXIEHBTo0t9A9fAoEN+a4F2xb8kJ4fzwIyICM6VdxzyWwmUBm61c6yEtpaQOSU2aQf81gJdiO8d0BOy3itrFZtzB/xWAnVoB9WZOnYZsfkQH1v8VgMdim+ujk1ObA4c8FsLNC2+m3VstsVm1gG/tUBZ8S0CW0CXttYpc0WxWXTAby1QX9W+kZXHCqtatYKRcsBvNVArJyixFLIiO/w+sCd7x8JfFFILXogpWvlfrvsHm19BRrBJhtkqg+9QJI8b9OSmgLL2uSxzjQg5JQaoTupQ2/GtXnHXCBJ9B+a0+cmq10NijxN5vyTsh2NG1o5/Ia/44QfeTwzwWfK6YwAAAABJRU5ErkJggg=="/>
                </div>
                <div>
                  <div class="secondary-heading bold font-bold font-poppins text-primary pb-1">
                    {item.year}
                  </div>
                  <div class="course font-poppins font-bold text-2xl max-sm:text-xl pb-5 max-sm:pb-2">
                    {item.name}
                  </div>

                  {item.detail && (
                    <div class="institute font-poppins max-sm:text-sm">
                      {item.detail}
                    </div>
                  )}
                  {item.profile && (
                    <div className="font-poppins max-sm:text-sm">
                      <a href={item.profile.href} target={item.profile.target}>
                        {item.profile.platform}
                      </a>
                    </div>
                  )}
                </div>
              </div>

              <hr></hr>
            </>
          ))}

          {/* <div class="flex flex-right education-qualification">
            <div class="education-icon">
              <i class="fa-solid fa-house fa-2xl"></i>
            </div>
            <div>
              <div class="secondary-heading bold">05/2022-Present</div>
              <div class="course">
                AWS Certified Cloud Practitioner Certificate
              </div>
              <div class="institute">Validation Number - E7W6T43BPMF4QRG7</div>
              <div>CGPA - 10</div>
            </div>
          </div> */}

          {/* <hr></hr> */}

          {/* <div class="flex flex-right education-qualification">
            <div class="education-icon">
              <i class="fa-solid fa-house fa-2xl"></i>
            </div>

            <div>
              <div class="secondary-heading bold">2021-Present</div>
              <div class="course">
                500 Plus score on GeeksforGeeks in DSA Problem Solving
              </div>
              <div class="institute">Problem solved - 290 (Approx)</div>
              <div>
                <a
                  href="https://auth.geeksforgeeks.org/user/kartiktyagi905/"
                  target="_blank"
                >
                  GFG Profile
                </a>
              </div>
            </div>
          </div> */}

          {/* <hr></hr> */}

          {/* <div class="flex flex-right education-qualification">
            <div class="education-icon">
              <i class="fa-solid fa-house fa-2xl"></i>
            </div>
            <div>
              <div class="secondary-heading bold">2021-Present</div>
              <div class="course">Solved 300 plus problems on Leetcode</div>
              <div>
                <a href="https://leetcode.com/Kartik_Tyagi/" target="_blank">
                  Leetcode Profile
                </a>
              </div>
            </div>
          </div> */}

          {/* <hr></hr> */}
        </div>
      </div>
    </section>
  );
};

export default Achievement;
