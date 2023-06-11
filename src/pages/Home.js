import React from "react";
import HomeLink from "./HomeLink";
import ResumeButton from "./Resume_button";
import dnm from "../IMG/dnm.jpeg";
import bds from "../IMG/bds.jpeg";
import about from "../IMG/about.jpeg";
import kbrd from "../IMG/kbrd.jpeg";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <>
      <div
        id="Home"
        className="grid bg-primary sm:grid-cols-1 gap-16 sm:gap-28 md:grid-cols-2 md:gap-40 lg:gap-0 relative shadow-3xl top-2"
      >
        <div className=" sm:h-60 mx-auto md:order-2 sm:mt-20 ">
          <div className=" gallery grid w-64 sm:py-20 lg:py-12 lg:mr-20 mt-20 sm:mt-2 md:mr-10 md:mt-[-3rem]">
            <img
              className="rounded-3xl object-cover w-[95%] sm:w-full aspect-square border-primary border-2 translate-x-[-2rem]"
              src={dnm}
              alt="dp"
            />
            <img
              className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-3xl object-cover w-[95%] sm:w-full aspect-square border-primary border-2 translate-x-[-2rem]"
              src={about}
              alt="dp"
            />
            <img
              className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 rounded-3xl object-cover w-[95%] sm:w-full aspect-square border-primary border-2 translate-x-[-2rem]"
              src={bds}
              alt="yoyo"
            />
            <img
              className="rounded-3xl object-cover w-[95%] sm:w-full aspect-square border-primary border-2 translate-x-[-2rem]"
              src={kbrd}
              alt="yoyo"
            />

            <div className=" bg-fourth w-full h-[25vh] sm:h-80 z-1 absolute rounded-tr-full rounded-bl-full right-4 top-12 md:w-1/2 md:top-10 skew-y-6 md:right-5 shadow-lg shadow-indigo-500/100">
              <div className=" backdrop-blur-lg w-full h-full rounded-tr-full rounded-bl-full shadow-lg shadow-indigo-500/100 "></div>
            </div>
          </div>
        </div>
        <div className="z-10 flex items-center flex-col pb-20 sm:py-20 sm:gap-1 md:gap-0 mx-auto text-center">
          <h1 className="text-secondary text-2xl ">
            {/* Hello, I ’ m */}
            <Typewriter
              cursor
              cursorStyle="_"
              typeSpeed={200}
              words={["Hello, I ’ m"]}
            />
          </h1>
          <h1 className="font-bold text-tertiory text-2xl sm:text-4xl md:text-2xl lg:text-4xl blur-[0.4px] ">
            <span className="sm:text-7xl">D</span>HARMPAL{" "}
            <span className="sm:text-6xl">K</span>UMAR
          </h1>
          <p>
            Call me <span className="sm:text-sm font-bold">👌Dp</span>
          </p>
          <h1>
            <span className="text-blue-500 font-bold sm:text-4xl block text-left ">
              ----
            </span>
            <p className="text-xl sm:text-2xl md:text-xl text-red-500 font-semibold">
              <Typewriter
                loop
                cursor
                cursorStyle="🖊️"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                words={[
                  "React Js Developer",
                  " Frontend Engineer",
                  "MERN stack Developer",
                ]}
              />
            </p>
            <span className="text-blue-500 font-bold sm:text-4xl block text-right">
              ----
            </span>
          </h1>

          <ResumeButton title="Download Resume" />
          <HomeLink Linkstyle="flex pt-5 gap-7" />
        </div>
      </div>
    </>
  );
};

export default Home;
