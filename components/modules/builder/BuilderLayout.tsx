import ResumeLayout from "./resume/ResumeLayout";
import EditorLayout from "./editor/EditorLayout";

const BuilderLayout = () => {
  return (
    <div className="grid grid-rows-1 grid-cols-2 gap-[16px] bg-[#f3f4f6]">
      <EditorLayout />
      <ResumeLayout />
    </div>
  );
};

export default BuilderLayout;
