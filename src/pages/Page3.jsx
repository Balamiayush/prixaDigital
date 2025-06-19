import React from 'react';
import Spline from '@splinetool/react-spline';

const Page3 = () => {
  return (
    <div className="section">
      <p className=' absolute top-[-4rem] lg:top-5 text-white lg:text-[3rem] font-semibold text-3xl'>The X That Defines Us</p>
      <div className="padding-global">
        <div className="container-default sticky">
          <div className="sticky-container">
            <div className="spline-scene-2">
              <Spline scene="https://prod.spline.design/SOpCtg02h6wgCyPG/scene.splinecode" />
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

            <div className="scrolling-features">
              <div className="feature-scrolling right second-features">
                <img src="images/visua-storytelling.webp" alt="" className="image-3" />
                <h3 className="heading-3">Visual<br />Storytelling</h3>
                <div className="paragraph">
                  We turn complex ideas into compelling stories that resonate with your audience, forging deeper emotional connections.
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
