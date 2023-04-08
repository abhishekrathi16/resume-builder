import { TextField } from "@mui/material";
import React, { useState } from "react";
import { IExperienceItem } from "../../../../../../store/experience.interface";
import Switch from "@mui/material/Switch";
import { RichtextEditor } from "../../../../../../helpers/common/components/richtext";

interface PExperience {
  experience: IExperienceItem;
  id_: number;
  updateValue: (value: string | boolean, key: string, id: number) => void;
}

const Paticular_Experience = (props: PExperience) => {
  const [checks, setChecks] = useState(props.experience.isWorkingHere);
  return (
    <div>
      {/* comapny name input */}
      <div className="mt-[20px] mb-[20px]">
        <TextField
          id="outlined-basic"
          fullWidth
          label="Company Name"
          variant="outlined"
          value={props.experience.company_name}
          inputProps={{ maxLength: 40 }}
          onChange={(e) =>
            props.updateValue(e.target.value, "company_name", props.id_)
          }
        />
      </div>

      {/* position input */}
      <div className="mt-[20px] mb-[20px]">
        <TextField
          id="outlined-basic"
          fullWidth
          label="Position"
          variant="outlined"
          value={props.experience.position}
          onChange={(e) =>
            props.updateValue(e.target.value, "position", props.id_)
          }
        />
      </div>

      {/* url input */}
      <div className="mt-[20px] mb-[20px]">
        <TextField
          id="outlined-basic"
          fullWidth
          label="Url"
          variant="outlined"
          value={props.experience.url}
          onChange={(e) => props.updateValue(e.target.value, "url", props.id_)}
        />
      </div>

      {/* startDate input */}
      <div className="mt-[20px] mb-[20px]">
        <TextField
          id="outlined-basic"
          fullWidth
          label="Start Date"
          type="month"
          variant="outlined"
          value={props.experience.startDate}
          onChange={(e) =>
            props.updateValue(e.target.value, "startDate", props.id_)
          }
        />
      </div>

      {/* is working here */}
      <div className="flex justify-end items-center">
        <span className="text-xs">I currently work here</span>
        <Switch
          defaultChecked={checks}
          onClick={() =>
            props.updateValue(
              !props.experience.isWorkingHere,
              "isWorkingHere",
              props.id_
            )
          }
        />
      </div>

      {/* endDate input */}
      <div className="mt-[20px] mb-[20px]">
        <TextField
          id="outlined-basic"
          fullWidth
          label="End Date"
          type="month"
          variant="outlined"
          value={props.experience.endDate}
          disabled={props.experience.isWorkingHere ? true : false}
          onChange={(e) =>
            props.updateValue(e.target.value, "endDate", props.id_)
          }
        />
      </div>

      {/* Rich Text Editor */}
      <div>
        <RichtextEditor
          label="Description"
          value={props.experience.summary}
          name="Description"
          onChange={(htmlOutput) =>
            props.updateValue(htmlOutput, "summary", props.id_)
          }
        />
      </div>
    </div>
  );
};

export default Paticular_Experience;
