import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I've learned so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Technologies.
        </h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
        <div
        className="flex flex-col items-center justify-center bg-white rounded-md p-4 shadow-md"
      >
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-16 w-16 object-contain"
        />
      </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
