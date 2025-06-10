
import React from 'react';

const Page2 = () => {
  return (
    <div className="section statement-section">
      <div className="padding-global">
        <div className="container-default statemennt">
          <h2
            scrub-each-word=""
            text-split=""
            className="statement"
          >
            We build <span className="text-span-2 custom-pink">Immersive</span>{' '}
            experiences that <span className="text-span-3 custom-blue">elevate</span>{' '}
            brands, drive engagement, and deliver measurable results.
          </h2>
        </div>

        <div className="bg-wrapper statement-blur-circle">
          <img
            src="images/Ellipse-21.png"
            loading="lazy"
            data-w-id="b8f98891-2299-1f59-2587-7569ea299a65"
            sizes="(max-width: 2072px) 100vw, 2072px"
            alt=""
            srcSet="
              images/Ellipse-21-p-500.png 500w,
              images/Ellipse-21-p-800.png 800w,
              images/Ellipse-21-p-1080.png 1080w,
              images/Ellipse-21-p-1600.png 1600w,
              images/Ellipse-21-p-2000.png 2000w,
              images/Ellipse-21.png 2072w
            "
            className="image"
          />
          <img
            src="images/Ellipse-22.png"
            loading="lazy"
            data-w-id="b8f98891-2299-1f59-2587-7569ea299a66"
            sizes="(max-width: 2328px) 100vw, 2328px"
            alt=""
            srcSet="
              images/Ellipse-22-p-500.png 500w,
              images/Ellipse-22-p-800.png 800w,
              images/Ellipse-22-p-1080.png 1080w,
              images/Ellipse-22-p-1600.png 1600w,
              images/Ellipse-22-p-2000.png 2000w,
              images/Ellipse-22.png 2328w
            "
            className="image-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Page2;
