import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import FormSection from "./components/FormSection";
import BasicLayout from "./modules/basic/BasicLayout";

const EditorLayout = () => {
  const [clickedId, setClickedId] = useState(1);
  const handleChange = (event: any, id: number) => {
    setClickedId(id);
  }
  return (
    <div className=" bg-[#f3f4f6] flex flex-row">
      <div className="">
        <Sidebar onChange={handleChange} id={clickedId}/>
      </div>
      <div className="mt-[32px]">
        <Header />
        <FormSection id={clickedId}/>
      </div>
    </div>
  );
};

export default EditorLayout;
