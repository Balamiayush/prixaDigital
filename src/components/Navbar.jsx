import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        delay: 0.2
      }
    }
  };

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div data-animation="over-right" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navbar w-nav ">
      <div className="container w-container">
        <a href="#" className="brand w-nav-brand">
          <img src="images/logo-prixa.svg" loading="lazy" width="200" alt="" />
        </a>

        {/* Desktop Navigation (unchanged) */}
        <header role="navigation" className="nav-menu w-nav-menu  hidden md:block">
          <a href="#" className="menu-item w-nav-link link">About</a>
          <a href="#" className="menu-item w-nav-link link">Our Work</a>
          <a href="#" className="menu-item w-nav-link link">Testemonial</a>
          <a href="#" className="button ghost w-inline-block">
            <div className="text-block-3">View Case Studies</div>
            <img src="images/arrow-btn.svg" loading="lazy" alt="" />
          </a>
          <a href="#" className="button w-inline-block">
            <div className="text-block-2">Contact Us</div>
            <img src="images/arrow-dark.svg" loading="lazy" alt="" />
          </a>
        </header>

        {/* Mobile Navigation */}
        <div className="md:hidden text-white ">
          {/* Toggle Button */}
          <button onClick={toggleMenu} className="text-3xl">
            {isOpen ? <IoMdClose  className='text-2xl'/> : <MdOutlineMenu className='text-2xl' />}
          </button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
                className="fixed inset-0 bg-black z-50 pt-20 px-6"
                style={{ top: '80px' }}
              >
                <motion.div
                  className="flex flex-col items-center space-y-6"
                  variants={{
                    open: {
                      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
                    },
                    closed: {
                      transition: { staggerChildren: 0.05, staggerDirection: -1 }
                    }
                  }}
                >
                  <motion.a href="#" className="menu-item w-nav-link link text-2xl" variants={itemVariants} onClick={toggleMenu}>
                    About
                  </motion.a>
                  <motion.a href="#" className="menu-item w-nav-link link text-2xl" variants={itemVariants} onClick={toggleMenu}>
                    Our Work
                  </motion.a>
                  <motion.a href="#" className="menu-item w-nav-link link text-2xl" variants={itemVariants} onClick={toggleMenu}>
                    Testemonial
                  </motion.a>
                  <motion.a href="#" className="button ghost w-inline-block mt-4" variants={itemVariants} onClick={toggleMenu}>
                    <div className="text-block-3">View Case Studies</div>
                    <img src="images/arrow-btn.svg" loading="lazy" alt="" />
                  </motion.a>
                  <motion.a href="#" className="button w-inline-block" variants={itemVariants} onClick={toggleMenu}>
                    <div className="text-block-2">Contact Us</div>
                    <img src="images/arrow-dark.svg" loading="lazy" alt="" />
                  </motion.a>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
