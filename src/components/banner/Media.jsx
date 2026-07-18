import React from 'react';
import { FaGithub, FaLinkedinIn, FaReact, FaJava, FaNodeJs } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me in
        </h2>
        <div className="flex gap-4">
          <a href="https://github.com/patelabhay12" target='_blank' rel='noreferrer'>
            <span className="bannerIcon">
              <FaGithub />
            </span>
          </a>
          <a href="https://www.linkedin.com/in/abhay-patel-8b671921a/" target='_blank' rel='noreferrer'>
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaJava />
          </span>
          <span className="bannerIcon">
            <SiSpringboot />
          </span>
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <FaNodeJs />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Media