import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Download from "../../../../../../assets/icons/download-file-svgrepo-com.svg";
import ResumeLayout from "../../../resume/ResumeLayout";
import { useReactToPrint } from "react-to-print";

const DownloadButton = () => {
  const componentRef = useRef<HTMLInputElement>(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <>
      <div className="hidden">
        <ResumeLayout ref={componentRef} />
      </div>
      <div
        className="flex flex-row items-center justify-between bg-gradient-to-r from-[#2491f7] to-[#67c5fc] cursor-pointer p-2 rounded-3xl px-8"
        onClick={handlePrint}
      >
        <div className="text-white pr-[20px] font-extrabold">Download</div>
        <div>
          <Image src={Download} alt="db" className="h-[30px] w-[30px]" />
        </div>
      </div>
    </>
  );
};

export default DownloadButton;
