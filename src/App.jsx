import { useState } from "react";
import Navbar from "./sections/navbar";
import Greeting from "./sections/greeting";
import Aboutme from "./sections/aboutme";
import Education from "./sections/education";
// import Skill from "./components/05_skills-section/skill";
import Skill from "./sections/skill2";
import Achievement from "./sections/achievement";
import Service from "./sections/service";
import Project from "./sections/project";
import Contact from "./sections/contact";
import Eduskillach from "./sections/EduSkillAch";
import Footer from "./sections/footer";

function App() {
  return (
    <main className="">
      <Navbar />

      <section className="">
        <Greeting />
      </section>

      <section className="padding pt-0 max-sm:pt-0">
        <Aboutme />
      </section>

      <section className="">
        <Eduskillach />
      </section>

      {/* <Education />
      <Skill/>
      <Achievement /> */}

      <section className="bg-slate-100">
        <Service />
      </section>

      {/* <hr></hr> */}
      <section className="">
        <Project />
      </section>

      <secton className="">
        <Contact />
      </secton>

      <section className="bg-primary padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
}

export default App;
