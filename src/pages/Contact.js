import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { WhatsApp, EmailOutlined, LocationOn } from "@mui/icons-material";
import { Typewriter } from "react-simple-typewriter";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_cxnix8s",
        "template_byhbcwd",
        form.current,
        "eoG4y63V-ApjYVCg9"
      )
      .then(
        (result) => {
          alert("message sent successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div id="Contact" className=" bg-primary pt-10 ">
      <div className=" pb-5 sm:pb-0 sm:h-[28rem] lg:h-[32rem] bg-fourth/80 ">
        <div className="sm:h-full w-full backdrop-blur-[2px] ">
          <h1 className="text-center text-primary text-4xl pt-5 font-semibold tracking-wider font-serif">
            Contact
          </h1>
          <p className="text-secondary font-mono font-semibold text-2xl text-center py-4">
            {/* Drop Me a Message */}
            <Typewriter
              loop
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={70}
              delaySpeed={1000}
              words={["Drop Me a Message"]}
            />
          </p>
          <div className="lg:pt-14">
            <div className="flex items-center justify-center gap-10  h-full">
              <div className=" gap-10 lg:flex flex-col p-[2.9rem] shadow-[10px_10px_47px_rgba(30,64,175),-0px_-0px_0px_rgba(255,254,255)] rounded-3xl hidden">
                <div className="flex items-center gap-4">
                  <WhatsApp
                    style={{
                      borderRadius: " 10px",
                      color: "#cdcdd0",
                      boxShadow: "1px 1px 10px #240439",
                      fontSize: "3rem",
                      padding: "2px",
                    }}
                  />
                  <h1 className="text-2xl text-[#cdcdd0] font-semibold">
                    +91 8674876756
                  </h1>
                </div>
                <div className="flex items-center gap-4">
                  <EmailOutlined
                    style={{
                      borderRadius: " 10px",
                      color: "#cdcdd0",
                      boxShadow: "1px 1px 10px #240439",
                      fontSize: "3rem",
                      padding: "2px",
                    }}
                  />
                  <h1 className="text-2xl text-[#cdcdd0] font-semibold">
                    rajdp764@gmail.com
                  </h1>
                </div>
                <div className="flex items-center gap-4">
                  <LocationOn
                    style={{
                      borderRadius: " 35px",
                      color: "#cdcdd0",
                      boxShadow: "1px 1px 10px #240439",
                      fontSize: "3rem",
                    }}
                  />
                  <h1 className="text-2xl text-[#cdcdd0] font-semibold">
                    Delhi NCR
                  </h1>
                </div>
              </div>
              <div className="contact_form shadow-[10px_10px_47px_rgba(30,64,175),-0px_-0px_0px_rgba(255,254,255)] py-8 sm:py-8 sm:px-8 rounded-3xl">
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="flex flex-col gap-2 font-bold "
                >
                  {/* <label className=" ">Name</label> */}
                  <input
                    className="bg-secondary rounded-lg w-80 h-8 pl-5 text-primary"
                    type="text"
                    name="user_name"
                    placeholder="Name"
                    required="true"
                  />

                  <input
                    type="email"
                    name="user_email"
                    className="bg-secondary rounded-lg w-80 h-8 pl-5 text-primary "
                    placeholder="Email"
                    required="email"
                  />

                  <textarea
                    name="message"
                    placeholder="Message"
                    className="bg-secondary rounded-sm w-80 h-32 pl-5 text-primary"
                    required="true"
                  />
                  <input
                    className="bg-secondary p-2 w-24 tracking-widest rounded-xl text-white cursor-pointer"
                    type="submit"
                    value="Send"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
