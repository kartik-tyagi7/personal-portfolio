import { twitterLogo, facebookLogo, instagramLogo, linkdinLogo, githubLogo } from "../assets/icon";

import {
  aws,
  bootstrap,
  c,
  codequest,
  css,
  git,
  html,
  javasrcipt,
  mongodb,
  mySQL,
  nike,
  passwordgenerator,
  portfolio,
  python,
  react,
  tailwind,
  movix
} from "../assets/images";

export const navLinks = [
  { href: "#greeting-section", label: "Home" },
  { href: "#about-me-section", label: "About Me" },
  { href: "#eduskillach-section", label: "Resume" },
  { href: "#service-section", label: "Service" },
  { href: "#project-section", label: "Projects" },
  { href: "#contactMe-section", label: "Contact Me" },
];

export const aboutMeLinks = [
  { href: "", label: "Name:", value: "Kartik Tyagi" },
  { href: "", label: "Date of Birth:", value: "December 07, 2001" },
  {
    href: "mailto: kartiktyagi905@gmail.com",
    label: "Email:",
    value: "kartiktyagi905@gmail.com",
  },
  { href: "", label: "Phone:", value: "+91 9149356161" },
];

// export const sideNav = [
//   { link: "Education" },
//   { link: "Skills" },
//   { link: "Achievements" },
// ];

export const education = [
  {
    year: "2019-2023",
    course: "Bachelor of Technology in Computer Science (CSE)",
    institute: "Meerut Institute of Engineering and technology, Meerut",
    persectageOrCGPA: "CGPA - 8.5",
  },
  {
    year: "2018-2019",
    course: "ALL India Senior School Certificate Examination(12th)",
    institute: "Golden Public School, Muzaffarnagar",
    persectageOrCGPA: "Percentage-86.8",
  },
  {
    year: "2016-2017",
    course: "ALL India Senior School Certificate Examination(10th)",
    institute: "Golden Public School, Muzaffarnagar",
    persectageOrCGPA: "CGPA - 10",
  },
];

export const Achievements = [
  {
    year: "05/2022-Present",
    name: "AWS Certified Cloud Practitioner Certificate",
    score: "Validation Number - E7W6T43BPMF4QRG7",
    profile: "",
    detail: "Validation Number - E7W6T43BPMF4QRG7",
  },
  {
    year: "2021-Present",
    name: "500 Plus score on GeeksforGeeks in DSA (Problem Solving)",
    profile: {
      href: "https://auth.geeksforgeeks.org/user/kartiktyagi905/",
      target: "_blank",
      platform: "GFG Profile",
    },
    detail: "",
  },
  {
    year: "2021-Present",
    name: "Solved 300 plus problems on Leetcode",
    profile: {
      href: "https://leetcode.com/Kartik_Tyagi/",
      target: "_blank",
      platform: "Leetcode Profile",
    },
    detail: "",
  },
];

export const skillList = [
  {
    skillTitle: "Frontend",
    skills: [
      { skillName: "HTML", src: html },
      { skillName: "CSS", src: css },
      { skillName: "Tailwind", src: tailwind },
      { skillName: "Bootstrap", src: bootstrap },
      { skillName: "Javascript", src: javasrcipt },
      { skillName: "ReactJs", src: react },
    ],
  },

  {
    skillTitle: "Database",
    skills: [
      { skillName: "MySQL", src: mySQL },
      { skillName: "MongoDB", src: mongodb },
    ],
  },
  {
    skillTitle: "DevOps",
    skills: [
      { skillName: "Git", src: git },
      { skillName: "AWS", src: aws },
    ],
  },
  {
    skillTitle: "Programming language",
    skills: [
      { skillName: "C", src: c },
      { skillName: "Python", src: python },
    ],
  },
];

export const services = [
  {
    name: "Front-end Development",
    aboutService:
      "Crafting responsive and visually engaging user interfaces for exceptional web experiences.",
  },
  {
    name: "Web Application Development",
    aboutService:
      "Building dynamic and scalable web solutions to meet diverse business needs.",
  },
  {
    name: "Web design",
    aboutService:
      "Transforming concepts into aesthetically pleasing and user-centric website designs.",
  },
  // {
  //   name: "SEO Services",
  //   aboutService:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, cum.",
  // },
  // {
  //   name: "Web Hosting and Domain Setup",
  //   aboutService:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, cum.",
  // },
  // {
  //   name: "API Integration",
  //   aboutService:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, cum.",
  // },
];


export const projects = [
  {
    projectName: "Movie Database App (Movix)",
    desc: "A React-based Movie Database App. Data is fetched from The Movie Database API. Watch trailers, search and sort based on different parameters.",
    teckStack: "HTML, CSS, javascript, React, Redux, React Router, Talwind CSS",
    url: "https://movix-chi-five.vercel.app/",
    coverPhoto: movix,
  },
  {
    projectName: "Personal Protfolio Website",
    desc: "Discover my digital canvas, where I showcase my web development journey.",
    teckStack: "HTML, CSS, javascript, React, Talwind CSS, Bootstrap",
    url: "https://kartik-tyagi-rho-puce.vercel.app/",
    coverPhoto: portfolio,
  },
  {
    projectName: "Coding Contest App (CodeQuest)",
    desc: "codeQuest: Where Passionate Coders Compete and Innovate – Join the Challenge!",
    teckStack: "HTML, CSS, javascript React, Talwind CSS, Bootstrap",
    url: "https://codequest-app.vercel.app/",
    coverPhoto: codequest,
    github: "https://github.com/kartik-tyagi7/CodeQuest-App",
  },
  {
    projectName: "Nike Landing Page",
    desc: "Discover stylish Nike arrivals, quality comfort, and innovation for your active life.",
    teckStack: "HTML, CSS, javascript React, Talwind CSS",
    url: "",
    coverPhoto: nike,
  },
  {
    projectName: "Password Generator",
    desc: "Create Strong, Unique Passwords Tailored to Your Security Needs and Keep Your Digital World Safe.",
    teckStack: "HTML, CSS, javascript",
    url: "https://password-generator-self-nine.vercel.app/",
    coverPhoto: passwordgenerator,
    github: "https://github.com/kartik-tyagi7/Password_generator",
  },
];

export const contactMe = [
  {
    iconClass: "fa-solid fa-location-dot fa-2xl",
    heading: "ADDRESS POINT",
    // href: "https://goo.gl/maps/smoS3U58gLDDoigH8",
    p: "San Francisco CA 97987 USA",
  },
  {
    iconClass: "fa-regular fa-envelope fa-2xl",
    heading: " MAIL ME",
    href: "mailto: kartiktyagi905@gmail.com",
    p: "kartiktyagi905@gmail.com",
  },
  {
    iconClass: "fa-solid fa-phone fa-2xl",
    heading: "CALL ME",
    href: "",
    p: "+91 9149356161",
  },
];

export const contactForm = [
  {
    for: "fullname",
    text: "Full name:",
    type: "text",
    id: "fullname",
    placeholder: "Enter your name",
  },
  {
    for: "email",
    text: "Email:",
    type: "email",
    id: "email",
    placeholder: "Enter your email",
  },
  {
    for: "phone",
    text: "Phone no:",
    type: "tel",
    id: "phone",
    placeholder: "Enter no. here",
  },
];

export const footerLinks = [
  {
    title: "Links",
    links: [
      { name: "Home", link: "#greeting-section" },
      { name: "About Me", link: "#about-me-section" },
      { name: "Resume", link: "#eduskillach-section" },
      { name: "Service", link: "#service-section" },
      { name: "Projects", link: "#project-section" },
      { name: "Contact Me", link: "#contactMe-section" },
    ],
  },

  {
    title: "Services",
    links: [
      { name: "Web design", link: "/" },
      { name: "Front-end Development", link: "/" },
      { name: "Web Application Development", link: "/" },
      // { name: "SEO Services", link: "/" },
      // { name: "Web Hosting and Domain Setup", link: "/" },
      // { name: "API Integration", link: "/" },
    ],
  },

  {
    title: "Get in touch",
    links: [
      {
        name: "kartiktyagi905@gmail.com",
        link: "mailto:kartiktyagi905@gmail.com",
      },
      { name: "+91 9149356161", link: "tel:+91914935XXXX" },
    ],
  },
];

export const socialMedia = [
  {
    src: linkdinLogo,
    alt: "linkdin",
    href: "https://www.linkedin.com/in/kartik-tyagi7/",
  },
  {
    src: twitterLogo,
    alt: "twitter logo",
    href: "https://twitter.com/kartik_tyagi_7",
  },
  {
    src: githubLogo,
    alt: "github logo",
    href: "https://github.com/kartik-tyagi7",
  },
];
