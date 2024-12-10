import "./About.scss";
import { languages, frameworks, databases, machineLearning, testingFrameworks, tools } from "../../Assets/Technologies";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { isMobile } from "react-device-detect";

const Technology = ({ categoryName, techArray, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { x: 300, opacity: 0 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, delay: index + 2 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
      },
    },
  };

  return (
    <motion.div ref={ref} className="category" variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
      <motion.div className="tech-list">
        <span className="category-name">{categoryName}</span>
        {techArray.map((tech) => (
          <motion.div key={tech.name} className="tech-item" variants={itemVariants}>
            <img src={tech.logo} alt={tech.name} className="tech-logo" />
            <span className="tech-name">{tech.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

const About = () => {
  const textVariants = {
    hidden: { x: 5000, opacity: 0 },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  };

  const textVariants2 = {
    hidden: { x: -500, y: 0, opacity: 0 },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
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

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <motion.div className="about" ref={ref}>
      <motion.div className="content" initial="hidden" animate={inView ? "visible" : "hidden"}>
        <motion.h1 variants={textVariants2}>About Me</motion.h1>
        {isMobile ? (
          <motion.p variants={textVariants2}>
            With a <b> strong foundation in Information Technology</b>, I am passionate about leveraging technology to solve real-world problems. My approach combines analytical thinking and innovative design to develop solutions that are efficient, scalable, and user-friendly. I am eager to contribute to the IT industry by building cutting-edge applications and systems that enhance user experiences and drive business success.
          </motion.p>
        ) : (
          <motion.p variants={textVariants2}>
            With a <b> strong foundation in Information Technology</b>, I approach technology with a combination of analytical expertise and creative problem-solving. As a dedicated full-stack developer, I navigate every layer of development with precision and innovation. Driven by a passion for excellence and a curiosity for emerging technologies, my goal is to create seamless, impactful solutions that redefine possibilities in the digital landscape.
          </motion.p>
        )}

        <motion.div className="technologies" animate={inView ? "visible" : "hidden"}>
          <motion.h1 variants={textVariants}>Skills</motion.h1>
          <motion.div className="groups">
            <Technology categoryName={"Languages"} techArray={languages} index={1} /> <Technology categoryName={"Frameworks"} techArray={frameworks} index={2} />
            <Technology categoryName={"Tools"} techArray={tools} index={3} /> <Technology categoryName={"Databases"} techArray={databases} index={4} />
            <Technology categoryName={"Testing"} techArray={testingFrameworks} index={5} />
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        <div className="top">
          {" "}
          Create Design <br />
        </div>
        <div className="bottom">App & Web Developer</div>
      </motion.div>
    </motion.div>
  );
};

export default About;
