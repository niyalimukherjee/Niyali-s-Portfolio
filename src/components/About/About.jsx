import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/niyali.png";

const About = () => {
  const [loading, setLoading] = useState(false);

  // Resume configuration
  const filename = "NIYALI_MUKHERJEE_RESUME_.pdf";
  const driveFileId = "18bWiOubEoWFrjATouhDHtPj4hIqIXmZv";
  const driveView = `https://drive.google.com/file/d/${driveFileId}/view?usp=sharing`;
  const driveDirect = `https://drive.google.com/uc?export=download&id=${driveFileId}`;

  const handleDownload = (e) => {
    e.preventDefault();
    setLoading(true);

    // 1. Open Google Drive view in a new tab
    const newTab = window.open(driveView, "_blank");

    // 2. Auto-download via hidden anchor
    const a = document.createElement("a");
    a.href = driveDirect;
    a.download = filename;
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // 3. Fallback: redirect if popup blocked
    if (!newTab || newTab.closed || typeof newTab.closed === "undefined") {
      window.location.href = driveView;
    }

    // 4. Reset loading
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <section
      id="about"
      className="py-4 px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Niyali Mukherjee
          </h2>

          {/* Skills */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <TypeAnimation
              sequence={[
                "Fullstack Developer",
                2000,
                "App Developer",
                2000,
                "UI/UX Designer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-[#8245ec]"
            />
          </h3>

          {/* About Me */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a passionate Full Stack Developer with experience building scalable web and mobile applications. Skilled in React.js, Node.js, and modern frameworks, I specialize in creating responsive user interfaces and efficient backend systems. With a strong eye for design and performance optimization, I enjoy turning ideas into user-friendly products that deliver real impact.
          </p>

          {/* Resume Button */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
            <button
              onClick={handleDownload}
              disabled={loading}
              className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
              style={{
                background: "linear-gradient(90deg, #8245ec, #a855f7)",
                boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
              }}
              aria-label="View Resume"
              title="Downloads from Google Drive and opens in new tab"
            >
              {loading ? "Preparing..." : "View Resume"}
            </button>
          </div>
        </div>

        {/* Right Side - Profile Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Niyali Mukherjee"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
