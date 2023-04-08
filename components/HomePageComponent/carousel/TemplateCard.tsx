import { StaticImageData } from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import items from "./items";

interface Props {
  id: number;
  title: string;
  img: StaticImageData;
}
const TemplateCard = ({ id, title, img }: Props): JSX.Element => {
  return (
    <SplideSlide key={id}>
      <img
        src={img.src}
        alt="resume-template"
        className="h-[50vh] w-[19vw] cursor-pointer shadow-2xl"
      />
    </SplideSlide>
  );
};

export default TemplateCard;
