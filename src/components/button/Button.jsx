import React from 'react';
import './button.css';
import { Link } from 'react-router-dom';
const Button = ({ text, src, className = '', val }) => {
  const isCaseStudy = val === 'case';
  return (
    <>
      {isCaseStudy ? (
        <Link
          to={src}
          className={`text-sm btnnn flex items-center gap-2  ${className}`}
        >
          {text} <i className="ri-arrow-right-line"></i>
        </Link>
      ) : (
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-sm flex linkbtn  items-center gap-2 ${className} `}
        >
          {text} <i className="ri-arrow-right-line"></i>
        </a>
      )}
    </>
  );
};

export default Button;
