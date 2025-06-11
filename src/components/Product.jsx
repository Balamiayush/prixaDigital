import React from "react";
import Button from "./button/Button";

function Product({ val, mover, count }) {
  return (
    <div className="w-full relative lg:top-[4rem]   left-10 py-10 md:py-20 h-auto md:h-[23rem] text-white">
      <div 
        onMouseEnter={() => {mover(count)}} 
        className="max-w-screen-xl  md:px-6 flex flex-col md:flex-row items-center md:items-center justify-between "
      >
        <h1 className="titleProduct md:text-5xl capitalize font-medium mb-4 md:mb-0">{val.title}</h1>
        <div className="dets w-full md:w-1/4">
          <p className="mb-6 md:mb-10">{val.description}</p>
          <div className="flex flex-wrap items-center gap-3 md:gap-5">
            {val.live &&   <Button text="Live Project " src={val.link} />}
            {val.case &&  <Button text="Case Study " src={val.link} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;