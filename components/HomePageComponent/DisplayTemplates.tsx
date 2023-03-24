import React from "react";
import CarouselSlider from "./carousel/CarouselSlider";

const DisplayTemplates = (): JSX.Element => {
  // #bdddfc
  return (
    // bg-[##bdddfc]
    // #fad0d0
    <div className="bg-gradient-to-b from-[#ffffff] to-[#bdddfc] text-center flex flex-col items-center justify-center mt-[8rem] p-20 h-[auto]">
      <div
        className="larger-quote"
        style={{
          fontWeight: "bolder",
          fontSize: "35px",
          textAlign: "left",
        }}
      >
        Free resume templates
      </div>
      <div className="smaller-quote text-left text-lg text-gray-500 mt-2">
        Choose a template of your choice and customize it easily!
      </div>
      <CarouselSlider />
      <div className="button w-[10vw] h-[3vw] bg-gradient-to-r from-[#2491f7] to-[#67c5fc] hover:cursor-pointer rounded-full flex flex-col justify-center items-center mt-10">
        <a
          href="#"
          style={{
            textDecoration: "none",
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
            padding: 0,
            fontSize: "1rem",
          }}
        >
          Select Template
        </a>
      </div>
    </div>
  );
};

export default DisplayTemplates;
