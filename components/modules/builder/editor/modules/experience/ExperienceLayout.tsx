import React, { useEffect, useState } from "react";
import { IExperienceItem } from "../../../../../../store/experience.interface";
import { ExperienceDetailStore } from "../../../../../../store/experience_store";
import TextField from "@mui/material/TextField";
import { Box, Tooltip, Typography } from "@mui/material";

// icons for moveUp, down , delete
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Paticular_Experience from "./Paticular_Experience";

import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../../../FirebaseConfig/FirebaseConfig";
import { UserData } from "../../../../../../store/SignIn_SignOut";
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

const ExperienceLayout = () => {
  //  for accordian
  const [expanded, setExpanded] = React.useState<string | false>("panel0");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const [loading, setLoading] = useState(false);
  const notify = (content: string) => {
    toast(content);
  };

  const { experiences, setExperience, onmoveup, onmovedown, updateExperience } =
    ExperienceDetailStore((state) => ({
      experiences: state.experiences,
      setExperience: state.setExperience,
      onmoveup: state.onmoveup,
      onmovedown: state.onmovedown,
      updateExperience: state.updateExperience,
    }));

  // ṣave experience data to database
  const saveExperienceDetail = async () => {
    setLoading(true);
    let value = localStorage.getItem("userInfo");
    if (typeof value === "string") {
      let userInfo: UserData = JSON.parse(value);
      console.log(userInfo.userId);
      const ref = doc(db, "resumedata", userInfo.userId);
      await updateDoc(ref, {
        work: experiences,
      });
      setLoading(false);
      // notify("data saved successfully");
    }
  };

  const onMoveUp = (id: number) => {
    onmoveup(id);
    console.log(experiences);
  };
  const onMoveDown = (id: number) => {
    onmovedown(id);
    console.log(experiences);
  };
  const addExperience = () => {
    let newExperience: IExperienceItem = {
      id: experiences.length,
      company_name: "Company Name",
      position: "",
      url: "",
      startDate: "dd-mm-yyyy",
      endDate: "dd-mm-yyyy",
      summary: "",
      isWorkingHere: false,
    };
    experiences.push(newExperience);
    setExperience(experiences);
    setExpanded(`panel${newExperience.id}`);
    console.log(experiences);
  };

  const removeExperience = (id: number) => {
    let newExperiences: IExperienceItem[] = experiences;
    newExperiences.splice(id, 1);
    setExperience(newExperiences);
    console.log(experiences);
  };

  const onChangeHandler = (
    value: string | boolean | HTMLOutputElement,
    key: string,
    id: number
  ) => {
    let newObj: IExperienceItem = experiences[id];

    if (typeof value === "string") {
      if (
        key == "company_name" ||
        key == "position" ||
        key == "url" ||
        key == "startDate" ||
        key == "endDate" ||
        key == "summary"
      ) {
        newObj[key] = value;
      }
    } else if (typeof value === "boolean") {
      newObj["isWorkingHere"] = value;
    }
    updateExperience(id, newObj);
    console.log(experiences);
  };

  useEffect(() => {
    console.log(experiences);
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 800 }}>
            Experience Detail
          </Typography>
        </div>
        <div>
          <CircularIntegration save={saveExperienceDetail} />
        </div>
      </div>

      <div className="h-[3px] bg-slate-100 mt-[4px]"></div>

      <div className="flex justify-center items-center mt-[24px]">
        {experiences.length == 0 ? (
          <>
            <button
              className="bg-gradient-to-r  from-[#2491f7] to-[#67c5fc] text-white rounded-md px-[20px] py-[4px] flex flex-row justify-center items-center "
              onClick={addExperience}
            >
              <span className="text-lg">Add Experience</span>
            </button>
          </>
        ) : (
          <></>
        )}
      </div>

      <div className="mt-[12px] mb-[12px] relative ">
        {experiences.map((experience, id_) => {
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
                      <Typography>{experience.company_name}</Typography>
                    </div>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Paticular_Experience
                    updateValue={(
                      value: string | boolean,
                      key: string,
                      id: number
                    ) => onChangeHandler(value, key, id)}
                    experience={experience}
                    id_={id_}
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
                    onClick={() => removeExperience(id_)}
                  />
                </Tooltip>
                {id_ == experiences.length - 1 ? (
                  <>
                    <Tooltip title="Add Experience">
                      <AddIcon
                        sx={{
                          marginLeft: "10px",
                          marginRight: "10px",
                          color: "#64b5f6",
                          cursor: "pointer",
                        }}
                        onClick={addExperience}
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

export default ExperienceLayout;
