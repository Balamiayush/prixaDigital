import React from 'react';
import './css/normalize.css';
import './css/webflow.css';
import './css/prixa-digital.webflow.css';
// helof
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Page6 from './pages/Page6';
import Page7 from './pages/Page7';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import Flip from 'gsap/Flip';
import { useGSAP } from '@gsap/react';
import Loader from './pages/Loader';

gsap.registerPlugin(useGSAP, ScrollTrigger, Flip);

const App = () => {
  useGSAP(() => {
    // Split text into spans
    let typeSplit = new SplitType("[text-split]", {
      types: "words, chars",
      tagName: "span"
    });

    // Link timelines to scroll position
    function createScrollTrigger(triggerElement, timeline) {
      // Reset tl when scroll out of view past bottom of screen
      ScrollTrigger.create({
        trigger: triggerElement,
        start: "top bottom",
        onLeaveBack: () => {
          timeline.progress(0);
          timeline.pause();
        }
      });
      // Play tl when scrolled into view (60% from top of screen)
      ScrollTrigger.create({
        trigger: triggerElement,
        start: "top 60%",
        onEnter: () => timeline.play()
      });
    }

    document.querySelectorAll("[words-slide-up]").forEach((element) => {
      let tl = gsap.timeline({ paused: true });
      tl.from(element.querySelectorAll(".word"), { 
        opacity: 0, 
        yPercent: 100, 
        duration: 0.5, 
        ease: "back.out(2)", 
        stagger: { amount: 0.5 } 
      });
      createScrollTrigger(element, tl);
    });

    document.querySelectorAll("[words-rotate-in]").forEach((element) => {
      let tl = gsap.timeline({ paused: true });
      tl.set(element.querySelectorAll(".word"), { transformPerspective: 1000 });
      tl.from(element.querySelectorAll(".word"), { 
        rotationX: -90, 
        duration: 0.6, 
        ease: "power2.out", 
        stagger: { amount: 0.6 } 
      });
      createScrollTrigger(element, tl);
    });

    document.querySelectorAll("[words-slide-from-right]").forEach((element) => {
      let tl = gsap.timeline({ paused: true });
      tl.from(element.querySelectorAll(".word"), { 
        opacity: 0, 
        x: "1em", 
        duration: 0.6, 
        ease: "power2.out", 
        stagger: { amount: 0.2 } 
      });
      createScrollTrigger(element, tl);
    });

    document.querySelectorAll("[letters-slide-up]").forEach((element) => {
      let tl = gsap.timeline({ paused: true });
      tl.from(element.querySelectorAll(".char"), { 
        yPercent: 100, 
        duration: 0.2, 
        ease: "power1.out", 
        stagger: { amount: 0.6 } 
      });
      createScrollTrigger(element, tl);
    });

    document.querySelectorAll("[letters-slide-down]").forEach((element) => {
      let tl = gsap.timeline({ paused: true });
      tl.from(element.querySelectorAll(".char"), { 
        yPercent: -120, 
        duration: 0.3, 
        ease: "power1.out", 
        stagger: { amount: 0.7 } 
      });
      createScrollTrigger(element, tl);
    });

    document.querySelectorAll("[letters-fade-in]").forEach((element) => {
      let tl = gsap.timeline({ paused: true });
      tl.from(element.querySelectorAll(".char"), { 
        opacity: 0, 
        duration: 0.1, 
        ease: "power1.out", 
        stagger: { amount: 0.2 } 
      });
      createScrollTrigger(element, tl);
    });

    document.querySelectorAll("[letters-fade-in-random]").forEach((element) => {
      let tl = gsap.timeline({ paused: true });
      tl.from(element.querySelectorAll(".char"), { 
        opacity: 0, 
        duration: 0.05, 
        ease: "power1.out", 
        stagger: { amount: 0.4, from: "random" } 
      });
      createScrollTrigger(element, tl);
    });

    document.querySelectorAll("[scrub-each-word]").forEach((element) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "top center",
          scrub: true
        }
      });
      tl.from(element.querySelectorAll(".word"), { 
        opacity: 0.2, 
        duration: 1, 
        ease: "power1.out", 
        stagger: { each: 1 } 
      });
    });

    // Avoid flash of unstyled content
    gsap.set("[text-split]", { opacity: 1 });
  }, []);

  return (
    <div className="body bg-black">
      <div className="page-wrapper">
        <div className="main-wrapper">
          <Loader />
          <Navbar />
          <Home />
          <Page2 />
          <Page3 />
          <Page4 />
          <Page5 />
          <Page6 /> 
          <Page7 />
        </div>
      </div>
    </div>
  );
}

export default App;