import React from "react";
import Button from "./Button";

function Product({ val, mover, count }) {
  return (
    <div className="w-full py-10 md:py-20 h-auto md:h-[23rem] text-white">
      <div 
        onMouseEnter={() => {mover(count)}} 
        className="max-w-screen-xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0"
      >
        <h1 className="text-3xl md:text-5xl capitalize font-medium mb-4 md:mb-0">{val.title}</h1>
        <div className="dets w-full md:w-1/4">
          <p className="mb-6 md:mb-10">{val.description}</p>
          <div className="flex flex-wrap items-center gap-3 md:gap-5">
            {val.live && <Button title="Live Project" />}
            {val.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;