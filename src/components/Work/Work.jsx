import React from "react";
import { projects } from "../../constants";

const Work = () => {
  return (
    <section
      id="work"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
  <div
    key={project.id}
    className="flex flex-col border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden transition-transform duration-300 hover:shadow-purple-500/50 hover:-translate-y-2"
  >
    {/* Image */}
    <div className="p-4">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover rounded-xl"
      />
    </div>

    {/* Content + Buttons container */}
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-2xl font-bold text-white mb-2">
        {project.title}
      </h3>

      <p className="text-gray-500 mb-4 pt-4 line-clamp-3">
        {project.description}
      </p>

      <div className="mb-4">
        {project.tags.map((tag, idx) => (
          <span
            key={idx}
            className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Buttons, pushed to bottom */}
      <div className="mt-auto flex gap-4 pt-4 flex-col sm:flex-row lg:justify-between">
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="w-full sm:w-1/2 lg:w-auto 
               bg-gray-800 hover:bg-purple-800 
               text-gray-400 px-4 py-2 
               sm:px-6 sm:py-3 
               lg:px-4 lg:py-2 
               rounded-xl text-sm lg:text-base 
               font-semibold text-center"
  >
    View Code
  </a>
  <a
    href={project.webapp}
    target="_blank"
    rel="noopener noreferrer"
    className="w-full sm:w-1/2 lg:w-auto 
               bg-purple-600 hover:bg-purple-800 
               text-white px-4 py-2 
               sm:px-6 sm:py-3 
               lg:px-1 lg:py-1 
               rounded-xl text-sm lg:text-base 
               font-semibold text-center"
  >
    View Live
  </a>
</div>

    </div>
  </div>
))}

    
      </div>
    </section>
  );
};

export default Work;
