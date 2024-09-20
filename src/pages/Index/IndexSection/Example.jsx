import React from "react";
import ThreeDButton from "../../../components/Button/ThreeDButton";
export default function Example() {
  return (
    <>
      <div className="home h-[100vh] w-[100vw]" id="home">
        <div className="grid grid-cols-3 gap-3 h-full">
          <div className="bg-red-400 h-full"></div>
          <div className="bg-black flex justify-center items-center">
            <ThreeDButton /> <p>asddddddddddddddddddddddddddddddd</p>{" "}
            <ThreeDButton />
          </div>
          <div className="bg-pink-300 h-full"></div>
        </div>
      </div>{" "}
      <div className="home h-[100vh] w-[100vw]" id="home">
        <div className="grid grid-cols-3 gap-3 h-full">
          <div className="bg-red-400 h-full"></div>
          <div className="bg-black flex justify-center items-center">
            <ThreeDButton />
          </div>
          <div className="bg-pink-300 h-full"></div>
        </div>
      </div>
    </>
  );
}
