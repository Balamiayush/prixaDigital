import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';

// Lazy load the Spline component
const LazySpline = lazy(() => import('@splinetool/react-spline'));

const Page3 = () => {
  const splineRef = useRef(null);
  const [loadSpline, setLoadSpline] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setLoadSpline(true);
      }
    });

    if (splineRef.current) observer.observe(splineRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="section">
      <div className="padding-global">
        <div className="container-default sticky">
          <div className="sticky-container">
            <div className="spline-scene-2" ref={splineRef}>
              {loadSpline && (
                <Suspense fallback={<div className="loading">Loading 3D...</div>}>
                  <LazySpline scene="https://prod.spline.design/SOpCtg02h6wgCyPG/scene.splinecode" />
                </Suspense>
              )}
            </div>

            <div className="scrolling-features">
              <div className="_3-col-sticky-div">
                <div className="first-section">
                  <div className="hover-1">
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

              <div className="feature-scrolling right">
                <img src="images/eye-popping.png" loading="lazy" alt="" className="image-3" />
                <h3 className="heading-3">Eye-popping Design</h3>
                <div className="paragraph">
                  Our designs push boundaries—bold, unique, and tailored to make an unforgettable impact on every screen.
                </div>
              </div>

              <div className="feature-scrolling">
                <img src="images/visual-icon.png" loading="lazy" alt="" className="image-3" />
                <h3 className="heading-3">Visual<br />Extravaganza</h3>
                <div className="paragraph">
                  We blend stunning visuals with powerful narratives to captivate and engage your audience from the very first glance.
                </div>
              </div>
            </div>

            <div className="scrolling-features">
              <div className="feature-scrolling right second-features">
                <img src="images/visua-storytelling.png" loading="lazy" alt="" className="image-3" />
                <h3 className="heading-3">Visual<br />Storytelling</h3>
                <div className="paragraph">
                  We turn complex ideas into compelling stories that resonate with your audience, forging deeper emotional connections.
                </div>
              </div>

              <div className="feature-scrolling second-features">
                <img src="images/data-driven.png" loading="lazy" alt="" className="image-3" />
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
//fsfsf