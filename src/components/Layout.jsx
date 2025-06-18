// Layout.jsx
import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { Outlet, useLocation } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/all';

const Layout = () => {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
  }, []);

  // Scroll to top on route change (optional)
  const location = useLocation();
  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true }); // ✅ smooth scroll to top
  }, [location.pathname]);

  return (
    <div id="smooth-wrapper">
      <Outlet />
    </div>
  );
};

export default Layout;
