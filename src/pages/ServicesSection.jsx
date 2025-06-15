import React from "react";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const services = [
    {
      title: "Web Development",
      des: "A website developed to captivate and convert can elevate your brand to new heights. My custom-coded sites are meticulously crafted to reflect your unique identity, delivering seamless experiences with a focus on animation—keeping your audience engaged and returning.",
      subTitle: ["CMS Integration", "Motion & Animations", "3D Development"],
    },
    {
      title: "AI Solutions",
      des: "From intelligent chatbots to automation tools, I craft AI-powered solutions that streamline operations and elevate customer experiences.",
      subTitle: ["AI Chatbot", "Custom APIs", "Data Automation"],
    },
    {
      title: "UI/UX Design",
      des: "Crafting intuitive user interfaces and meaningful user experiences that make products both beautiful and usable.",
      subTitle: ["Wireframing", "Prototyping", "Interaction Design"],
    },
    {
      title: "Mobile Apps",
      des: "Bringing your ideas to the palms of users with seamless cross-platform mobile applications that deliver impact and performance.",
      subTitle: ["React Native", "Flutter", "Performance Optimization"],
    },
    {
      title: "SEO",
      des: "Optimize your visibility on search engines with smart keyword strategies and technical SEO best practices.",
      subTitle: ["On-Page SEO", "Performance Audits", "Technical Optimization"],
    },
    {
      title: "Digital Marketing",
      des: "Drive traffic and conversions with tailored digital campaigns across channels like Google Ads, Meta, and email funnels.",
      subTitle: ["Google Ads", "Content Strategy", "Analytics"],
    },
    {
      title: "Prixa Academy",
      des: "Empowering future innovators with hands-on learning in web, design, AI, and business through practical, guided sessions.",
      subTitle: ["Frontend Training", "UI/UX Workshops", "Mentorship"],
    },
  ];

  return (
    <div className="flex flex-col w-full items-center justify-center text-white space-y-[2rem] relative pb-40 ">
      <span className="font-bold text-center  text-5xl z-10 bg-[#080807] py-4">
        Enterprise-Grade <br />
        Technology
      </span>

      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ y: 50,  }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.6,
              ease: [0.76, 0, 0.24, 1],
              delay: index * 0.5,
            },
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-[90%] h-[65vh] rounded-xl sticky  border border-[#393632] bg-[#080807] flex justify-between p-10"
          style={{
            top: `${10+ index * 10}%`,
            willChange: "transform, opacity",
            transform: "translateZ(0)",
            backfaceVisibility: "hidden",
          }}
        >
          <h2 className="text-gray-400 text-sm mb-2 ">({index + 1})</h2>
          <div className="flex flex-col">
          <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
          <p className="text-base text-gray-300 max-w-2xl mb-6">{service.des}</p>

          <ul className="flex flex-col gap-5 w-full justify-end">
            {service.subTitle?.map((item, i) => (
              <div className="flex flex-col  items-left justify-end  w-full">
              <li
              key={i}
              className="text-sm  flex   gap-5 items-start"
              >

                <span className=" ">
                  {i+1}
                  </span>
                  <span className="text-3xl font-semibold">     
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
