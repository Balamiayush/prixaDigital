// Layout.jsx
import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const lenisRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis();
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // good cleanup
    };
  }, []);

  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true }); // scroll to top on route change
  }, [location.pathname]);

  return (
    <div id="smooth-wrapper">
      <Outlet />
    </div>
  );
};

export default Layout;
