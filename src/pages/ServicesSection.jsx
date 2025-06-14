import React from "react";
import { motion } from "framer-motion";

const ServicesSection = () => {

  const services = [
   { color: "bg-red-500", title: "Web Development" },
    { color: "bg-green-500", title: "UI/UX Design" },
    { color: "bg-blue-500", title: "Mobile Apps" },
    { color: "bg-purple-500", title: "Brand Strategy" },
    { color: "bg-orange-500", title: "Digital Marketing" },
  ];

  return (
    <div className="relative w-full text-white ">
        
    <div className="flex flex-col w-full items-center space-y-10 pb-20">
      {services.map((color, index) => (
          <motion.div
          key={index}
          initial={{ y: 100, opacity: 0.8 }}
          whileInView={{ 
              y: 0, 
              opacity: 1,
              transition: { 
                  type: "spring", 
                  damping: 15, 
                  stiffness: 100 
            } 
        }}
        viewport={{ once: false }}
        className={`w-[90%] h-[60vh] rounded-xl sticky ${color.color}`}
        style={{ top: `${20 + index * 5}%`  }}
        >
<h2 className="text-left">({index})</h2>

        </motion.div>

))}
    </div>
</div>
  );
};

export default ServicesSection;