import React, { Context, createContext, useEffect } from "react";
import { useTemplates } from "../../../../store/useTemplate";
import { ResumeTitle } from "./atoms/ResumeTitle";
import { useResumeStore } from "../../../../store/useResumeStore";
import { AVAILABLE_TEMPLATES } from "../../../../helpers/constants";
import { ThemeProvider } from "@mui/material/styles";
import { useThemes } from "../../../../store/theme";

export let StateContext: Context<any> = createContext(null);

const ResumeLayout = () => {
  const resumeData = useResumeStore();
  const templateId = useTemplates((state) => state.activeTemplate.id);
  const Template = AVAILABLE_TEMPLATES[templateId].component;
  const selectedTheme = useThemes((state) => state.selectedTheme);
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
    <div className="mx-5 print:mx-0 mb-2 print:mb-0">
      <div
        className="origin-top transition-all duration-300 ease-linear	print:!scale-100"
      >
        <div className="w-[210mm] h-[296mm] bg-white my-0 mx-auto">
          <StateContext.Provider value={resumeData}>
            <ThemeProvider theme={selectedTheme}>
              {Template && <Template />}
            </ThemeProvider>
          </StateContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default ResumeLayout;
