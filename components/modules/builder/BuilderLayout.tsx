import ResumeLayout from "./resume/ResumeLayout";
import EditorLayout from "./editor/EditorLayout";

const BuilderLayout = () => {
  return (
    <div className="grid_builder_layout bg-[#f3f4f6]">
      <EditorLayout />
      <ResumeLayout />
    </div>
  );
};

export default BuilderLayout;
