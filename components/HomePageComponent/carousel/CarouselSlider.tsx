import items from "./items";
import TemplateCard from "./TemplateCard";
// import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1, itemsToScroll: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 1 },
  { width: 768, itemsToShow: 3, itemsToScroll: 1 },
  { width: 1200, itemsToShow: 3, itemsToScroll: 1 },
];

const CarouselSlider = (): JSX.Element => {
  return (
    <>
      <div className="container mt-[70px] mb-5">
        {/* <Carousel breakPoints={breakPoints}> */}
        <div className="flex gap-10 justify-center">
          {items.map((item) => {
            return (
              <TemplateCard
                key={item.id}
                id={item.id}
                img={item.image}
                title={item.title}
              ></TemplateCard>
            );
          })}
        </div>
        {/* </Carousel> */}
      </div>
    </>
  );
};

export default CarouselSlider;
