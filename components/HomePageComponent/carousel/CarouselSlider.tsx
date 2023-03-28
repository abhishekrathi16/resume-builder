import items from "./items";
import TemplateCard from "./TemplateCard";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useRef } from "react";
// import Splide, { Splide as SplideCore } from "@splidejs/splide";

const breakPoints = [
  { width: 1, itemsToShow: 1, itemsToScroll: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 1 },
  { width: 768, itemsToShow: 3, itemsToScroll: 1 },
  { width: 1200, itemsToShow: 3, itemsToScroll: 1 },
];

const CarouselSlider = (): JSX.Element => {
  // const targetElementRef = useRef<HTMLElement | null>(null);
  // const splideInstanceRef = useRef<Splide | null>(null);

  // useEffect(() => {
  //   const targetElement = targetElementRef.current;
  //   if (targetElement) {
  //     splideInstanceRef.current = new SplideCore(targetElement, {
  //       perPage: 2,
  //       pagination: false,
  //       gap: "0px",
  //       width: "100%",
  //       autoHeight: true,
  //       perMove: 1,
  //     });
  //     splideInstanceRef.current.mount();
  //   }
  //   return () => {
  //     splideInstanceRef.current && splideInstanceRef.current.destroy();
  //   };
  // }, []);
  return (
    <>
      <div className="container mt-[70px] mb-5">
        <Splide aria-label="my templates">
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
        </Splide>
      </div>
    </>
  );
};

export default CarouselSlider;
