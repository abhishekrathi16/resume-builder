// import { FaUnlockAlt } from 'react-icons/fa';
// import { BsPiggyBank } from 'react-icons/bs';
// import { AiOutlineCloudDownload } from 'react-icons/ai';
import Basics from "../../../../../../assets/buttons/profile-circle-svgrepo-com.svg";
import Education from "../../../../../../assets/buttons/education-books-book-study-learning-library-svgrepo-com.svg";
import Skills from "../../../../../../assets/buttons/skills-svgrepo-com.svg";
import Experience from "../../../../../../assets/buttons/bag-business-finance-svgrepo-com (1).svg";
import Awards from "../../../../../../assets/buttons/awards-svgrepo-com.svg";
import Projects from "../../../../../../assets/buttons/task-management-svgrepo-com.svg";
import Image from "next/image";

import React from "react";

interface Id {
  id: number;
}

const switchIcons = (id: number): JSX.Element => {
  switch (id) {
    case 1:
      return <Image src={Basics} alt="icon1" />;
    case 2:
      return <Image src={Education} alt="icon2" />;
    case 3:
      return <Image src={Skills} alt="icon3" />;
    case 4:
      return <Image src={Experience} alt="icon4" />;
    case 5:
      return <Image src={Projects} alt="icon6" />;
    case 6:
      return <Image src={Awards} alt="icon7" />;
    default:
      return <></>;
  }
};

const Buttons = (props: any): JSX.Element => {
  return <>{switchIcons(props.id)}</>;
};

export default Buttons;
