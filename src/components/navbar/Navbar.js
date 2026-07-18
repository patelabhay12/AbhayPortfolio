import React, { useState } from 'react'
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { navLinksdata } from '../../constants';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <>
      <div className="w-full sticky top-4 z-50 flex justify-center px-4">
      <div className="w-full max-w-screen-xl h-20 bg-white/10 backdrop-blur-xl border border-white/20 mx-auto flex justify-between items-center font-titleFont rounded-full px-6 lgl:px-10 shadow-md">
      <div>
        <span>Abhay Patel</span>
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>

        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >

          <FiMenu />
        </span>
        </div>
      </div>
      </div>
      <div className={`w-full h-screen fixed top-0 left-0 bg-black/40 backdrop-blur-sm z-50 flex flex-col transition-opacity duration-300 ${showMenu ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <div className={`w-full h-auto max-h-screen overflow-y-scroll bg-white/10 backdrop-blur-3xl p-8 relative scrollbar-hide shadow-2xl border-b border-white/20 rounded-b-3xl transform transition-transform duration-500 ${showMenu ? "translate-y-0" : "-translate-y-full"}`}>
          <span
            onClick={() => setShowMenu(false)}
            className="absolute top-6 right-6 text-gray-400 hover:text-designColor duration-300 text-3xl cursor-pointer z-50"
          >
            <MdClose />
          </span>
          <div className="flex flex-col items-center gap-8 py-2 relative mt-8 text-center">
            <div>
              <span className="text-2xl font-bold text-white">Abhay Patel</span>
              <p className="text-sm text-gray-400 mt-2 max-w-sm mx-auto">
              I am a Full-Stack Software Engineer building scalable, production-grade web applications using React, Java, Spring Boot and Node.js.
              </p>
            </div>
            <ul className="flex flex-col gap-4">
              {navLinksdata.map((item) => (
                <li
                  key={item._id}
                  className="text-lg font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                >
                  <Link
                    onClick={() => setShowMenu(false)}
                    activeClass="active"
                    to={item.link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-4 mt-4">
              <h2 className="text-base uppercase font-titleFont mb-2 text-white">
                Find me in
              </h2>
              <div className="flex gap-4 justify-center">
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
        </div>
        {/* Clickable overlay to close the menu */}
        <div 
          className="flex-grow w-full"
          onClick={() => setShowMenu(false)}
        ></div>
      </div>
    </>
  );
}

export default Navbar