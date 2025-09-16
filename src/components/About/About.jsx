import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/niyali.jpeg";

const About = () => {
  const [loading, setLoading] = useState(false);

  // Public file path (served from your site: put the PDF in public/)
  const publicResume = "/NIYALI_MUKHERJEE_RESUME.pdf";

  // Google Drive link(s)
  const driveFileId = "18bWiOubEoWFrjATouhDHtPj4hIqIXmZv";
  const driveView = `https://drive.google.com/file/d/${driveFileId}/view?usp=sharing`;
  const driveDirect = `https://drive.google.com/uc?export=download&id=${driveFileId}`;

  const filename = "NIYALI_MUKHERJEE_RESUME.pdf";

  const handleDownload = async (e) => {
    e.preventDefault();
    setLoading(true);

    // 1) Check if public file exists using HEAD (lightweight)
    let publicAvailable = false;
    try {
      const head = await fetch(publicResume, { method: "HEAD" });
      publicAvailable = head.ok;
    } catch (err) {
      publicAvailable = false;
    }

    // 2) If public file exists -> trigger same-origin download
    if (publicAvailable) {
      try {
        const a = document.createElement("a");
        a.href = publicResume;
        a.download = filename; // ensures filename on same-origin
        // Make sure the link does not navigate away (open in background)
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
        a.remove();
      } catch (err) {
        console.warn("Public download attempt failed:", err);
      }
      // Small delay to ensure the download is initiated before opening Drive tab
      // (usually not necessary, but improves reliability)
      try {
        setTimeout(() => {
          // Open Drive view (user can also download from Drive)
          window.open(driveView, "_blank", "noopener");
        }, 150);
      } finally {
        setLoading(false);
      }
      return;
    }

    // 3) If public file not available -> open Drive (attempt direct download then view)
    try {
      // Try direct download URL first (some setups auto-download)
      window.open(driveDirect, "_blank", "noopener");
      // Also open Drive view after a short delay to cover cases where direct link shows UI
      setTimeout(() => {
        window.open(driveView, "_blank", "noopener");
      }, 400);
    } catch (err) {
      console.error("Opening Drive failed, navigating current tab instead:", err);
      window.location.href = driveView;
    } finally {
      setLoading(false);
    }
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

          {/* Download CV button */}
          <button
            onClick={handleDownload}
            disabled={loading}
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
            aria-label="Download CV"
            title="Downloads from site if available and also opens Google Drive"
          >
            {loading ? "Preparing..." : "DOWNLOAD CV"}
          </button>

          <p className="text-sm text-gray-500 mt-2">
           
          </p>
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
