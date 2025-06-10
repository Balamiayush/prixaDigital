import Spline from '@splinetool/react-spline';
import React from 'react';


const Home = () => {
  return (
    <div className="section">
      
      <div className="padding-global">
        <div className="container-default">
          <div className="hero-text">
            <h1
              letters-slide-up=""
              text-split=""
              data-w-id="f7af51ce-8c5e-d70d-c5f1-a5e72ce8a4d7"
              style={{
                transform: 'translate3d(0, -30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                opacity: 0,
              }}
              className="heading hero-h1"
            >
              Infinite<span className="text-span"> Ideas</span>
            </h1>
            <div words-slide-up="" text-split="" className="text-block">
              Flawless Execution
            </div>
          </div>
        </div>
      </div>
      <div className="bg-wrapper">
        <div className="fade-out-hero"></div>
        <div   className="spline-scene">
        <Spline
        data-w-id="2345e543-50b5-bdc7-1558-a6ded4438324"
        data-animation-type="spline"
        scene="https://prod.spline.design/EE5SleQXGbfaqdY0/scene.splinecode"
        >
          <canvas></canvas>
        </Spline>
            </div>
      </div>
    </div>
  );
};

export default Home;
