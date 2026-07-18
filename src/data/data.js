import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import { projectOne, projectTwo, projectThree } from "../assets/index";

// Features Data
export const featuresData = [
  {
    id: 1,
    icon: <AiFillAppstore />,
    title: "MERN Stack Development",
    des: "Build scalable web applications with React, Node.js, Express and MongoDB, optimized for maintainability and performance.",
  },
  {
    id: 2,
    icon: <SiAntdesign />,
    title: "UI/UX Design",
    des: "Design responsive user interfaces with strong visual hierarchy, accessibility, and modern interaction patterns.",
  },
  {
    id: 3,
    icon: <SiProgress />,
    title: "Performance Optimization",
    des: "Improve application speed, load times, and reliability through clean code, caching, and optimized asset delivery.",
  },
  {
    id: 4,
    icon: <FaMobile />,
    title: "Responsive Development",
    des: "Create mobile-first experiences that look great across devices with modern CSS and adaptive layouts.",
  },
  {
    id: 5,
    icon: <FaGlobe />,
    title: "API & Backend",
    des: "Develop robust REST APIs, database schemas, and server-side workflows for data-driven applications.",
  },
  {
    id: 6,
    icon: <AiFillAppstore />,
    title: "Product Engineering",
    des: "Deliver polished product features with a focus on usability, maintainability, and business value.",
  },
];

export const projectsData = [
  {
    id: 1,
    title: "Community Development Platform",
    des: "Scalable community engagement platform serving 1000+ active users with efficient state management, code splitting, and responsive design.",
    src: projectOne,
    repoLink: "https://github.com/patelabhay12",
    liveLink: "https://radhakrishnagramvikaskendra.co.in/",
  },
  {
    id: 2,
    title: "AI-Powered Fitness Microservice",
    des: "Java & Spring Boot microservice for AI-powered fitness tracking, leveraging LangChain and Hugging Face for intelligent insights.",
    src: projectTwo,
    repoLink: "https://github.com/patelabhay12/ai-powered-fitness-microservice",
    liveLink: "",
  },
  {
    id: 3,
    title: "Research Review Platform",
    des: "TypeScript-based platform designed to facilitate research paper reviews with a modular architecture and clean user interfaces.",
    src: projectThree,
    repoLink: "https://github.com/patelabhay12/research-review-platform",
    liveLink: "",
  },
];
