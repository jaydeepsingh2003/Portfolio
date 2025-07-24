import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Tech = () => (
  <>
    <motion.div id="tech" variants={textVariant()}>
      <h2 className={`${styles.sectionHeadText} text-center`}>
        Tools
      </h2>
    </motion.div>

    {/* Display technology icons as static images */}
    <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
      {technologies.map((technology) => (
        <div key={technology.name} className="flex flex-col items-center">
          <img
            src={technology.icon}
            alt={technology.name}
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
          />
          <p className="mt-2 text-sm text-center text-white">{technology.name}</p>
        </div>
      ))}
    </div>
  </>
);

export default SectionWrapper(Tech, "");
