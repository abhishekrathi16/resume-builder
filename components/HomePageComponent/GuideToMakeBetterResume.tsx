import React from "react";
import Grid from "./guide/Grid";
import Icon from "../../assets/icons/cloud-download-svgrepo-com (1).svg"
import Image from "next/image";

const GuideToMakeBetterResume = (): JSX.Element => {
  return (
    <div className="bg-gradient-to-b from-[#fad0d0] to-[#fc8484] text-center flex flex-col items-center justify-center p-[8rem] pt-[8rem] h-[auto]">
      <div
        className="larger-quote"
        style={{
          fontWeight: "bolder",
          fontSize: "35px",
          textAlign: "left",
          color: "white"
        }}
      >
        Tool to make a better resume
      </div>
      <div className="smaller-quote text-left text-lg text-gray-500 mt-2 text-white">
        Easier to use and more flexible with better functionalities
      </div>
      <Grid/>
      {/* <Image src={Icon} alt="icon" /> */}
      

    </div>
  );
};

export default GuideToMakeBetterResume;
