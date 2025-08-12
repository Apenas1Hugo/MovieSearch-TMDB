import React from "react";
import { FaPhone, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Rodape.css";
const Rodape = () => {
  return (
    <>
      <footer>
        <div>
          <p>© Hugo Rodrigues 2025</p>

          <a
            href="tel:+5586981513446"
          >
            <FaPhone />
            <span>(86) 98151-3446</span>
          </a>

          <div>
            <a //Github
              href="https://github.com/Apenas1Hugo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a //Email
              href="mailto:hugorodriguesm27@gmail.com"
            >
              <FaEnvelope />
            </a>
            <a //Linkedin
              href=" "
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Rodape;
