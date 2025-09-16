import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 pb-24 px-[8vw] md:px-[6vw] lg:px-[12vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
        A collection of my technical skills and expertise honed through various
        projects and experiences
      </p>
    </div>

    {/* Skill Categories - Responsive Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10 w-full">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-gray-900 backdrop-blur-md px-6 sm:px-8 py-8 mb-10 
                     rounded-2xl border border-white 
                     shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
        >
          {/* Category Title */}
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
            {category.title}
          </h3>

          {/* Skill Items with Tilt Effect */}
          <Tilt
            key={category.title}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="grid grid-cols-2 sm:grid-cols-2.5 gap-3 w-full">
              {category.skills.map((skill) => (
            <div
  key={skill.name}
  className="flex flex-col items-center justify-center 
             bg-gray-800/50 border border-gray-700 rounded-xl 
             p-4 transition-all hover:scale-105 hover:border-[#8245ec] hover:shadow-[0_0_15px_rgba(130,69,236,0.6)]"
>
  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-900">
    <img
      src={skill.logo}
      alt={`${skill.name} logo`}
      className="w-8 h-8 object-contain"
    />
  </div>
  <span className="text-xs sm:text-sm text-gray-300 mt-2 text-center">
    {skill.name}
  </span>
</div>


              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
