import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  // starbucks,
  // tesla,
  // shopify,
  // carrent,
  // jobit,
  // tripguide,
  // threejs,
} from "../assets";
import androleda from "../assets/company/androleda.png";
import koe from "../assets/company/koe.png";
import paragon from "../assets/company/paragon.jpeg"
import svnit from "../assets/company/svnit.png";
import radiant from "../assets/company/radiant.jpeg";
import reliance from "../assets/company/reliance.png";
import video from "../assets/tech/video.jpeg";
import sas from "../assets/tech/sasfts.jpeg";
import pkpcare from "../assets/tech/pkpcare.png";
import nextjs from "../assets/tech/nextjs.png";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "DSA Enthusiast",
    icon: backend,
  },
  {
    title: "GenAI Hobbyist",
    icon: mobile,
  }, 
  {
    title: "Database Administrator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer - Contract",
    company_name: "Paragon Irrigations Inc.",
    icon: paragon,
    iconBg: "#383E56",
    date: "August 2024 - Present",
    points: [
      "Built and deployed a full-stack web application serving over 5,000 users. I combined AWS Cloud, Amazon RDS— PostgreSQL, Next.js, and Tailwind CSS to deliver a high-performance experience and user-friendly interface.",
      "Worked on the development of backend systems in TypeScript and Express.js, then containerized them using Docker, streamlined deployments with AWS Fargate and AWS Beanstalk",
      "Ran efficient pipelines for CI/CD using AWS CodeBuild, CodeDeploy, and CodePipeline; integrated SonarQube to do strict checking on code quality.This increased the velocity of deployment by 25%.",
    ],
  },
  {
    title: "Developer",
    company_name: "Koe - The Kafe",
    icon: koe,
    iconBg: "#383E56",
    date: "Jan. 2024 - March 2024",
    points: [
      "Engineering an interactive café website, enhancing reservation efficiency by 30% through table booking and admin CRUD functionalities",
      "Integrating real-time visualization on the dashboard, enhancing data accessibility and decision-making capabilities",
      "Leading to a 25% reduction in response time to critical events.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "Androleda",
    icon: androleda,
    iconBg: "#383E56",
    date: "Oct. 2023 - Dec. 2023",
    points: [
      "Spearheading the design and development of the Androleda platform and website",
      "Utilizing HTML, CSS, and React, resulting in a successful soft launch",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Contributed to a 30% increase in user engagement within the first month post-launch.",
    ],
  },
{
title: "Student",
company_name: "S.V.N.I.T, Surat",
icon: svnit,
iconBg: "#383E56",
date: "Nov 2022 - July 2026",
points: [
  "Bachelor of Technology in Computer Science & Engineering, 2026",
  "CGPA:- 8.72",
  "Data Structures & Algorithms, Database Management Systems, Microprocessors and Interfacing Techniques, Automata & Formal Languages, Computer Networks, Artificial Intelligence, Design & Analysis Of Algorithms, Computer Organization & Architecture, Discrete Mathematics",

],
},
{
  title: "Student",
  company_name: "Radiant English Academy, Surat",
  icon: radiant,
  iconBg: "#383E56",
  date: "April 2020 - June 2022",
  points: [
    // "Higher Secondary Education",
    "Class 12th Science CBSE:- 97.2%",
    "Graduated as the highest ranked student in my class. (June 2022)",
  ],
},
  {
    title: "Student",
    company_name: "Reliance Foundation School, Surat",
    icon: reliance,
    iconBg: "#383E56",
    date: "April 2010 - March 2020",
    points: [
      // "Higher Secondary Education",
      "Class 10th CBSE:- 98.2%",
      "Passed my 10th grade with a 98.2% aggregate, one of the toppers in the Ajmer region.(March 2020)",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "PKP Care",
    description:
      "Healthcare platform that streamlines patient registration, appointment scheduling, and medical records",
    tags: [
      {
        name: "nextjs",
        color: "white-text-gradient",
      },
      {
        name: "appwrite",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "sentry",
        color: "green-text-gradient",
      },
    ],
    image: pkpcare,
    source_code_link: "https://github.com/pkp2207/PKPCare",
  },
  {
    name: "SAS Fat To Slim",
    description:
      "A full stack website developed for a slimming startup, implemented role-based login and Admin Panel functionalities",
    tags: [
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "twilio",
        color: "pink-text-gradient",
      },
      {
        name: "jwt",
        color: "white-text-gradient",
      },
    ],
    image: sas,
    source_code_link: "https://github.com/pkp2207/SAS-SLIM-AND-FIT",
  },
  {
    name: "Video Call WebApp",
    description:
      "A comprehensive video chatting website, featuring login and video as well as text chat rooms ",
    tags: [
      {
        name: "socket",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "peerjs",
        color: "pink-text-gradient",
      },
      {
        name: "webrtc",
        color: "white-text-gradient",
      },
    ],
    image: video,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
