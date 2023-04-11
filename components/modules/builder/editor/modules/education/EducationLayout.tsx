import React, { useState } from "react";
import { EducationDetailStore } from "../../../../../../store/education_store";
import { IEducationItem } from "../../../../../../store/education.interface";
import Image from "next/image";
import { Box, Button, Tooltip, Typography } from "@mui/material";

// material Icons Import for MoveUp, Down and Delete
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

import save from "../../../../../../assets/icons/save-svgrepo-com.svg";

import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Paticular_Educational from "./Paticular_Educational";

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

const EducationLayout = () => {
  const [expanded, setExpanded] = React.useState<string | false>("panel0");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const [loading, setLoading] = useState(false);

  const notify = (content: string) => {
    toast(content);
  };

  const { academics, setEducation, updateEducation, onmoveup, onmovedown } =
    EducationDetailStore((state) => ({
      academics: state.academics,
      setEducation: state.setEducation,
      updateEducation: state.updateEducation,
      onmoveup: state.onmoveup,
      onmovedown: state.onmovedown,
    }));

  // for saving educational detail in firebase
  const saveEducationalDetail = async () => {
    let value = localStorage.getItem("userInfo");
    if (typeof value === "string") {
      setLoading(true);
      let userInfo: UserData = JSON.parse(value);
      console.log(userInfo.userId);
      const ref = doc(db, "resumedata", userInfo.userId);
      await updateDoc(ref, {
        education: academics,
      });
      setLoading(false);
      // notify("data saved successfully");
    }
  };

  const addEducation = () => {
    let newEducation: IEducationItem = {
      id: academics.length,
      institution: "College/School Name",
      degree: "",
      course: "",
      startDate: "dd-mm-yyyy",
      endDate: "dd-mm-yyyy",
      score: "",
    };

    let newArray: IEducationItem[] = academics;
    newArray.push(newEducation);
    setEducation(newArray);
    setExpanded(`panel${newEducation.id}`);
    console.log(academics);
  };

  const removeEducation = (id: number) => {
    let newArray: IEducationItem[] = academics;
    newArray.splice(id, 1);
    setEducation(newArray);
    console.log(academics);
  };

  const onMoveUp = (id: number) => {
    onmoveup(id);
    console.log(academics);
  };

  const onMoveDown = (id: number) => {
    onmovedown(id);
    console.log(academics);
  };

  const onChangeHandler = (id: number, value: string, key: string) => {
    let objTochange: IEducationItem = academics[id];
    if (
      key == "institution" ||
      key == "degree" ||
      key == "course" ||
      key === "score" ||
      key === "startDate" ||
      key === "endDate"
    )
      objTochange[key] = value;

    updateEducation(id, objTochange);
    console.log(academics);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 800 }}>
            Educational Detail
          </Typography>
        </div>
        <div>
          <CircularIntegration save={saveEducationalDetail} />
        </div>
      </div>

      <div className="h-[3px] bg-slate-100 mt-[4px]"></div>

      <div className="flex justify-center items-center mt-[24px]">
        {academics.length == 0 ? (
          <>
            <button
              className="bg-gradient-to-r  from-[#2491f7] to-[#67c5fc] text-white rounded-md px-[20px] py-[4px] flex flex-row justify-center items-center "
              onClick={addEducation}
            >
              <span className="text-lg">Add Education</span>
            </button>
          </>
        ) : (
          <></>
        )}
      </div>

      <div className="mt-[12px] mb-[12px] relative">
        {academics.map((acad, id_) => {
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
                      <Typography>{acad.institution}</Typography>
                    </div>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Paticular_Educational
                    updateValue={(id: number, value: string, key: string) =>
                      onChangeHandler(id, value, key)
                    }
                    academic={acad}
                    id_={id_}
                  />
                </AccordionDetails>
              </Accordion>
              <div className="flex flex-column pt-[12px] absolute right-0 pr-5">
                <Tooltip title="Delete">
                  <DeleteIcon
                    sx={{
                      marginLeft: "10px",
                      marginRight: "10px",
                      color: "#64b5f6",
                      cursor: "pointer",
                    }}
                    onClick={() => removeEducation(id_)}
                  />
                </Tooltip>
                {id_ == academics.length - 1 ? (
                  <>
                    <Tooltip title="Add Education">
                      <AddIcon
                        sx={{
                          marginLeft: "10px",
                          marginRight: "10px",
                          color: "#64b5f6",
                          cursor: "pointer",
                        }}
                        onClick={addEducation}
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

export default EducationLayout;
