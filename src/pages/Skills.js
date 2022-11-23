import React from "react";
import Star from "./Star";
import LayersIcon from "@mui/icons-material/Layers";
import MenuBookIcon from "@mui/icons-material/MenuBook";
const Projects = () => {
  const Front_End = [
    { color: "text-yellow-500" },
    { color: "text-yellow-500" },
    { color: "text-yellow-500" },
    { color: "text-yellow-500" },
    { color: "text-gray-300 dark:text-gray-500" },
  ];
  const Back_End = [
    { color: "text-yellow-500" },
    { color: "text-yellow-500" },
    { color: "text-yellow-500" },
    { color: "text-gray-300 dark:text-gray-500" },
    { color: "text-gray-300 dark:text-gray-500" },
  ];

  return (
    <>
      <div id="Skills" className=" bg-primary py-10">
        <div className="">
          <h1 className="rounded-xl border-t-4 bg-gradient-to-l from-green-500 via-blue-500 to-purple-600 border-fuchsia-500 shadow-[10px_10px_47px_rgba(30,64,175),-0px_-0px_0px_rgba(255,254,255)] text-4xl text-white tracking-wider font-bold text-center w-40 mx-auto py-1 px-2 ">
            Skills
          </h1>
          <p className=" text-xl font-semibold text-center text-secondary/80 py-5">
            I like to code things from scratch, and enjoy bringing ideas to life
            in the browser. <br /> I am also good in{" "}
            <span className=" text-fourth px-2">Data Structure</span> and{" "}
            <span className=" text-fourth px-2">Algorithm</span>
          </p>
        </div>
        <div className="gap-10 md:gap-0 grid sm:grid-cols-2 md:grid-cols-3 lg:mx-40">
          <div className="card-2 border-b-4 border-blue-800 grid grid-cols-1 w-[220px] mx-auto p-1 rounded-xl h-96 shadow-[10px_10px_47px_rgba(30,64,175),-0px_-0px_0px_rgba(255,254,255)]">
            <div className=" rounded-t-xl  bg-gradient-to-tl from-green-300 via-blue-500 to-purple-600 rounded-br-[9rem] h-[200px] relative">
              <h1 className="text-[5rem] font-[1000] text-white rounded-full w-1/2 absolute top-5 sm:top-4 left-5 sm:left-8">
                {"</>"}
              </h1>
            </div>
            <div className="">
              <h1 className="text-2xl font-bold text-center text-secondary">
                Front_End
              </h1>
              <div className="flex flex-col sm:pt-2 font-semibold">
                <div className="flex gap-5 justify-center">
                  <h1>Html</h1>
                  <h1>Css</h1>
                  <h1>JavaScript</h1>
                </div>
                <div className="flex gap-2 justify-center">
                  <h1>React Js</h1>
                  <h1>TailWind</h1>
                  <h1>BootStrap</h1>
                </div>
                <div className="flex sm:gap-5 justify-center">
                  <h1>Sass</h1>
                </div>
              </div>
              <Star star={Front_End} />
            </div>
          </div>
          {/* ________________________SECOND____________________________ */}
          <div className="card-2 border-b-4 border-green-800 grid grid-cols-1 w-[220px] mx-auto p-1 rounded-xl h-96 shadow-[10px_10px_47px_rgba(22,101,52),-0px_-0px_0px_rgba(22,101,52)]">
            <div className=" bg-gradient-to-tl from-emerald-800 to-lime-400 rounded-t-xl rounded-br-[9rem] h-[200px] relative">
              <LayersIcon
                style={{ fontSize: "6rem", margin: "2.7rem", color: "white" }}
              />
            </div>
            <div className="">
              <h1 className="text-2xl font-bold text-center text-secondary">
                Backend_End
              </h1>
              <div className="flex flex-col gap-1 pt-2 font-semibold">
                <div className="flex gap-5 justify-center">
                  <h1>Node JS</h1>
                  <h1>Express Js</h1>
                </div>
                <div className="flex justify-center">
                  <h1>MongoDb</h1>
                </div>
                <div className="flex gap-5 justify-center">
                  <h1>Rest_Api</h1>
                  <h1>PostMan</h1>
                </div>
              </div>
              <Star star={Back_End} />
            </div>
          </div>
          {/* ___________________________THIRD________________________________________ */}
          <div className="card-2 border-b-4 border-fuchsia-800 grid grid-cols-1 w-[220px] mx-auto p-1 rounded-xl h-96 shadow-[10px_10px_47px_rgba(134,25,143),-0px_-0px_0px_rgba(255,254,255)]">
            <div className=" bg-gradient-to-tl from-rose-300 via-fuchsia-700 to-indigo-500 rounded-t-xl rounded-br-[9rem] h-[200px] relative">
              {/* <h1 className="text-[5rem] font-[1000] text-white rounded-full w-1/2 absolute top-5 sm:top-4 left-5 sm:left-8">
                {"</>"}
              </h1> */}
              <MenuBookIcon
                style={{ fontSize: "5.5rem", margin: "2.7rem", color: "white" }}
              />
            </div>
            <div className="">
              <h1 className="text-2xl font-bold text-center text-secondary">
                More....
              </h1>
              <div className="flex flex-col gap-1 pt-2 font-semibold">
                <div className="flex gap-5 justify-center">
                  <h1>C++</h1>
                  <h1>Git</h1>
                  <h1>GitHub</h1>
                </div>
                <div className="text-rose-700 mx-auto text-center">
                  <h1>On the Way of Learning----</h1>
                  <h1>
                    Next_JS <span className=" text-fuchsia-700">&</span>{" "}
                    TypScript
                  </h1>
                </div>
              </div>
              <Star star={Front_End} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
