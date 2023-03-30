import { useTemplates } from "../../../../../store/useTemplate";
import { ResumeTitle } from "../atoms/ResumeTitle";

const ResumeHeader = () => {
  const templateName = useTemplates((state) => state.activeTemplate.name);

  return (
    <div className="flex items-center justify-center print:hidden">
      <ResumeTitle title={templateName} />
    </div>
  );
};

export default ResumeHeader;
