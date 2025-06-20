import React from "react";
import Button from "./button/Button";

function Product({ val, mover, count }) {
  return (
    <div className="w-full  max-w-screen mb-10  relative flex items-center justify-center    text-white h-[20rem]">
      <div
        onMouseEnter={() => { mover(count) }}
        className="max-w-screen w-full   flex  items-center  justify-between overflow-hidden"
      >
        <h1 className="titleProduct  capitalize font-medium ">{val.title}</h1>
        <div className="dets w-full md:w-1/4">
          <p className=" mb-10">{val.description}</p>
          <div className="flex items-center ">
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