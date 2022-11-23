import React from "react";
import HomeLink from "./HomeLink";
const Footer = () => {
  return (
    <>
      <div className="flex h-20 bg-secondary pt-4 text-primary pr-10 justify-around">
        <div>
          <HomeLink Linkstyle=" gap-7 hidden sm:flex " />
        </div>
        <div className="text-right flex sm:flex-col items-center ">
          <h1 className=" text-md"> Design and Developed </h1>
          <h1 className="text-md ">
            By... <span className="font-semibold text-primary">Dp_Raj</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
