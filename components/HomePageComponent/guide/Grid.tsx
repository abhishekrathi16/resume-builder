import React from "react";
import items from "./items";
import Icons from "./icons";

const Grid = (): JSX.Element => {
  return (
    <div className="flex justify-center flex-col items-center mt-[3rem]">
      <div className="grid grid-cols-2 gap-y-12 gap-x-16">
        {items.map((item) => {
          return (
            <>
              <div
                key={item.id}
                className="flex flex-col justify-center items-left"
              >
                <Icons id={item.id} />
                <div className="text-left text-lg font-bold text-white">
                  {item.title}
                </div>
                <div className="text-left w-[30rem] text-md text-white">
                  {item.description}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Grid;
