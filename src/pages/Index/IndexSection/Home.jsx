import { React, useEffect } from "react";
import "./home.css";
import { motion } from "framer-motion";
import Typed from "typed.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagramSquare,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  useEffect(() => {
    new Typed(".typed-container", {
      strings: ["Encuentra los mejores servicios en SOS"],
      smartBackspace: true,
      showCursor: false,
      startDelay: 1000,
      typeSpeed: 40,
    });
  }, []);
  const fadeInRight = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: "0.5",
        delay: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="home h-[100vh] w-[100vw]">
      <div className="grid grid-cols-3 gap-3">
        <motion.div
          variants={fadeInRight}
          initial="initial"
          animate="animate"
          className="flex justify-items-end items-end  h-[100vh]"
        >
          <div className="flex justify-evenly items-center h-[85vh] w-full bg-white flex-col ">
            <img width={300} src="./orbitas_logo.png" alt="" />
            <p className="text-7xl text-center font-extrabold typed-container"></p>
            <motion.div
              variants={{
                ...fadeInRight,
                animate: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: "0.5",
                    delay: 3.5,
                    ease: "easeInOut",
                  },
                },
              }}
              initial="initial"
              animate="animate"
            >
              <div>
                <p className="font-bold mx-4 mb-4 text-center text-2xl">
                  <span className="bg-[#b38f00] text-white font-extrabold px-1">
                    Siguenos
                  </span>
                </p>
                <div className="flex ">
                  <div className="text-center mx-4 hover:animate-bounce text-xl">
                    <FontAwesomeIcon icon={faInstagramSquare} size="2xl" />
                    <p className="font-bold">Instagram</p>
                  </div>
                  <div className="text-center mx-4 hover:animate-bounce  text-xl">
                    <FontAwesomeIcon icon={faFacebook} size="2xl" />{" "}
                    <p className="font-bold">Facebook</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        <div className=" flex justify-center items-center ">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.5,
            }}
          >
            <img className="tranform-up-down" src="./sos_logo.png" alt="" />
          </motion.div>
        </div>{" "}
        <div></div>
      </div>
    </div>
  );
}
