import { StaticImageData } from "next/image";
import items from "./items";

interface Props {
  id: number;
  title: string;
  img: StaticImageData;
}
const TemplateCard = ({ id, title, img }: Props): JSX.Element => {
  return (
    <div key={id}>
      <img
        src={img.src}
        alt="resume-template"
        className="h-[50vh] w-[19vw] cursor-pointer shadow-2xl"
      />
    </div>
  );
};

export default TemplateCard;
