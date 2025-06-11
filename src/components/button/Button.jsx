import React from 'react';
import './button.css'; 

const Button = ({ text = 'Menu', className = '' }) => {
  return (
    <h3 className={`container btn ${className} bg-white text-black `}>
      <span className="upper">{text}</span>
      <span className="lower">{text}</span>
    </h3>
  );
};

export default Button;
