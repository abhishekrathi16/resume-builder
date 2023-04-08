import React from "react";
import ResumeLogo from "../../../../../../assets/logos/Logo-3.jpeg";

const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src={ResumeLogo.src}
        alt="logo"
        className="w-[80px] h-[80px] mb-[20px] mt-[20px] hover:cursor-pointer"
      />
    </div>
  );
};

export default Logo;
