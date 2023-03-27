import React, { useState } from "react";
import Button from "./sidebar/Button";
import Logo from "./sidebar/Logo";
import items from "./sidebar/items";

const Sidebar = (props: any) => {
  return (
    <div className="m-[5rem] h-[83vh] bg-white w-[7vw] p-5 mt-[2rem] rounded-xl shadow-xl overflow-x-auto">
      <div className="buttons">
        {items.map((item) => {
          return (
            <div
              key={item.id}
              onClick={(event) => props.onChange(event, item.id)}
              className={`${
                item.id === props.id ? "bg-[#f1f2f5]" : "bg-[#ffffff]"
              } rounded-xl`}
            >
              <Button id={item.id} title={item.title} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;