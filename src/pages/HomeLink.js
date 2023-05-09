import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
const HomeLink = ({ Linkstyle }) => {
  return (
    <>
      <div className={Linkstyle}>
        <a
          href="https://github.com/dpraj123?tab=repositories"
          target="_blank"
          title="GitHub"
          rel="noreferrer"
          className="hover:cursor-pointer"
        >
          <GitHubIcon
            style={{
              color: "rgb(117,16,247 )",
              fontSize: "2.5rem",
            }}
          />
        </a>

        <a
          href="https://wa.link/du0bwg"
          target="_blank"
          title="whatsapp"
          rel="noreferrer"
          className=" hover:cursor-pointer"
        >
          <WhatsAppIcon
            style={{
              color: "#832AF5",
              fontSize: "2.5rem",
            }}
          />
        </a>
        <a
          href="mailto:rajdp764@gmail.com"
          title="Contact us"
          rel="noreferrer"
          target="_blank"
          className="  hover:cursor-pointer"
        >
          <EmailIcon
            style={{
              color: "rgb(117,16,247)",
              fontSize: "2.5rem",
            }}
          />
        </a>
      </div>
    </>
  );
};

export default HomeLink;
