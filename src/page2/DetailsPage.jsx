import React from 'react';

const DetailsPage = () => {
    return (
        <div className='w-full h-[50vh]  mx-auto flex p-5 lg:p-10 items-center  justify-between gap-1'>
            <div className=" flex flex-col items-center  ">
                <div className='flex flex-col gap-2'>
                    <p className='lg:text-2xl'>Client</p>
                    <p className='text-[#dadada]'>ThirdFactor.Ai</p>
                    <p className='lg:text-2xl'>Date</p>
                    <p className='text-[#dadada]'>24 March 2025</p>
                    <p className='lg:text-2xl'>Location</p>
                    <p className='text-[#dadada]'>Nepal</p>
                </div>
            </div>
            <div className=" lg:w-1/2 flex flex-col text-[14px] w-[60%]">
                <p className='lg:text-2xl text-left'>Overview</p>
                <p className='lg:w-full'>Third Factor is a modern identity verification platform tailored for the Nepalese market. The goal was to design and build a clean, responsive marketing website that communicates trust, technological sophistication, and local relevance—while also being scalable and easy to manage.</p>
            </div>
        </div>
    );
}

export default DetailsPage;
