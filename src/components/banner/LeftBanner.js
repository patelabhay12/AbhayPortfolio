import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';
import { resumeFile } from "../../assets/index";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Full-Stack Software Engineer", "React & Spring Boot Developer", "Backend Engineer"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5 text-center lgl:text-left">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-4xl md:text-5xl lgl:text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Abhay Patel</span>
        </h1>
        <h2 className="text-2xl md:text-3xl lgl:text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#a855f7"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Full-Stack Software Engineer with 2+ years of experience building scalable, production-grade web applications using React, Java, Spring Boot and Node.js. Proven track record of delivering data-intensive UIs, reusable frontend components, and high-performance REST APIs.
        </p>
        <div className="flex flex-col mdl:flex-row gap-4 justify-center lgl:justify-start">
          <a href="#projects" className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-designColor py-3 px-6 text-base font-medium text-white transition hover:bg-opacity-90 duration-300">
            View Projects
          </a>
          <a href="#contact" className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border border-designColor bg-transparent py-3 px-6 text-base font-medium text-designColor transition hover:bg-designColor hover:text-white duration-300">
            Contact Me
          </a>
          <a href={resumeFile} download="Abhay_Patel_Resume.pdf" className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border border-designColor bg-transparent py-3 px-6 text-base font-medium text-designColor transition hover:bg-designColor hover:text-white duration-300 shadow-xl">
            Download Resume
          </a>
        </div>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
}

export default LeftBanner