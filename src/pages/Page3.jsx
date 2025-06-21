import React, { useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Page3 = () => {
  const scrollRef = useRef(null);
  const animRef = useRef(null);

  useGSAP(() => {
    const items = gsap.utils.toArray('.hover-1');

    gsap.to(items, {
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: scrollRef.current,
        start: 'top top',
        end: 'bottom 90%',
        scrub: 4,
        markers: true,
      },
    });
  }, []);

  return (
    <div className="section relative">
      <p className="absolute top-[-3rem] md:top-[2vw] text-white lg:text-[4rem] font-semibold text-3xl">
        The X That Defines Us
      </p>

      <div className="padding-global">
        <div className="container-default sticky">
          <div className="sticky-container">
            {/* 3D Spline */}
            <div className="spline-scene-2">
              <Spline scene="https://prod.spline.design/SOpCtg02h6wgCyPG/scene.splinecode" />
            </div>

            {/* Scrolling content */}
            <div className="scrolling-features">
              <div className="_3-col-sticky-div">
                <div ref={scrollRef} className="first-section">
                  <div ref={animRef} className="hover-1">
                    <div className="hover-text-x">Innovation</div>
                    <div className="hover-cirle"></div>
                  </div>

                  <div className="hover-1 hover-2">
                    <div className="hover-cirle"></div>
                    <div className="hover-text-x">Design</div>
                  </div>

                  <div className="hover-1 hover-2 hover-3 hover-4">
                    <div className="hover-text-x">Data</div>
                    <div className="hover-cirle"></div>
                  </div>

                  <div className="hover-1 hover-2 hover-3">
                    <div className="hover-cirle"></div>
                    <div className="hover-text-x">Design</div>
                  </div>
                </div>
              </div>

              {/* Feature sections */}
              <div className="feature-scrolling right">
                <img src="images/eye-popping.webp" alt="" className="image-3" />
                <h3 className="heading-3">Eye-popping Design</h3>
                <div className="paragraph">
                  Our designs push boundaries—bold, unique, and tailored to make an unforgettable impact on every screen.
                </div>
              </div>

              <div className="feature-scrolling">
                <img src="images/visual-icon.webp" alt="" className="image-3" />
                <h3 className="heading-3">Visual<br />Extravaganza</h3>
                <div className="paragraph">
                  We blend stunning visuals with powerful narratives to captivate and engage your audience from the very first glance.
                </div>
              </div>
            </div>

            {/* Second scrolling feature block */}
            <div className="scrolling-features">
              <div className="feature-scrolling right second-features">
                <img src="images/visua-storytelling.webp" alt="" className="image-3" />
                <h3 className="heading-3">Visual<br />Storytelling</h3>
                <div className="paragraph">
                  We turn complex ideas into compelling stories that resonate with your audience, forging connections.
                </div>
              </div>

              <div className="feature-scrolling second-features">
                <img src="images/data-driven.webp" alt="" className="image-3" />
                <h3 className="heading-3">Data-Driven Marketing</h3>
                <div className="paragraph">
                  We blend stunning visuals with powerful narratives to captivate and engage your audience from the very first glance.
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
