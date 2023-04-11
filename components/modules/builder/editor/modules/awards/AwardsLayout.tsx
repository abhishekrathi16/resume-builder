import React, { useEffect, useState } from "react";
import { AwardDetailStore } from "../../../../../../store/awards_store";
import { IAwardItem } from "../../../../../../store/awards.interface";

import { Box, Tooltip, Typography } from "@mui/material";
import Image from "next/image";

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
import Paticular_Award from "./Paticular_Award";

import save from "../../../../../../assets/icons/save-svgrepo-com.svg";

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

const AwardsLayout = () => {
  const [expanded, setExpanded] = React.useState<string | false>("panel0");
  const [loading, setLoading] = useState(false);

  const notify = (content: string) => {
    toast(content);
  };

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const { awards, setAwards, onmoveup, onmovedown, updateAward } =
    AwardDetailStore((state) => ({
      awards: state.awards,
      setAwards: state.setAwards,
      onmoveup: state.onmoveup,
      onmovedown: state.onmovedown,
      updateAward: state.updateAward,
    }));

  // save awards data to database
  const saveAwardsDetail = async () => {
    setLoading(true);
    let value = localStorage.getItem("userInfo");
    if (typeof value === "string") {
      let userInfo: UserData = JSON.parse(value);
      console.log(userInfo.userId);
      const ref = doc(db, "resumedata", userInfo.userId);
      await updateDoc(ref, {
        awards: awards,
      });
      setLoading(false);
      // notify("data saved successfully");
    }
  };

  const onMoveUp = (id: number) => {
    onmoveup(id);
    console.log(awards);
  };
  const onMoveDown = (id: number) => {
    onmovedown(id);
    console.log(awards);
  };
  const addAward = () => {
    let newAward: IAwardItem = {
      id: awards.length,
      title: `Awards${awards.length}`,
      date: "dd-mm-yyyy",
      organisation: "",
      summary: "",
    };
    awards.push(newAward);
    setAwards(awards);
    setExpanded(`panel${newAward.id}`);
    console.log(awards);
  };
  const removeAward = (id: number) => {
    let newArray: IAwardItem[] = awards;
    newArray.splice(id, 1);
    setAwards(newArray);
    console.log(awards);
  };

  const onChangeHandler = (value: string, key: string, id: number) => {
    let newObj: IAwardItem = awards[id];
    if (
      key == "title" ||
      key == "organisation" ||
      key == "date" ||
      key == "summary"
    ) {
      newObj[key] = value;
    }
    updateAward(id, newObj);
    console.log(awards);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 800 }}>
            Awards Detail
          </Typography>
        </div>
        <div>
          <CircularIntegration save={saveAwardsDetail} />
        </div>
      </div>

      <div className="h-[3px] bg-slate-100 mt-[4px]"></div>

      {/* for showcasing addbutton when length of awards array ==0 */}
      <div className="flex justify-center items-center mt-[24px]">
        {awards.length == 0 ? (
          <>
            <button
              className="bg-gradient-to-r  from-[#2491f7] to-[#67c5fc] text-white rounded-md px-[20px] py-[4px] flex flex-row justify-center items-center "
              onClick={addAward}
            >
              <span className="text-lg">Add Award</span>
            </button>
          </>
        ) : (
          <></>
        )}
      </div>

      <div className="mt-[12px] mb-[12px] relative ">
        {awards.map((award, id_) => {
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
                      <Typography>{award.title}</Typography>
                    </div>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Paticular_Award
                    updateValue={(value: string, key: string, id: number) =>
                      onChangeHandler(value, key, id)
                    }
                    awards={award}
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
                    onClick={() => removeAward(id_)}
                  />
                </Tooltip>
                {id_ == awards.length - 1 ? (
                  <>
                    <Tooltip title="Add Projects">
                      <AddIcon
                        sx={{
                          marginLeft: "10px",
                          marginRight: "10px",
                          color: "#64b5f6",
                          cursor: "pointer",
                        }}
                        onClick={addAward}
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

export default AwardsLayout;
