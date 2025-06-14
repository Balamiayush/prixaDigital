import React from "react";

const Page4 = () => {
  return (
    <section className="section services-section ">
      <div className="padding-global">
        <div className="container-default enterise-title">
          <h2 className="statement1">Enterprise-Grade Technology</h2>
          <div className="paragraph center">
            At Prixa, we build scalable, secure, and efficient digital
            solutions that power the future of your business.
          </div>
        </div>
      
        <div className="bg-wrapper flex-col w-full h-screen relative">
              <div class="w-[90%] h-[60%] rounded-lg mt-10  sticky top-[10%]  bg-red-500"></div>
    <div class="w-[90%] h-[60%] rounded-lg   sticky top-[15%]  bg-green-500"></div>
    <div class="w-[90%] h-[60%] rounded-lg   sticky top-[20%]  bg-blue-500"></div>
    <div class="w-[90%] h-[60%] rounded-lg   sticky top-[25%]  bg-purple-500"></div>
    <div class="w-[90%] h-[60%] rounded-lg   sticky top-[30%]  bg-orange-500"></div>
          <div className="circle-logo top">
            <img
              src="images/prixa-logo.webp"
              loading="lazy"
              alt="Prixa logo"
              className="image-5"
            />
          </div>

          <div className="circle-logo" />

          <img
            src="images/bg-blur-enterprise.webp"
            loading="lazy"
            sizes="(max-width: 2878px) 100vw, 2878px"
            srcSet="
              images/bg-blur-enterprise-p-500.webp 500w,
              images/bg-blur-enterprise-p-800.webp 800w,
              images/bg-blur-enterprise-p-1080.webp 1080w,
              images/bg-blur-enterprise-p-1600.webp 1600w,
              images/bg-blur-enterprise-p-2000.webp 2000w,
              images/bg-blur-enterprise-p-2600.webp 2600w,
              images/bg-blur-enterprise.webp 2878w
            "
            alt="Enterprise blur background"
            className="bg-enterprise image-4"
          />
        </div>
      </div>
    </section>
  );
};

export default Page4;

