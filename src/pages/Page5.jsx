import React, { useState, useEffect } from "react";
import Product from "../components/Product";
import { motion } from "framer-motion";

function Page5() {
  const products = [
    {
      title: "ThirdFactor",
      description:
        "We build websites that feel just right—for you and your audience. Whether it's a bold new brand or a refresh of something familiar, we focus on clean design, smooth user experience, and real results.",
      live: true,
      src: "https://cdn.prod.website-files.com/6842b1dc165c23f2ede76d26/6842b33a8c67691b340e6a95_portfolioimg.png",
      case: false,
    },
    {
      title: "Speak Up Nepal",
      description:
        "The platform for Nepal to express issues in their day to day life and see it change.",
      src: "https://cdn.prod.website-files.com/6842b1dc165c23f2ede76d26/6842d31af65aa521dc16b6a6_speakupnepal.png",
      live: true,
      case: false,
    },
    {
      title: "Bearyfine",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      src: "https://cdn.prod.website-files.com/6842b1dc165c23f2ede76d26/6842d548e1783a1cc5af667d_beary-fine.png",
      live: true,
      case: false,
    },
    {
      title: "Kathmandu Ko Katha",
      description: "connecting dots using stories",
      src: "https://cdn.prod.website-files.com/6842b1dc165c23f2ede76d26/6842d6558e799a77fdc1cda4_kathmandu.png",
      live: false,
      case: false,
    },
  ];

  const [pos, setPos] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mover = (val) => {
    if (!isMobile) {
      setPos(val * 23);
    }
  };

  if (isMobile) {
    return (
      <>
        <div className="section statement-section">
          <div className="padding-global">
            <div className="container-default portfolio">
              <div className="portfolio-container">
                {products.map((product, index) => (
                  <div key={index} className="single-portfolio">
                    <div className="single-project-portfolio">
                      <div role="list" className="w-dyn-items">
                        <div role="listitem" className="single-portfolio w-dyn-item">
                          <h1 className="portfolio-heading">{product.title}</h1>
                          <img
                            src={product.src}
                            loading="lazy"
                            alt=""
                            className="portfolio-img"
                          />
                          <div className="right-wrapper-portfolio">
                            <h1 className="paragraph-l portfolio-p">{product.description}</h1>
                            <a href="#" className="button w-inline-block">
                              <div className="text-block-2">View Project</div>
                              <img
                                src="images/arrow-dark.svg"
                                loading="lazy"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="section footer">
          <div className="padding-global footer">
            <div className="container-default final-cta text-center">
              <h2 className="statement">hello@prixadigital.com</h2>
              <div className="paragraph center">
                © 2011–2023 Prixa Digital. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Desktop with animation
  return (
    <div className="mt-20 lg:mt-32 relative">
      {products.map((val, index) => (
        <Product key={index} val={val} mover={mover} count={index} />
      ))}

      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + "rem" }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window absolute -right-[20%] w-1/2 h-1/2 lg:w-[32rem] lg:h-[23rem] lg:left-[44%] overflow-hidden"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              animate={{ y: -pos + "rem" }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              className="w-full h-full"
            >
              <img
                className="absolute object-cover w-full h-full"
                src={product.src}
                alt={`Project ${index + 1}`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Page5;
