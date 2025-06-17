// Layout.jsx
import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  useEffect(() => {
    const lenis = new Lenis({ autoRaf: false });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // optional: scroll to top on route change
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div id="smooth-wrapper">
      <Outlet />
    </div>
  );
};

export default Layout;
