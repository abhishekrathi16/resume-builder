// import { FaUnlockAlt } from 'react-icons/fa';
// import { BsPiggyBank } from 'react-icons/bs';
// import { AiOutlineCloudDownload } from 'react-icons/ai';
import Icon1 from "../../../assets/icons/curved-connector-svgrepo-com.svg";
import Icon2 from "../../../assets/icons/free-svgrepo-com.svg";
import Icon3 from "../../../assets/icons/cloud-download-svgrepo-com (1).svg";
import Icon4 from "../../../assets/icons/file-multiple-svgrepo-com.svg";
import Icon5 from "../../../assets/icons/ruler-2-svgrepo-com (1).svg";
import Icon6 from "../../../assets/icons/pen-write-note-compose-svgrepo-com.svg";
import Image from "next/image";

import React from "react";

interface Id {
  id: number;
}

const switchIcons = (id: number): JSX.Element => {
  switch (id) {
    case 1:
      return (
        <Image src={Icon1} alt="icon1" className="h-[3rem] w-[3rem] mb-3" />
      );
    case 2:
      return (
        <Image src={Icon2} alt="icon2" className="h-[3rem] w-[3rem] mb-3" />
      );
    case 3:
      return (
        <Image src={Icon3} alt="icon3" className="h-[3rem] w-[3rem] mb-3" />
      );
    case 4:
      return (
        <Image src={Icon4} alt="icon4" className="h-[3rem] w-[3rem] mb-3" />
      );
    case 5:
      return (
        <Image src={Icon5} alt="icon5" className="h-[3rem] w-[3rem] mb-3" />
      );
    case 6:
      return (
        <Image src={Icon6} alt="icon6" className="h-[3rem] w-[3rem] mb-3" />
      );
    default:
      return <></>;
  }
};

const Icons = (props: any): JSX.Element => {
  return <>{switchIcons(props.id)}</>;
};

export default Icons;
