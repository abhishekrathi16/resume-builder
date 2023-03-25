import ResumeLayout from "./resume/ResumeLayout";
import EditorLayout from "./editor/EditorLayout";

const BuilderLayout = () => {
  return (
    <div className="flex flex-row justify-center items-center">
      <div>Hello World</div>
      <EditorLayout />
      <ResumeLayout />
    </div>
  );
};

export default BuilderLayout;
