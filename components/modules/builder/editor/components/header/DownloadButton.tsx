import Image from "next/image";
import React, { useEffect } from "react";
import Download from "../../../../../../assets/icons/download-file-svgrepo-com.svg";

const DownloadButton = () => {
  useEffect(() => {
    globalThis?.addEventListener("beforeprint", () => {
      globalThis.document.title = `Resume_Builder_${Date.now()}`;
    });

    globalThis?.addEventListener("afterprint", () => {
      globalThis.document.title = "Single Page Resume Builder";
    });
  }, []);
  return (
    <div
      className="flex flex-row items-center justify-between bg-gradient-to-r from-[#2491f7] to-[#67c5fc] cursor-pointer p-2 rounded-3xl px-8"
      onClick={globalThis?.print}
    >
      <div className="text-white pr-5 font-extrabold">Download</div>
      <div>
        <Image src={Download} alt="db" className="h-[30px] w-[30px]" />
      </div>
    </div>
  );
};

export default DownloadButton;
