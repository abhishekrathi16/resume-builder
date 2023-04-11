import {
  Box,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { ISkillItem } from "../../../../../../store/skill.interface";
import { SkillDetailStore } from "../../../../../../store/skill_store";
import save from "../../../../../../assets/icons/save-svgrepo-com.svg";

import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../../../FirebaseConfig/FirebaseConfig";
import { UserData } from "../../../../../../store/SignIn_SignOut";

import Loading from "../../../../../Loading_Button";
import { toast } from "react-toastify";
import { CircularIntegration } from "../SaveButton";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const SkillsLayout = (): JSX.Element => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const [loading, setLoading] = useState(false);
  const notify = (content: string) => {
    toast(content);
  };

  const [lang, setLang] = useState("");
  const [frame, setFrame] = useState("");
  const [datab, setDatab] = useState("");
  const [tool, setTool] = useState("");

  const saveSkillsdetail = async () => {
    setLoading(true);
    let value = localStorage.getItem("userInfo");
    if (typeof value === "string") {
      let userInfo: UserData = JSON.parse(value);
      console.log(userInfo.userId);
      const ref = doc(db, "resumedata", userInfo.userId);
      await updateDoc(ref, {
        skills: {
          databases: databases,
          frameworks: frameworks,
          tools: tools,
          languages: languages,
        },
      });
      setLoading(false);
      // notify("data saved successfully");
    }
  };

  const {
    languages,
    frameworks,
    databases,
    tools,
    setLanguages,
    setFrameworks,
    setDatabases,
    setTools,
  } = SkillDetailStore((state) => ({
    languages: state.languages,
    frameworks: state.frameworks,
    databases: state.databases,
    tools: state.tools,
    setLanguages: state.setLanguages,
    setFrameworks: state.setFrameworks,
    setDatabases: state.setDatabases,
    setTools: state.setTools,
  }));

  const addLanguage = () => {
    let newObj: ISkillItem = {
      id: languages.length,
      name: lang,
    };
    languages.push(newObj);
    setLanguages(languages);
    console.log(languages);
    setLang("");
  };

  // function to add language when press enter

  const OnkeyDownaddLanguage = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      let newObj: ISkillItem = {
        id: languages.length,
        name: lang,
      };
      languages.push(newObj);
      setLanguages(languages);
      console.log(languages);
      setLang("");
    }
  };

  const removeLanguage = (id: number) => {
    let newObj: ISkillItem[] = languages;
    newObj.splice(id, 1);
    setLanguages(newObj);
    console.log(languages);
  };

  const addFrameworks = () => {
    let newObj: ISkillItem = {
      id: languages.length,
      name: frame,
    };
    frameworks.push(newObj);
    setFrameworks(frameworks);

    // empty input field
    setFrame("");

    console.log(frameworks);
  };

  // function to add framework when press enter
  const OnkeyDownaddFramework = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      let newObj: ISkillItem = {
        id: languages.length,
        name: frame,
      };
      frameworks.push(newObj);
      setFrameworks(frameworks);

      // empty input field
      setFrame("");

      console.log(frameworks);
    }
  };

  const removeFramework = (id: number) => {
    let newObj: ISkillItem[] = frameworks;
    newObj.splice(id, 1);
    setFrameworks(newObj);
    console.log(frameworks);
  };

  const addDatabase = () => {
    let newObj: ISkillItem = {
      id: databases.length,
      name: datab,
    };
    databases.push(newObj);
    setDatabases(databases);

    // making input empty
    setDatab("");

    console.log(databases);
  };
  // function to add Database after pressing Enter key
  const OnkeyDownaddDatabase = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      let newObj: ISkillItem = {
        id: databases.length,
        name: datab,
      };
      databases.push(newObj);
      setDatabases(databases);

      // making input empty
      setDatab("");

      console.log(databases);
    }
  };

  const removeDatabase = (id: number) => {
    let newObj: ISkillItem[] = databases;
    newObj.splice(id, 1);
    setDatabases(newObj);
    console.log(databases);
  };

  const addTools = () => {
    let newObj: ISkillItem = {
      id: tools.length,
      name: tool,
    };
    tools.push(newObj);
    setTools(tools);

    // making input empty
    setTool("");

    console.log(tools);
  };

  // add Tools after pressing Enter key

  const OnkeyDownaddTools = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      let newObj: ISkillItem = {
        id: tools.length,
        name: tool,
      };
      tools.push(newObj);
      setTools(tools);

      // making input empty
      setTool("");

      console.log(tools);
    }
  };

  const removeTool = (id: number) => {
    let newObj: ISkillItem[] = tools;
    newObj.splice(id, 1);
    setTools(newObj);
    console.log(tools);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 800 }}>
            Skill Details
          </Typography>
        </div>
        <div>
          <CircularIntegration save={saveSkillsdetail} />
        </div>
      </div>
      <div className="mt-[12px]">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>Languages</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="mt-[8px] mb-[8px]">
              <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }}>
                {languages.map((langs, id) => {
                  return (
                    <>
                      <div className="mt-[4px] mb-[4px] ">
                        <Box
                          style={{
                            backgroundColor: "#1E40AF",
                            borderRadius: "16px",
                            padding: "4px",
                          }}
                        >
                          <Chip
                            label={`${langs.name}`}
                            sx={{
                              color: "white",
                              backgroundColor: "#1E40AF",
                              fontSize: "15px",
                            }}
                          />
                          <CloseIcon
                            sx={{ color: "white", cursor: "pointer" }}
                            onClick={() => removeLanguage(id)}
                          />
                        </Box>
                      </div>
                    </>
                  );
                })}
              </Stack>
            </div>
            <>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <TextField
                  fullWidth
                  id="input-with-sx"
                  label="Language"
                  variant="standard"
                  value={lang}
                  onChange={(e) => setLang(e.target.value)}
                  onKeyDown={(e) => OnkeyDownaddLanguage(e)}
                />
                <AddIcon
                  sx={{ color: "#1E40AF", mr: 1, my: 0.5, cursor: "pointer" }}
                  onClick={addLanguage}
                />
              </Box>
            </>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>Frameworks</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="mt-[8px] mb-[8px]">
              <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }}>
                {frameworks.map((frames, id) => {
                  return (
                    <>
                      <div className="mt-[4px] mb-[4px] ">
                        <Box
                          style={{
                            backgroundColor: "#1E40AF",
                            borderRadius: "16px",
                            padding: "4px",
                          }}
                        >
                          <Chip
                            label={`${frames.name}`}
                            sx={{
                              color: "white",
                              backgroundColor: "#1E40AF",
                              fontSize: "15px",
                            }}
                          />
                          <CloseIcon
                            sx={{ color: "white", cursor: "pointer" }}
                            onClick={() => removeFramework(id)}
                          />
                        </Box>
                      </div>
                    </>
                  );
                })}
              </Stack>
            </div>
            <>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <TextField
                  fullWidth
                  id="input-with-sx"
                  label="Framework"
                  variant="standard"
                  value={frame}
                  onChange={(e) => setFrame(e.target.value)}
                  onKeyDown={(e) => OnkeyDownaddFramework(e)}
                />
                <AddIcon
                  sx={{ color: "#1E40AF", mr: 1, my: 0.5, cursor: "pointer" }}
                  onClick={addFrameworks}
                />
              </Box>
            </>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Database</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="mt-[8px] mb-[8px]">
              <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }}>
                {databases.map((database, id) => {
                  return (
                    <>
                      <div className="mt-[4px] mb-[4px] ">
                        <Box
                          sx={{
                            backgroundColor: "#1E40AF",
                            borderRadius: "16px",
                            padding: "4px",
                          }}
                        >
                          <Chip
                            label={`${database.name}`}
                            sx={{
                              color: "white",
                              backgroundColor: "#1E40AF",
                              fontSize: "15px",
                            }}
                          />
                          <CloseIcon
                            sx={{ color: "white", cursor: "pointer" }}
                            onClick={() => removeDatabase(id)}
                          />
                        </Box>
                      </div>
                    </>
                  );
                })}
              </Stack>
            </div>
            <>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <TextField
                  fullWidth
                  id="input-with-sx"
                  label="Database"
                  value={datab}
                  variant="standard"
                  onChange={(e) => setDatab(e.target.value)}
                  onKeyDown={(e) => OnkeyDownaddDatabase(e)}
                />
                <AddIcon
                  sx={{ color: "#1E40AF", mr: 1, my: 0.5, cursor: "pointer" }}
                  onClick={addDatabase}
                />
              </Box>
            </>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography>Tools</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="mt-[8px] mb-[8px]">
              <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }}>
                {tools.map((tool, id) => {
                  return (
                    <>
                      <div className="mt-[4px] mb-[4px] ">
                        <Box
                          style={{
                            backgroundColor: "#1E40AF",
                            borderRadius: "16px",
                            padding: "4px",
                          }}
                        >
                          <Chip
                            label={`${tool.name}`}
                            sx={{
                              color: "white",
                              backgroundColor: "#1E40AF",
                              fontSize: "15px",
                            }}
                          />
                          <CloseIcon
                            sx={{ color: "white", cursor: "pointer" }}
                            onClick={() => removeTool(id)}
                          />
                        </Box>
                      </div>
                    </>
                  );
                })}
              </Stack>
            </div>
            <>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <TextField
                  fullWidth
                  id="input-with-sx"
                  label="Tools"
                  variant="standard"
                  value={tool}
                  onChange={(e) => setTool(e.target.value)}
                  onKeyDown={(e) => OnkeyDownaddTools(e)}
                />
                <AddIcon
                  sx={{ color: "#1E40AF", mr: 1, my: 0.5, cursor: "pointer" }}
                  onClick={addTools}
                />
              </Box>
            </>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default SkillsLayout;
