import React from 'react';
import './button.css';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Button = ({ text, src, className = '', val }) => {
  const isCaseStudy = val === "case"; // if val is "case", it's internal route

  return (
    <h3 className={`btncontainer btn ${className}`}>
      {isCaseStudy ? (
        <>
          <Link to={src} className="upper">
            {text} <i className="ri-arrow-right-line"></i>
          </Link>
          <Link to={src} className="lower">
            {text} <i className="ri-arrow-right-line"></i>
          </Link>
        </>
      ) : (
        <>
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="upper"
          >
            {text} <i className="ri-arrow-right-line"></i>
          </a>
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="lower"
          >
            {text} <i className="ri-arrow-right-line"></i>
          </a>
        </>
      )}
    </h3>
  );
};

export default Button;
