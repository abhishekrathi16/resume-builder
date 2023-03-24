import React from "react";
import Grid from "./guide/Grid";
import Icon from "../../assets/icons/cloud-download-svgrepo-com (1).svg";
import Image from "next/image";

const GuideToMakeBetterResume = (): JSX.Element => {
  // from-[#2491f7] to-[#67c5fc]
  // from-[#fad0d0] to-[#fc8484]
  return (
    <div className="bg-gradient-to-b from-[#bdddfc] to-[#3ab2f8] text-center flex flex-col items-center justify-center p-[8rem] pt-[8rem] h-[auto]">
      <div
        className="larger-quote text-white"
        style={{
          fontWeight: "bolder",
          fontSize: "35px",
          textAlign: "left",
        }}
      >
        Tool to make a better resume
      </div>
      <div className="smaller-quote text-left text-lg text-white mt-2">
        Easier to use and more flexible with better functionalities
      </div>
      <Grid />
      {/* <Image src={Icon} alt="icon" /> */}
    </div>
  );
};

export default GuideToMakeBetterResume;
