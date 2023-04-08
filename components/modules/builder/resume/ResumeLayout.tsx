import React, { Context, createContext, useEffect } from "react";
import { useTemplates } from "../../../../store/useTemplate";
import { useResumeStore } from "../../../../store/useResumeStore";
import { AVAILABLE_TEMPLATES } from "../../../../helpers/constants";

export let StateContext: Context<any> = createContext(null);

const ResumeLayout = React.forwardRef<HTMLInputElement>((props, ref) => {
  const resumeData = useResumeStore();
  StateContext = createContext(resumeData);
  const templateId = useTemplates((state) => state.activeTemplate.id);
  const Template = AVAILABLE_TEMPLATES[templateId].component;
  // console.log(resumeData);

  useEffect(() => {
    const selectedTemplateId =
      localStorage.getItem("selectedTemplateId") ||
      AVAILABLE_TEMPLATES["modern"].id;
    useTemplates
      .getState()
      .setTemplate(AVAILABLE_TEMPLATES[selectedTemplateId]);
  }, []);

  return (
    <div
      className="mx-0 my-5 print:mx-0 mb-4 print:my-0 print:px-0 bg-[#f3f4f6] grid_builder_template"
      ref={ref}
    >
      <div className="origin-top transition-all duration-300 ease-linear print:!scale-100 bg-[#f3f4f6] print:bg-white overflow-x-hidden scroll-smooth max-h-screen sticky print:overflow-y-hidden">
        <div className="bg-white my-0 mx-auto print:mx-0 print:my-0 h-[297mm] ">
          <StateContext.Provider value={resumeData}>
            {Template && <Template />}
          </StateContext.Provider>
        </div>
      </div>
    </div>
  );
});

export default ResumeLayout;
