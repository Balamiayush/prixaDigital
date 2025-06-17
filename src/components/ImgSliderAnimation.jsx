import { motion } from 'framer-motion'
import React from 'react'


const ImgSliderAnimation = () => {
  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
  whileInView={{
    x: 0,
    opacity: 1,
  }}
  
  transition={{
    duration: 1.5,
  }}   
  viewport={{ once: true }} 
    className='flex w-full  flex-col lg:flex-row gap-5 h-full   '>
        <div className="box1 lg:w-1/2 lg:h-[50vh] w-full rounded-lg ">
        <img src="/images/thirdfactorpage2.png" alt="" className='w-full h-full object-cover' />
        </div>
        <div className="box1 lg:w-1/2 lg:h-[50vh] w-full rounded-lg ">
        <img src="/images/thirdfactorpage2.png" alt="" className='w-full h-full object-cover' />
        </div>
        <div className="box1 lg:w-1/2 lg:h-[50vh] w-full rounded-lg ">
        <img src="/images/thirdfactorpage2.png" alt="" className='w-full h-full object-cover' />
        </div>
    </motion.div>
  )
}

export default ImgSliderAnimation