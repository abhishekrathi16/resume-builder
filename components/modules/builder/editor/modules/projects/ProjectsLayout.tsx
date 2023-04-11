import React, { useEffect, useState } from "react";
import { ProjectsItem } from "../../../../../../store/projects.interface";
import { ProjectsDetailStore } from "../../../../../../store/projects_store";

import { Box, Tooltip, Typography } from "@mui/material";
import Image from "next/image";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

import { ISkillItem } from "../../../../../../store/skill.interface";

import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

import save from "../../../../../../assets/icons/save-svgrepo-com.svg";
import Paticular_Project from "./Paticular_Project";

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

const ProjectsLayout = () => {
  const [expanded, setExpanded] = React.useState<string | false>("panel0");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const [loading, setLoading] = useState(false);
  const notify = (content: string) => {
    toast(content);
  };

  // save project detail in database
  const saveProjectDetail = async () => {
    setLoading(true);
    let value = localStorage.getItem("userInfo");
    if (typeof value === "string") {
      let userInfo: UserData = JSON.parse(value);
      console.log(userInfo.userId);
      const ref = doc(db, "resumedata", userInfo.userId);
      await updateDoc(ref, {
        projects: projects,
      });
      setLoading(false);
      // notify("data saved successfully");
    }
  };

  const { projects, setProjects, onmoveup, onmovedown, updateProjects } =
    ProjectsDetailStore((state) => ({
      projects: state.projects,
      setProjects: state.setProjects,
      onmoveup: state.onmoveup,
      onmovedown: state.onmovedown,
      updateProjects: state.updateProjects,
    }));
  const addprojects = () => {
    let newProject: ProjectsItem = {
      id: projects.length,
      project_name: `Project${projects.length}`,
      url: "",
      startDate: "dd-mm-yyyy",
      endDate: "dd-mm-yyyy",
      summary: "",
      in_progress: false,
      frameworks: [],
    };
    projects.push(newProject);
    setProjects(projects);
    setExpanded(`panel${newProject.id}`);
    console.log(projects);
  };
  const removeProjects = (id: number) => {
    let newProjects: ProjectsItem[] = projects;
    newProjects.splice(id, 1);
    setProjects(newProjects);
    console.log(projects);
  };

  const onChangeHandler = (
    value: string | boolean,
    key: string,
    id: number
  ) => {
    let newObj: ProjectsItem = projects[id];

    if (typeof value === "string") {
      if (
        key == "project_name" ||
        key == "url" ||
        key == "startDate" ||
        key == "endDate" ||
        key == "summary"
      ) {
        newObj[key] = value;
      }

      if (key === "frameworks") {
        console.log("hihihihihi");

        let frameObj: ISkillItem = {
          id: newObj["frameworks"].length,
          name: value,
        };
        newObj[key].push(frameObj);
      }
    } else if (typeof value === "boolean") {
      newObj["in_progress"] = value;
    }
    updateProjects(id, newObj);
    // console.log(newObj);
    console.log(projects);
  };

  const removeFramework = (id_of_project: number, id_of_frame: number) => {
    let newObj: ProjectsItem = projects[id_of_project];
    newObj["frameworks"].splice(id_of_frame, 1);
    updateProjects(id_of_project, newObj);
    console.log(projects);
  };

  const onMoveUp = (id: number) => {
    onmoveup(id);
    console.log(projects);
  };

  const onMoveDown = (id: number) => {
    onmovedown(id);
    console.log(projects);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 800 }}>
            Projects Detail
          </Typography>
        </div>
        <div>
          <CircularIntegration save={saveProjectDetail} />
        </div>
      </div>

      <div className="h-[3px] bg-slate-100 mt-[4px]"></div>

      <div className="flex justify-center items-center mt-[24px]">
        {projects.length == 0 ? (
          <>
            <button
              className="bg-gradient-to-r  from-[#2491f7] to-[#67c5fc] text-white rounded-md px-[20px] py-[4px] flex flex-row justify-center items-center "
              onClick={addprojects}
            >
              <span className="text-lg">Add Project</span>
            </button>
          </>
        ) : (
          <></>
        )}
      </div>

      <div className="mt-[12px] mb-[12px] relative">
        {projects.map((project, id_) => {
          return (
            <div className="grid_accordian">
              <div className="">
                <Tooltip title="Move Up">
                  <KeyboardArrowUpIcon
                    sx={{
                      marginLeft: "10px",
                      marginRight: "10px",
                      color: "#64b5f6",
                      cursor: "pointer",
                    }}
                    onClick={() => onMoveUp(id_)}
                  />
                </Tooltip>
                <Tooltip title="Move Up">
                  <KeyboardArrowDownIcon
                    sx={{
                      marginLeft: "10px",
                      marginRight: "10px",
                      color: "#64b5f6",
                      cursor: "pointer",
                    }}
                    onClick={() => onMoveDown(id_)}
                  />
                </Tooltip>
              </div>

              <Accordion
                expanded={expanded === `panel${id_}`}
                onChange={handleChange(`panel${id_}`)}
              >
                <AccordionSummary
                  aria-controls={`panel${id_}d-content`}
                  id={`panel${id_}d-header`}
                >
                  <Box className="">
                    <div>
                      <Typography>{project.project_name}</Typography>
                    </div>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Paticular_Project
                    updateValue={(
                      value: string | boolean,
                      key: string,
                      id: number
                    ) => onChangeHandler(value, key, id)}
                    projects={project}
                    id_={id_}
                    removeFramework={(
                      id_of_project: number,
                      id_of_frame: number
                    ) => removeFramework(id_of_project, id_of_frame)}
                  />
                </AccordionDetails>
              </Accordion>

              <div className="flex flex-column pt-[12px] absolute right-0 pr-5 ">
                <Tooltip title="Delete">
                  <DeleteIcon
                    sx={{
                      marginLeft: "10px",
                      marginRight: "10px",
                      color: "#64b5f6",
                      cursor: "pointer",
                    }}
                    onClick={() => removeProjects(id_)}
                  />
                </Tooltip>
                {id_ == projects.length - 1 ? (
                  <>
                    <Tooltip title="Add Projects">
                      <AddIcon
                        sx={{
                          marginLeft: "10px",
                          marginRight: "10px",
                          color: "#64b5f6",
                          cursor: "pointer",
                        }}
                        onClick={addprojects}
                      />
                    </Tooltip>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsLayout;
