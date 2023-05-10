import React from "react";

const Navigation = () => {
  return (
    <>
      <div className="border-[1px] rounded-full  bg-black h-[150px] mb-10 w-[150px] circle flex items-center justify-center">
        <span className="text-blue-600 text-[40px] font-bold">M</span>
        <span className="text-red-600 text-[35px] font-bold">e</span>
        <span className="text-yellow-400 text-[40px] font-bold">M</span>
        <span className="text-green-600 text-[35px] font-bold">e</span>
        <div className="triangle bg-green-600"></div>
        <div className="triangle2 bg-red-600"></div>
        <div className="triangle3 bg-yellow-400"></div>
        <div className="triangle4 bg-blue-600"></div>
      </div>
      <p className="text-red-600 mb-8 ">{`Note: You're responsible for what you do with this`}</p>
    </>
  );
};

export default Navigation;
