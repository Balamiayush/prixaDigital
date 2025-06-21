import React from 'react';
import { motion } from 'framer-motion';

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
          {/* Animated Rotating Image 1 */}
          <motion.img
            src="images/Ellipse-21.webp"
            loading="lazy"
            sizes="(max-width: 2072px) 100vw, 2072px"
            alt="Decorative rotating element"
            srcSet="
              images/Ellipse-21-p-500.webp 500w,
              images/Ellipse-21-p-800.webp 800w,
              images/Ellipse-21-p-1080.webp 1080w,
              images/Ellipse-21-p-1600.webp 1600w,
              images/Ellipse-21-p-2000.webp 2000w,
              images/Ellipse-21.webp 2072w
            "
            className="image"
            initial={{ rotateZ: 180 }}
            animate={{ rotateZ: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              willChange: 'transform',
              transformStyle: 'preserve-3d'
            }}
          />

          {/* Animated Rotating Image 2 */}
          <motion.img
            src="images/Ellipse-22.webp"
            loading="lazy"
            sizes="(max-width: 2328px) 100vw, 2328px"
            alt=""
            srcSet="
              images/Ellipse-22-p-500.webp 500w,
              images/Ellipse-22-p-800.webp 800w,
              images/Ellipse-22-p-1080.webp 1080w,
              images/Ellipse-22-p-1600.webp 1600w,
              images/Ellipse-22-p-2000.webp 2000w,
              images/Ellipse-22.webp 2328w
            "
            className="image-2"
            initial={{ rotateZ: 0 }}
            animate={{ rotateZ: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              willChange: 'transform',
              transformStyle: 'preserve-3d'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Page2;