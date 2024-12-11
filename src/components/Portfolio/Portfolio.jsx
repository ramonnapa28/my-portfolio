import { useRef } from "react";
import "./Portfolio.scss";

import * as svgs from "../../Assets/Logos/index";
import kariton from "../../Assets/Images/kariton-ss.png";
import twitter from "../../Assets/Images/twitter.png";
import kapeeling from "../../Assets/Images/kapeeling.png";
import UI_Kit from "../../Assets/Images/UI_Kit.png";
import { isMobile } from "react-device-detect";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Kariton",
    img: kariton,
    desc: "Developed an integrated platform using Flutter and Node.js to connect households, Barangays, and junkshops, optimizing scrap collection and recycling processes. Implemented real-time scheduling, location tracking, and a rewards system, enhancing community participation and reducing waste management inefficiencies.",
    link: { text: "https://github.com/ramonnapa28/kariton", message: "Visit Github Repo" },
    techStack: [
      { name: "EJS", logo: svgs.ejs },
      { name: "Node.js", logo: svgs.nodejs },
      { name: "Flutter", logo: svgs.flutter },
      { name: "MongoDB", logo: svgs.mongodb },
      { name: "Dart", logo: svgs.dart },
    ],
  },
  {
    id: 2,
    title: "Kape-Eling",
    img: kapeeling,
    desc: "Built a user-friendly website using HTML, CSS, and JavaScript for Kape-Eling, an online coffee shop offering a diverse selection of beverages. The website includes an interactive menu. It ensures a smooth and engaging customer experience. This project optimizes the online ordering process and enhances the efficiency of managing customer orders.",
    link: { text: "https://github.com/ramonnapa28/kape-eling-project", message: "Visit Github Repo" },
    techStack: [
      { name: "HTML", logo: svgs.html },
      { name: "CSS", logo: svgs.css },
      { name: "Javascript", logo: svgs.javascript },
    ],
  },
  {
    id: 3,
    title: "Twitter Replication",
    img: twitter,
    desc: "Developed a simplified version of Twitter using Dart, featuring key functionalities like posting tweets, like posts, and viewing a feed. While not a replica, it captures the core social interaction features, providing a basic but functional social media experience.",
    link: { text: "https://github.com/ramonnapa28/twitter-replication", message: "Visit Github Repo" },
    techStack: [
      { name: "Dart", logo: svgs.dart },
      { name: "Flutter", logo: svgs.flutter },
      { name: "Firebase", logo: svgs.firebase },
      { name: "HTML", logo: svgs.html },
      { name: "Swift", logo: svgs.swift },
    ],
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

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

  // Determine if the item's ID is odd or even
  const isItemOdd = isMobile ? true : item.id % 2 !== 0;

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          {isItemOdd ? (
            <>
              <div className="imageContainer" ref={ref}>
                <img src={item.img} alt="" />
              </div>
              <motion.div className="textContainer" style={{ y }}>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                {item.link != null && <button onClick={() => window.open(item.link.text, "_blank")}>{item.link.message}</button>}
                <div className="tech-list">
                  {item.techStack.map((tech) => (
                    <motion.div key={tech.name} className="tech-item" variants={itemVariants}>
                      <img src={tech.logo} alt={tech.name} className="tech-logo" />
                      <span className="tech-name">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </>
          ) : (
            <>
              <motion.div className="textContainer" style={{ y }}>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                {item.link != null && <button onClick={() => window.open(item.link.text, "_blank")}>{item.link.message}</button>}
                <div className="tech-list">
                  {item.techStack.map((tech) => (
                    <motion.div key={tech.name} className="tech-item" variants={itemVariants}>
                      <img src={tech.logo} alt={tech.name} className="tech-logo" />
                      <span className="tech-name">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <div className="imageContainer" ref={ref}>
                <img src={item.img} alt="" />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>My Work</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
