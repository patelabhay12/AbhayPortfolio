import React from 'react'

const ResumeCard = ({title,subTitle,result,des}) => {
  return (
    <div className="w-full h-1/3 group flex">
      <div className="w-10 h-[6px] bgOpacity mt-16 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-white/10 backdrop-blur-md border border-white/30">
          <span className="w-3 h-3 rounded-full bg-[#a855f7] inline-flex group-hover:bg-white duration-300 shadow-[0_0_10px_#a855f7]"></span>
        </span>
      </div>
      <div className="w-full glass-card p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10">
        <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300">
              {title}
            </h3>
            <p className="text-sm mt-2 text-gray-400 group-hover:text-white duration-300">
              {subTitle}
            </p>
          </div>
          <div>
            <p className="px-4 py-2 text-[#a855f7] bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex justify-center items-center shadow-sm text-sm font-medium">
              {result}
            </p>
          </div>
        </div>
        <p className="text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300">
          {des}
        </p>
      </div>
    </div>
  );
}

export default ResumeCard