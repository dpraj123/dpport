import React from "react";
import about from "../IMG/about.png";

const About = () => {
  return (
    <>
      <div id="About" className="w-full h-full bg-primary">
        <h1 className=" text-4xl font-bold text-center py-4 ">About Me</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center text-center py-10 bg-[#101630] rounded-3xl">
          <div className=" about_img mx-auto lg:mx-0 lg:ml-auto ">
            <img className="h-96 rounded-3xl bg-gradient-to-b from-pink-200 via-red-400 to-yellow-500 " src={about} alt="yoyo" />
          </div>
          <div className=" col-span-2">
            <h1 className="text-2xl font-serif text-primary p-5 text-start">
              Hi, I'm Dharmpal Kumar,
              <br /> I am workinkg as a web developer since last 2 years as a{" "}
              <span className="">Freelancer</span> software developer .who loves
              to building full-stack applications and learning new technologies,
              I learned almost everything myself because of my curiosity and my
              desire for new experience. <br /> I'm comfortable working with
              both <span className="bg-red-900">Back-End</span> and{" "}
              <span className="bg-red-900">Front-End </span> technologies.
            </h1>
            <div className="text-white ">
              <h2 className="font-semibold text-2xl text-yellow-500 font-mono">
                Educational Qualification
              </h2>
              <table className="border-separate mx-auto w-full lg:w-1/2">
                <tr>
                  <th className="text-rose-500 font-bold rounded-md bg-primary p-3 sm:p-4">
                    Courses
                  </th>
                  <th className="text-rose-500 font-bold rounded-md bg-primary p-3 sm:p-4">
                    Session
                  </th>
                  <th className="text-rose-500 font-bold rounded-md bg-primary p-3 sm:p-4">
                    Where ?
                  </th>
                </tr>
                <tr>
                  <td className="text-green-700 font-bold rounded-md bg-primary p-3 sm:p-4">
                    Matriculate
                  </td>
                  <td className="text-fourth rounded-md bg-primary p-3 sm:p-4 font-semibold">
                    2016-17
                  </td>
                  <td className="text-fourth rounded-md bg-primary p-3 sm:p-4 font-semibold">
                    State Board
                  </td>
                </tr>
                <tr>
                  <td className="text-green-700 font-bold rounded-md bg-primary p-3 sm:p-4">
                    Intermediate
                  </td>
                  <td className="text-fourth rounded-md bg-primary p-3 sm:p-4 font-semibold">
                    2017-19
                  </td>
                  <td className="text-fourth rounded-md bg-primary p-3 sm:p-4 font-semibold">
                    State Board
                  </td>
                </tr>
                <tr>
                  <td className="text-green-700 font-bold rounded-md bg-primary p-3 sm:p-4">
                    BCA
                  </td>
                  <td className="text-fourth rounded-md bg-primary p-3 sm:p-4 font-semibold">
                    2019-22
                  </td>
                  <td className="text-fourth rounded-md bg-primary p-3 sm:p-4 font-semibold">
                    Magadh University
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
