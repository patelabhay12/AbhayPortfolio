import React from 'react'
import { bannerImg } from "../../assets/index.js";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[250px] h-[350px] sm:w-[300px] sm:h-[400px] lgl:w-[400px] lgl:h-[500px] z-10"
        src={bannerImg}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[280px] h-[350px] sm:w-[350px] sm:h-[400px] lgl:w-[500px] lgl:h-[500px] glass-panel flex justify-center items-center"></div>
    </div>
  );
}

export default RightBanner;