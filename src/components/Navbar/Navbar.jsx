import Sidebar from "../Sidebar/Sidebar";
import "./Navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Ramon Jr. Napa
        </motion.span>

        <div className="social">
          <motion.a
            href="/src/Assets/CV/MON-CV.pdf" // Replace with the actual path to your CV
            download="Ramon_Jr_Napa_CV.pdf" // Optional: Provide a custom filename for download
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="cv-button" // Optional: add a class for styling
          >
            <button>Curriculum Vitae</button>
          </motion.a>

          <motion.a
            href="https://github.com/ramonnapa28"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
              alt="GitHub"
            />
          </motion.a>

          <motion.a
            href="https://www.instagram.com/_mnapa"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
              alt="Instagram"
            />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
