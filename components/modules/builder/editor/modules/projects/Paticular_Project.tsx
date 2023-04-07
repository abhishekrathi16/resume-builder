import { Box, Switch, TextField } from "@mui/material";
import React, { useState } from "react";
import { ProjectsItem } from "../../../../../../store/projects.interface";
import { RichtextEditor } from "../../../../../../helpers/common/components/richtext";

import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

interface Pprojects {
  id_: number;
  projects: ProjectsItem;
  updateValue: (value: string | boolean, key: string, id: number) => void;
  removeFramework: (id_of_project: number, id_of_frame: number) => void;
}

const Paticular_Project = (props: Pprojects) => {
  const [frame, setFrame] = useState("");
  const addFrame = () => {
    props.updateValue(frame, "frameworks", props.id_);
    setFrame("");
  };

  const OnkeyDownaddFramework = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      props.updateValue(frame, "frameworks", props.id_);
      setFrame("");
    }
  };

  return (
    <div>
      {/* Project Name */}
      <div className="mt-[20px] mb-[20px]">
        <TextField
          id="outlined-basic"
          fullWidth
          label="Project Name"
          variant="outlined"
          value={props.projects.project_name}
          inputProps={{ maxLength: 40 }}
          onChange={(e) =>
            props.updateValue(e.target.value, "project_name", props.id_)
          }
        />
      </div>

      <div className="mt-[12px] mb-[12px] bg-slate-200 p-[18px] rounded-xl">
        <div className="mt-[8px] mb-[8px]">
          <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }}>
            {props.projects.frameworks.map((frames, id) => {
              return (
                <>
                  <div className="mt-[4px] mb-[4px] ">
                    <Box
                      style={{
                        backgroundColor: "#1E40AF ",
                        borderRadius: "16px",
                        padding: "4px",
                      }}
                    >
                      <Chip
                        label={`${frames.name}`}
                        sx={{
                          color: "white",
                          backgroundColor: "#1E40AF	",
                          fontSize: "15px",
                        }}
                      />
                      <CloseIcon
                        sx={{ color: "white", cursor: "pointer" }}
                        onClick={() => props.removeFramework(props.id_, id)}
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
              label="Framework Used"
              variant="standard"
              value={frame}
              onChange={(e) => setFrame(e.target.value)}
              onKeyDown={(e) => OnkeyDownaddFramework(e)}
            />
            <AddIcon
              sx={{ color: "#1E40AF", mr: 1, my: 0.5, cursor: "pointer" }}
              onClick={addFrame}
            />
          </Box>
        </>
      </div>

      {/* Project Link */}
      <div className="mt-[20px] mb-[20px]">
        <TextField
          id="outlined-basic"
          fullWidth
          label="Project Link"
          variant="outlined"
          value={props.projects.url}
          onChange={(e) => props.updateValue(e.target.value, "url", props.id_)}
        />
      </div>

      {/*  start Date */}
      <div className="mt-[20px] mb-[20px]">
        <TextField
          id="outlined-basic"
          fullWidth
          label="Start Date"
          variant="outlined"
          type="month"
          value={props.projects.startDate}
          onChange={(e) =>
            props.updateValue(e.target.value, "startDate", props.id_)
          }
        />
      </div>

      {/*  end Date */}
      <div className="mt-[20px] mb-[20px]">
        <TextField
          id="outlined-basic"
          fullWidth
          label="End Date"
          variant="outlined"
          type="month"
          value={props.projects.endDate}
          onChange={(e) =>
            props.updateValue(e.target.value, "endDate", props.id_)
          }
        />
      </div>

      {/*   summary */}
      <div className="mt-[20px] mb-[20px]">
        <RichtextEditor
          label="Description"
          value={props.projects.summary}
          name="Description"
          onChange={(htmlOutput) =>
            props.updateValue(htmlOutput, "summary", props.id_)
          }
        />
      </div>
    </div>
  );
};

export default Paticular_Project;
