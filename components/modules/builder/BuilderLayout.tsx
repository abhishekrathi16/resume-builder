import ResumeLayout from "./resume/ResumeLayout";
import EditorLayout from "./editor/EditorLayout";

const BuilderLayout = () => {
  return (
    <div className="grid grid-rows-1 grid-cols-2 gap-[16px]">
      <EditorLayout />
      <div className="overflow-auto no-scrollbar">
        <ResumeLayout />
      </div>
    </div>
  );
};

export default BuilderLayout;
