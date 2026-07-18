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
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-[#a855f7] tracking-[4px]">Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold">Professional Experience</h2>
        </div>
        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full Stack Developer"
            subTitle="LPU Online - May 2026 - Present"
            result="Punjab, India"
            des="Developed full-stack recruitment and hiring platforms supporting automated candidate management workflows. Built automation solutions using Google Workspace APIs reducing manual effort by 60%."
          />
          <ResumeCard
            title="Software Engineer"
            subTitle="OTPless Solutions Private Limited - Dec 2024 - Apr 2026"
            result="New Delhi, India"
            des="Developed customer-facing applications and internal dashboards using React.js and TypeScript. Improved frontend performance by 30% and designed scalable RESTful APIs using Java and Spring Boot."
          />
        </div>
      </div>


      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-[#a855f7] tracking-[4px]"></p>
          <h2 className="text-3xl md:text-4xl font-bold">Internships</h2>
        </div>
        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full Stack Developer Intern"
            subTitle="Agami Technologies - (March 2024 - May 2024)"
            result="Greater Noida"
            des="Improved application performance by 50% through caching strategies, indexing, and query optimization. Executed backend migration of 500,000+ user records while maintaining data integrity."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
