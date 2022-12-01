import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../IMG/Dp-avatar.svg";
import { Link } from "react-scroll";

const Navbar = () => {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(3);

  const navs = [
    {
      name: "home",

      id: "Home",
    },
    {
      name: "about",

      id: "About",
    },
    {
      name: "Skills",

      id: "Skills",
    },
    {
      name: "contact",

      id: "Contact",
    },
  ];

  return (
    <>
      <motion.div
        className="sticky top-0 z-20 "
        initial={{ y: -100 }}
        animate={{ y: -0 }}
        transition={{
          delay: 0.2,
          type: "spring",
          stiffness: 500,
        }}
      >
        <div className="bg-fourth w-full h-2 sm:h-8 absolute"></div>
        <div className=" flex backdrop-blur-xl shadow-lg shadow-indigo-500/50 z-22 ">
          <motion.div className="ml-0 sm:ml-10 p-2 ">
            <NavLink to="/">
              <img className="h-12" src={logo} alt="" />
            </NavLink>
          </motion.div>
          <motion.div
            className="navdiv flex items-center mr-2 sm:mr-12 sm:gap-4 ml-auto gap-1"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0,
              duration: 2,
            }}
          >
            {navs.map((nav, index) => (
              <Link
                onClick={() => setSelectedItemIndex(index)}
                className={` z-10 relative capitalize font-semibold rounded-lg cursor-pointer text-lg sm:text-xl px-2 p-1 text-secondary ${
                  selectedItemIndex === index &&
                  " transition-all duration-100 ease-in backdrop-blur-xl shadow-lg shadow-indigo-500/100"
                }`}
                to={`${nav.id}`}
                spy={true}
                smooth={true}
                key={index}
              >
                {nav.name}
              </Link>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
