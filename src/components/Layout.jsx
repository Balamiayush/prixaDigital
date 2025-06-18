// Layout.jsx
import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { Outlet, useLocation } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/all';

const Layout = () => {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smooth: true,
      autoRaf: false,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update(); // ✅ sync GSAP ScrollTrigger with Lenis
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
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
