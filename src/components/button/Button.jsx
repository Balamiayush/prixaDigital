import React from 'react';
import './button.css'; 
import { FaArrowRight } from "react-icons/fa";


const Button = ({ text , src, className = '',val }) => {
  return (
    <h3 className={`btncontainer btn ${className} bg-white text-black `}>
<a href={`${src}`} target="_blank" rel="noopener noreferrer" className="upper">
  {text} <i className="ri-arrow-right-line"></i>
</a>
      <a   className="lower">{text} <i class="ri-arrow-right-line"></i></a >
    </h3>
  );
};

export default Button;
