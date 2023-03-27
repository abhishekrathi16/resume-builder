import Image from "next/image";
import React from "react";
import Download from "../../../../../../assets/icons/download-file-svgrepo-com.svg";

const DownloadButton = () => {
  return (
    <div className="flex flex-row items-center justify-between bg-gradient-to-r from-[#2491f7] to-[#67c5fc] cursor-pointer p-2 rounded-3xl px-8">
      <div className="text-white pr-5 font-extrabold">Download</div>
      <div>
        <Image src={Download} alt="db" className="h-[30px] w-[30px]" />
      </div>
    </div>
  );
};


{/* <div className="button w-[16vw] h-[4vw] bg-gradient-to-r from-[#2491f7] to-[#67c5fc] hover:cursor-pointer rounded-full flex flex-col justify-center items-center mt-10">
<a
  href="#"
  style={{
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    padding: 0,
    fontSize: "1.2rem",
  }}
>
  Get Started
</a> */}

export default DownloadButton;
