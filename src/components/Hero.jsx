import { motion } from "framer-motion";
import { styles } from "../styles";
import { init } from "ityped";
import React, { useEffect, useRef } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import { AiOutlineInstagram } from "react-icons/ai";
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
    <section className="relative w-full h-screen mx-auto flex flex-col items-center justify-center">
      {/* Text + Links */}
      <div
        className={`head1 relative z-10 max-w-7xl mx-auto ${styles.paddingX} flex flex-col sm:flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-90 h-40 violet-gradient" />
        </div>

        <div className="head2">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi there, I'm{" "}
            <p className="name text-[#915EFF]">Jaydeep Singh Galhotra</p>
          </h1>
          <h3>
            <span
              ref={textRef}
              className={`${styles.heroSubText} mt-2 green-text-gradient`}
            ></span>
          </h3>

          <div className="flex gap-6 mt-4">
            <a
              href="https://github.com/jaydeepsingh2003"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineGithub className="text-4xl hover:text-[#915EFF]" />
            </a>
            <a
              href="https://www.linkedin.com/in/jaydeep-singh-galhotra-02350425b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImLinkedin className="text-4xl hover:text-[#915EFF]" />
            </a>
            {/* <a href="" target="_blank">
              <AiOutlineInstagram className="text-4xl hover:text-[#915EFF]" />
            </a> */}
          </div>
        </div>
      </div>

      {/* Profile Image - Circular & Head Visible */}
      <div className="relative flex justify-center items-center mt-10 z-0">
        <img
          src={jaydeep}
          alt="Jaydeep Singh Galhotra"
          className="w-56 h-56 sm:w-72 sm:h-72 rounded-full object-cover object-top border-4 border-[#915EFF] shadow-lg"
        />
      </div>

      {/* Scroll Down Button - Bottom Left */}
      <div className="absolute left-10 bottom-6 flex justify-start items-center">
        <a href="#education">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
