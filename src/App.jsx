import React, { useEffect } from 'react';
import './css/normalize.css';
import './css/webflow.css';
import './css/prixa-digital.webflow.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import ServicesSection from './pages/ServicesSection';
import Page5 from './pages/Page5';
import Page6 from './pages/Page6';
import Page7 from './pages/Page7';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import Flip from 'gsap/Flip';
import { useGSAP } from '@gsap/react';

// Register GSAP plugins
gsap.registerPlugin(useGSAP, ScrollTrigger, Flip);

const App = () => {
  useGSAP(() => {
    // Wait for fonts to load before running animations
    document.fonts.ready.then(() => {
      // Split text only once
      const splitInstances = [];
      document.querySelectorAll('[text-split]').forEach(el => {
        const split = new SplitType(el, { types: 'words, chars', tagName: 'span' });
        splitInstances.push(split);
      });

      // Helper function to create a scroll-triggered timeline
      const createScrollTrigger = (triggerElement, timeline) => {
        ScrollTrigger.create({
          trigger: triggerElement,
          start: 'top bottom',
          onLeaveBack: () => {
            timeline.progress(0);
            timeline.pause();
          }
        });
        ScrollTrigger.create({
          trigger: triggerElement,
          start: 'top 60%',
          onEnter: () => timeline.play()
        });
      };

      // Animation types
      const animationMap = {
        '[words-slide-up]': (el) => {
          const tl = gsap.timeline({ paused: true });
          tl.from(el.querySelectorAll('.word'), {
            opacity: 0,
            yPercent: 100,
            duration: 0.5,
            ease: 'back.out(2)',
            stagger: { amount: 0.5 }
          });
          createScrollTrigger(el, tl);
        },

        '[words-rotate-in]': (el) => {
          const tl = gsap.timeline({ paused: true });
          tl.set(el.querySelectorAll('.word'), { transformPerspective: 1000 });
          tl.from(el.querySelectorAll('.word'), {
            rotationX: -90,
            duration: 0.6,
            ease: 'power2.out',
            stagger: { amount: 0.6 }
          });
          createScrollTrigger(el, tl);
        },

        '[scrub-each-word]': (el) => {
          gsap.timeline({
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
              end: 'top center',
              scrub: true
            }
          }).from(el.querySelectorAll('.word'), {
            opacity: 0.2,
            duration: 1,
            ease: 'power1.out',
            stagger: { each: 1 }
          });
        }
      };

      // Apply animations
      Object.entries(animationMap).forEach(([selector, animate]) => {
        document.querySelectorAll(selector).forEach(animate);
      });

      // Ensure initial visibility
      gsap.set('[text-split]', { opacity: 1 });

      // Cleanup
      return () => {
        splitInstances.forEach(split => split.revert());
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    });
  }, []);

  return (
    <div className="body bg-black">
      <div className="page-wrapper">
        <div className="main-wrapper">
          <Navbar />
          <Home />
          <Page2 />
          <Page3 />
          <ServicesSection />
          <Page5 />
          <Page6 />
          <Page7 />
        </div>
      </div>
    </div>
  );
};

export default App;
