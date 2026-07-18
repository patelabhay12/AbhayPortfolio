import React from 'react'
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full glass-panel p-4 lgl:p-8 rounded-lg flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-2xl mb-2 border border-white/20 shadow-sm"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Abhay Patel</h3>
        <p className="text-lg font-normal text-[#a855f7]">
          Full-Stack Software Engineer
        </p>
        {/* <p className="text-base text-gray-400 tracking-wide">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          ipsam autem cumque, accusantium dicta odio.
        </p> */}
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91-7525858518</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">abhaypate6794@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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
    </div>
  );
}

export default ContactLeft;