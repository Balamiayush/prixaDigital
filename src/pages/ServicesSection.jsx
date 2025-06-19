import React from "react";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const services = [
    {
      title: "Web Development",
      img: "/images/webdev.png",
      des: "I create custom-coded, animation-rich websites that reflect your brand's identity, captivate visitors, and drive conversions through seamless, engaging user experiences.",
      subTitle: ["CMS Integration", "Motion & Animations", "3D Development"],
    },
    {
      title: "AI Solutions",
      img: "/images/ai.png",
      des: "From intelligent chatbots to automation tools, I craft AI-powered solutions that streamline operations and elevate customer experiences.",
      subTitle: ["AI Chatbot", "Custom APIs", "Data Automation"],
    },
    {
      title: "UI/UX Design",
      img: "/images/uiux.png",
      des: "Crafting intuitive user interfaces and meaningful user experiences that make products both beautiful and usable.",
      subTitle: ["Wireframing", "Prototyping", "Interaction Design"],
    },
    {
      title: "Mobile Apps",
      img: "/images/mobile.png",

      des: "Bringing your ideas to the palms of users with seamless cross-platform mobile applications that deliver impact and performance.",
      subTitle: ["React Native", "Flutter", "Performance Optimization"],
    },
    {
      title: "SEO",
      img: "/images/seo.png",
      des: "Optimize your visibility on search engines with smart keyword strategies and technical SEO best practices.",
      subTitle: ["On-Page SEO", "Performance Audits", "Technical Optimization"],
    },
    {

      title: "Digital Marketing",
      img: "/images/digital.png",
      des: "Drive traffic and conversions with tailored digital campaigns across channels like Google Ads, Meta, and email funnels.",
      subTitle: ["Google Ads", "Content Strategy", "Analytics"],
    },
    {
      title: "Prixa Academy",
      img: "/images/academy.png",
      des: "Empowering future innovators with hands-on learning in web, design, AI, and business through practical, guided sessions.",
      subTitle: ["Frontend Training", "UI/UX Workshops", "Mentorship"],
    },
  ];

  return (
    <div className="flex flex-col m-0 p-0  w-full items-center justify-center text-white  relative  ">
      <div className=" text-center  relative top-[-2rem] z-10 flex flex-col gap-2     ">
        <span className="font-bold text-center text-5xl ">
          Enterprise-Grade Technology
        </span>
        <p>At Prixa, we build scalable, secure, and efficient digital solutions that power the future of your business.</p>
      </div>

      {services.map((service, index) => (
        <motion.div
          key={index}

          viewport={{ once: true, amount: 0.3 }}
          className={`w-[90%] h-[65vh] rounded-xl sticky   border border-[#393632] bg-[#080807] flex justify-between `}
          style={{
            top: `
            
            ${index === 6 ? "20%" : 5 + index * 10}%
            
            `,
            willChange: "transform, opacity",
            transform: "translateZ(0)",
            backfaceVisibility: "hidden",
          }}
        >
          <div className="  w-1/2 flex flex-col ">
            <h2 className="text-gray-400 text-sm mb-2 ">({index + 1})</h2>
            <div className="imgs  w-full lg:w-1/2 top-[40%]   relative  lg:static  ">
              <img src={service.img} alt="" className="w-full h-full object-cover" />

            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
            <p className="text-base text-gray-300 max-w-2xl mb-6">{service.des}</p>

            <ul className="flex flex-col gap-5 w-full justify-end  relative top-4">
              {service.subTitle?.map((item, i) => (
                <div className="flex flex-col  items-left justify-end  w-full">
                  <li
                    key={i}
                    className="text-sm  flex   gap-5 items-center"
                  >

                    <span className=" ">
                      {i + 1}
                    </span>
                    <span className="text-lg lg:text-3xl font-semibold">
                      {item}
                    </span>
                  </li>
                  <div className="line border border-[#393632] h-[1px] w-full"></div>
                </div>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ServicesSection;
