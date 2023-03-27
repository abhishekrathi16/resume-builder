import React from "react";
import Logo from "./sidebar/Logo";
import DownloadButton from "./header/DownloadButton";

const Header = () => {
  return (
    <div className="bg-white p-5 px-8 rounded-xl shadow-xl flex flex-row justify-between items-center">
      <div className="title font-extrabold text-2xl">Resume 1</div>
      <DownloadButton />
    </div>
  );
};

export default Header;
