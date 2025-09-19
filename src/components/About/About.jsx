import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/niyali.png";

const About = () => {
  const [loading, setLoading] = useState(false);

 
  const publicResume = "public/NIYALI_MUKHERJEE_RESUME_.pdf";
  const filename = "NIYALI_MUKHERJEE_RESUME_.pdf";

  const driveFileId = "18bWiOubEoWFrjATouhDHtPj4hIqIXmZv";
  const driveView = `https://drive.google.com/file/d/${driveFileId}/view?usp=sharing`;
  const driveDirect = `https://drive.google.com/uc?export=download&id=${driveFileId}`;

  /**
   * Behavior:
   * 1) Open Google Drive view in a new tab immediately (prevents popup blocking).
   * 2) Trigger same-origin download via hidden iframe to start browser download without navigation.
   * 3) If iframe fails, fallback to anchor click method.
   * 4) If new-tab/open was blocked, navigate current tab to Drive view as a last resort.
   */
  const handleDownload = (e) => {
  e.preventDefault();
  setLoading(true);

  // 1. Immediately open the Google Drive view in a new tab.
  // This is a direct user-initiated action, so it's less likely to be blocked.
  window.open(driveView, "_blank");

  // 2. Trigger the download using an anchor tag for reliability.
  // This method works well and is a standard way to trigger file downloads.
  const a = document.createElement("a");
  a.href = publicResume; // Use the direct URL to the PDF file
  a.download = filename;
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a); // Clean up the element

  // 3. Reset the loading state after a brief delay.
  // This gives the browser a moment to process the actions.
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

          {/* Skills with typing effect */}
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

          {/* About me paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a passionate Full Stack Developer with experience building scalable web and mobile applications. Skilled in React.js, Node.js, and modern frameworks, I specialize in creating responsive user interfaces and efficient backend systems. With a strong eye for design and performance optimization, I enjoy turning ideas into user-friendly products that deliver real impact.
          </p>

          {/* Download CV + Drive link */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
            <button
              onClick={handleDownload}
              disabled={loading}
              className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
              style={{
                background: "linear-gradient(90deg, #8245ec, #a855f7)",
                boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
              }}
              aria-label="Download CV"
              title="Downloads from site if available and opens Google Drive"
            >
              {loading ? "Preparing..." : "DOWNLOAD CV"}
            </button>

            {/* <a
              href={driveView}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 sm:mt-0 inline-block text-sm text-gray-400 underline"
            >
              Open on Google Drive
            </a> */}
          </div>

         
        </div>

        {/* Right Side */}
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
