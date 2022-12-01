import React from "react";
import DownloadIcon from "@mui/icons-material/Download";
import { Link } from "react-router-dom";

const ResumeButton = ({ title }) => {
  return (
    <>
      <a
        href="https://drive.google.com/file/d/1MmO8y-2RIIcJ3x68yW9bgP-BHegESk2B/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        <button className=" bg-fourth shadow-lg shadow-indigo-500/100 relative backdrop-blur-lg text-white tracking-wider font-semibold py-2 pr-4 pl-1 rounded-tl-3xl rounded-br-3xl mt-4 sm:text-xl hover:scale-95">
          <span className="download rounded-full rounded-bl-none bg-white pb-2.5 pt-1.5 px-1 sm:pb-2">
            <DownloadIcon className=" text-[#383838e5]" />
          </span>
          <span className="pl-2">{title}</span>
        </button>
      </a>
    </>
  );
};

export default ResumeButton;
