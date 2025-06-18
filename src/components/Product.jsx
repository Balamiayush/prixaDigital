import React from "react";
import Button from "./button/Button";

function Product({ val, mover, count }) {
  return (
    <div className="w-full relative lg:top-[4rem]   left-10 py-10 md:py-20 h-auto md:h-[20rem]  text-white lg:mb-10">
      <div
        onMouseEnter={() => { mover(count) }}
        className="max-w-screen-xl  md:px-6 flex flex-col md:flex-row items-center md:items-center justify-between overflow-hidden"
      >
        <h1 className="titleProduct  capitalize font-medium mb-4 md:mb-0">{val.title}</h1>
        <div className="dets w-full md:w-1/4">
          <p className="mb-6 md:mb-10">{val.description}</p>
          <div className="flex items-center gap-3 md:gap-5">
            {val.live && (
              <Button
                text="Case Study"
                val="case"
                className=""
                src={`/portfolio/${val.title.toLowerCase().replace(/\s+/g, "-")}`}
              />

            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;