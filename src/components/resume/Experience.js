import React from "react";
import { motion } from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Fresher</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Fresher Passing Year ( 2024 )"
            subTitle=""
            result="INDIA"
            des=""
          />
          {/* <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          /> */}
        </div>
      </div>


      <div>
        <div className="flex flex-col  gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-4xl font-bold">Interships</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="LetsGrowMore"
            subTitle="Web Developer Intern ( March 2023 - April 2023 )"
            result="Remote"
            des="Gain hands-on experience in front-end development using Reactjs and css.Learned about version control systems (e.g., Git) During this internship I have completed 4 tasks "
          />
          <ResumeCard
            title="Bharat Intern"
            subTitle="Full Stack Developer Intern( June 2023 - July 2023 )"
            result="Remote"
            des="Gain hands-on experience in front-end development using Reactjs ,Node js and css.Learned about version control systems (e.g., Git). During this internship I have completed 3 tasks"
          />
          {/* <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          /> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
