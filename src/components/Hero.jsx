import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { init } from "ityped";
import React, { useEffect, useRef } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import { jaydeep } from "../assets";
import "./Hero.scss";

const Hero = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      strings: ["Football Player", "Software Developer", "Tech Enthusiast"],
    });
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto pt-[80px]">
      {/* ===== Hero Content ===== */}
      <div className={`${styles.paddingX} flex flex-col sm:flex-row gap-8 items-start relative z-10`}>
        {/* Left Accent Line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-90 h-40 violet-gradient" />
        </div>

        {/* Intro Text & Social Links */}
        <div className="flex flex-col gap-4">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi there, I'm <span className="text-[#915EFF]">Jaydeep Singh Galhotra</span>
          </h1>
          <h3>
            <span ref={textRef} className={`${styles.heroSubText} mt-2 green-text-gradient`}></span>
          </h3>

          {/* Social Links */}
          <div className="flex gap-4 mt-3">
            <a href="https://github.com/jaydeepsingh2003" target="_blank" rel="noopener noreferrer">
              <AiOutlineGithub className="text-3xl text-white hover:text-[#915EFF]" />
            </a>
            <a
              href="https://www.linkedin.com/in/jaydeep-singh-galhotra-02350425b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImLinkedin className="text-3xl text-white hover:text-[#915EFF]" />
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="sm:absolute right-10 top-10 sm:w-[300px] w-[200px]">
          <img src={jaydeep} alt="Jaydeep" className="object-contain rounded-xl" />
        </div>
      </div>

      {/* ===== 3D Computer ===== */}
      <ComputersCanvas />

      {/* ===== Scroll Indicator ===== */}
      <div className="absolute xs:bottom-10 bottom-6 w-full flex justify-center items-center">
        <a href="#education">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
