import "./Home.scss";
import { motion } from "framer-motion";

const Home = () => {
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 20,
      },
    },
  };

  return (
    <div className="home">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>RAMON JR. NAPA</motion.h2>
          <motion.h1 variants={textVariants}>
            Full Stack Developer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <a href={"#Portfolio"}>
              <motion.button variants={textVariants}>See my Work</motion.button>
            </a>
            <a href={"#Contact"}>
              <motion.button variants={textVariants} className="secondary">
                Contact Me
              </motion.button>{" "}
            </a>
          </motion.div>
          <div className="container">
            <div className="chevron"></div>
            <div className="chevron"></div>
            <div className="chevron"></div>
            <span className="text">Scroll Down</span>
          </div>
        </motion.div>
        <motion.div
          className="slidingTextContainer"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
           Developer
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
