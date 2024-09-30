import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import TextButton from "../../components/Button/TextButton";
import OutlineButton from "../../components/Button/OutlineButton";
const Navbar = () => {
  const fadeInDown = {
    initial: {
      y: -60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 1,
        ease: "easeInOut",
      },
    },
  };
  const wrapperVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { type: "easeInOut", delay: 0.1 },
    },
    exit: { opacity: 0, transition: { type: "easeInOut", delay: 0.1 } },
  };

  const [visibleMenu, setVisibleMenu] = useState(false);
  return (
    <motion.div variants={fadeInDown} initial="initial" animate="animate">
      <nav className="fixed flex justify-between items-center   z-50  shadow-md w-[100%] pc:px-20 movil:px-5 h-[10vh] dots-background ">
        <div>
          <img
            className="w-[85px] cursor-pointer"
            src="./logo-sos-name.png"
            alt="..."
          />
        </div>
        <motion.div
          variants={wrapperVariants}
          initial="hidden"
          animate={
            (!visibleMenu && window.screen.width >= 1024) || visibleMenu
              ? "visible"
              : "hidden"
          }
          exit="exit"
        >
          <div className="nav-links duration-500 pc:static movil:absolute bg-red pc:min-h-fit movil:min-h-[60vh] left-0 top-[85px]  pc:w-auto  movil:w-full flex items-center px-5 ">
            <ul className="flex pc:flex-row movil:flex-col pc:items-center movil:items-start pc:gap-[4vw] movil:gap-8">
              <li>
                <a className="" href="#">
                  <TextButton text={"Inicio"} onClick={() => {}} />
                </a>
              </li>
              <li>
                <a className="" href="#">
                  <TextButton text={"Beneficios"} onClick={() => {}} />
                </a>
              </li>
              <li>
                <a className="" href="#">
                  <TextButton text={"Descargar SOS"} onClick={() => {}} />
                </a>
              </li>
              <li>
                <a className="" href="#">
                  <TextButton text={"Explora"} onClick={() => {}} />
                </a>
              </li>
              <li>
                <a className="" href="#">
                  <TextButton text={"Contáctenos"} onClick={() => {}} />
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
        <div className="flex items-center gap-6">
          <TextButton text={"Registro"} onClick={() => {}} />
          <OutlineButton text={"Ingresar"} onClick={() => {}} />
          <FontAwesomeIcon
            icon={visibleMenu ? faTimes : faBars}
            onClick={() => setVisibleMenu(!visibleMenu)}
            className="pc:hidden movil:block"
          />
        </div>
      </nav>
    </motion.div>
  );
};

export default Navbar;
