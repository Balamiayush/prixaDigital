import React from 'react'
import Button from '../components/button/Button'
const Page2HeroContainer = () => {
    return (
        <div className=" w-full">
            <div className="flex w-full h-full lg:py-10   lg:justify-between lg:px-10  flex-col items-center  lg:flex-row  ">
                <div className="box1 py-10 flex flex-col  lg:gap-5 ">
                    <span className='lg:text-[4rem] text-4xl font-semibold'>ThirdFactor AI</span>
                    <div className=' flex  items-center lg:gap-5 gap-2 '>
                        <Button text={"Website"} />
                        <Button text={"Ai"} />
                        <Button text={"AI Product Design"} />
                    </div>

                </div>
                <div className="box1  flex flex-col items-center ">
                    <p className='text-[15px] w-[80%]' >We build websites that feel just right—for you and your audience.  Whether it’s a bold new brand or a refresh of something familiar, we  focus on clean design, smooth user experience, and real results.</p>
                    <Button text={"Contact Us"} className='bg-white text-black' />
                </div>
            </div>
          <div className="w-full lg:w-[98%] lg:h-screen mx-auto">
            <img src="/images/thirdfactorpage2.png" alt=""  className='w-full h-full object-cover'/>
          </div>
        </div>
    )
}

export default Page2HeroContainer