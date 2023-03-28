import Image from "next/image";
import React from "react";
import EducationIcon from "../../../../../../assets/buttons/education-learning-16-svgrepo-com.svg";
import Buttons from "./Buttons";

interface Props {
  id: number;
  title: string;
}
const Button = (props: Props) => {
  return (
    <span className="flex flex-col justify-center items-center p-[28px] py-[20px] mt-[20px] hover:cursor-pointer rounded-xl">
      <span>
        <Buttons id={props.id} />
      </span>
      <span>{props.title}</span>
    </span>
  );
};

export default Button;
