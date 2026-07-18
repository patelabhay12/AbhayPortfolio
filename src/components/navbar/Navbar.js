import React, { useState } from 'react'
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { navLinksdata } from '../../constants';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
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
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-[#0f172a]/95 backdrop-blur-xl border-r border-white/10 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <span>Abhay Patel</span>
                <p className="text-sm text-gray-400 mt-2">
                I am a Full-Stack Software Engineer building scalable, production-grade web applications using React, Java, Spring Boot and Node.js.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
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
              <div className="flex flex-col gap-4">
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
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
      </div>
    </div>
  );
}

export default Navbar