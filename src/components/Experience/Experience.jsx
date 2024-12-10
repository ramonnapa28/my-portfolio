import "./Experience.scss";
import { motion } from "framer-motion";
import Timeline from "../../Assets/Images/Timeline.svg";
import { FaLocationDot } from "react-icons/fa6";
import { useInView } from "react-intersection-observer";

const educationData = [
  {
    id: "1",
    location: "Paranaque, Metro Manila",
    date: "April 2019 – May 2019",
    title: "Data Encoder at PNHS - Main",
    description: ["Core Activities: Created student report cards and Compiled all files in a certain location."],
    css: "point1",
  },
  {
    id: "2",
    location: "Filinvest City, Metro Manila",
    date: "August 2023 – January 2024",
    title: "IT Staff at Medalpha Philippines Inc.",
    description: ["Core Activities: Managed computer workstations and Handled website and computer issues"],
    css: "point2",
  },
];

const EducationPoint = ({ css, location, date, title, description, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: index * 3.8, duration: 1 },
    },
  };

  return (
    <motion.div className="education-point" ref={ref} initial="hidden" variants={variants} animate={inView ? "visible" : "hidden"}>
      <motion.div className={css}>
        <div className="date-location">
          <span className="location">
            {" "}
            <FaLocationDot size={"17px"} /> {location}
          </span>
          <span className="date">{date}</span>
        </div>
        <h3 className="title">{title}</h3>
        {description &&
          description.map((desc) => (
            <>
              <p className="description">{desc}</p>
            </>
          ))}
      </motion.div>
    </motion.div>
  );
};

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <motion.div ref={ref} className="education">
      <h1> Experience</h1>
      <div className="education-timeline">
        {inView && (
          <motion.div className="svg-container" initial="hidden" animate={inView ? "visible" : "hidden"}>
            <img src={Timeline} alt="SVG Image" />
          </motion.div>
        )}

        {educationData.map((point, index) => (
          <EducationPoint key={point.id} {...point} index={index} />
        ))}
      </div>{" "}
    </motion.div>
  );
};

export default Experience;
