import React from 'react';
import Button from '../components/button/Button';
import { motion } from 'framer-motion';

const Page2HeroContainer = ({ product }) => {
  const { title, description, tags, image } = product;

  return (
    <div className="w-full">
      <div className="flex w-full h-full lg:py-5   lg:justify-between lg:px-10 flex-col items-center lg:flex-row">
        <div className="box1 py-10 flex flex-col lg:gap-5">
          <span className='lg:text-[4rem] text-4xl font-semibold'>{title}</span>
          <div className='flex items-center lg:gap-5 gap-2'>
            {tags.map((tag, index) => (
              <Button key={index} text={tag}  />
            ))}
          </div>
        </div>
        <div className="box1 flex flex-col items-center">
          <p className='text-[15px] w-[80%]'>{description}</p>
          <Button text={"Contact Us"} className='bg-white' />
        </div>
      </div>
      <motion.div className="w-full px-2 lg:px-5 mt-2 lg:mt-0 h-full mx-auto">
        <img src={image} alt={title} className='w-full h-full object-cover' />
      </motion.div>
    </div>
  );
};

export default Page2HeroContainer;
