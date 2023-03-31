import React, { Context, createContext, useEffect, useRef } from "react";
import { useTemplates } from "../../../../store/useTemplate";
import { useResumeStore } from "../../../../store/useResumeStore";
import { AVAILABLE_TEMPLATES } from "../../../../helpers/constants";

export let StateContext: Context<any> = createContext(null);

const ResumeLayout = React.forwardRef<HTMLInputElement>((props, ref) => {
  // const componentRef = useRef();
  const resumeData = useResumeStore();
  const templateId = useTemplates((state) => state.activeTemplate.id);
  const Template = AVAILABLE_TEMPLATES[templateId].component;
  StateContext = createContext(resumeData);

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
      className="mx-5 my-5 print:mx-0 mb-2 print:mb-0 bg-[#f3f4f6]"
      ref={ref}
    >
      <div className="origin-top transition-all duration-300 ease-linear	print:!scale-100 bg-[#f3f4f6]">
        <div className="w-[210mm] h-[250mm] bg-white my-0 mx-auto overflow-y-scroll">
          <StateContext.Provider value={resumeData}>
            {Template && <Template />}
          </StateContext.Provider>
        </div>
      </div>
    </div>
  );
});

export default ResumeLayout;
