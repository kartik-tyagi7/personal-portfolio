import React, { useEffect } from "react";
import Education from "./education";
import Skill from "./skill2";
import Achievement from "./achievement";

const Eduskillach = () => {
  // useEffect(() => {
  //   const toggleCurrentClass = () => {
  //     const navLinks = document.querySelectorAll(".navi a");
  //     const sections = document.querySelectorAll(".section"); // Replace with your section selector

  //     sections.forEach((section, index) => {
  //       const rect = section.getBoundingClientRect();
  //       if (rect.top <= 150 && rect.bottom >= 150) {
  //         navLinks.forEach((link) => link.classList.remove("current"));
  //         navLinks[index].classList.add("current");
  //       }
  //     });
  //   };

  //   window.addEventListener("scroll", toggleCurrentClass);
  //   toggleCurrentClass(); // Initial call

  //   // Clean up the event listener when the component is unmounted
  //   return () => {
  //     window.removeEventListener("scroll", toggleCurrentClass);
  //   };
  // }, []);

  useEffect(() => {
    const toggleCurrentClass = () => {
      const navLinks = document.querySelectorAll(".navi a");

      // Use getElementById to select sections by their IDs
      const educationSection = document.getElementById("education-section");
      const skillSection = document.getElementById("skill-section");
      const achievementSection = document.getElementById("achievement-section");

      if (isInViewport(educationSection)) {
        navLinks.forEach((link) => link.classList.remove("current"));
        // Update the appropriate navigation link
        navLinks[0].classList.add("current");
      } else if (isInViewport(skillSection)) {
        navLinks.forEach((link) => link.classList.remove("current"));
        // Update the appropriate navigation link
        navLinks[1].classList.add("current");
      } else if (isInViewport(achievementSection)) {
        navLinks.forEach((link) => link.classList.remove("current"));
        // Update the appropriate navigation link
        navLinks[2].classList.add("current");
      }
    };

    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return rect.top <= 150 && rect.bottom >= 150;
    };

    window.addEventListener("scroll", toggleCurrentClass);
    toggleCurrentClass(); // Initial call

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", toggleCurrentClass);
    };
  }, []);

  return (
    <section id="eduskillach-section" className="eduskillach-section padding">
      <div className="max-container">
        <div className="two-row flex">
          <div className="max-md:hidden eduskillach-left-column h-full sticky top-[170px] py-0 px-4 flex-shrink-0 flex-grow-0 w-[25%]">
            <nav className="navi m-0">
              <ul>
                <li>
                  <a href="#education-section" className="inline-block">
                    <h4 className="font-bold font-poppins text-xl">
                      Education
                    </h4>
                  </a>
                </li>
                <li>
                  <a href="#skill-section" className="inline-block">
                    <h4 className="font-bold font-poppins text-xl">Skills</h4>
                  </a>
                </li>
                <li>
                  <a href="#achievement-section" className="inline-block">
                    <h4 className="font-bold font-poppins text-xl">
                      Achievements
                    </h4>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="eduskillach-right-column">
            <Education />
            <Skill />
            <Achievement />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eduskillach;
