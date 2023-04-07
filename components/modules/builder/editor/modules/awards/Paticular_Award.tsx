import React from "react";
import { IAwardItem } from "../../../../../../store/awards.interface";
import { TextField } from "@mui/material";
import { RichtextEditor } from "../../../../../../helpers/common/components/richtext";
interface PAward {
  id_: number;
  updateValue: (value: string, key: string, id: number) => void;
  awards: IAwardItem;
}

const Paticular_Award = (props: PAward) => {
  return (
    <div>
      {/* Award title Input */}
      <div className="mt-[20px] mb-[20px]">
        <TextField
          id="outlined-basic"
          fullWidth
          label="Title"
          variant="outlined"
          value={props.awards.title}
          onChange={(e) =>
            props.updateValue(e.target.value, "title", props.id_)
          }
        />
      </div>

      {/* Organisation */}
      <div className="mt-[20px] mb-[20px]">
        <TextField
          id="outlined-basic"
          fullWidth
          label="Organisation"
          variant="outlined"
          value={props.awards.organisation}
          onChange={(e) =>
            props.updateValue(e.target.value, "organisation", props.id_)
          }
        />
      </div>

      {/* date */}
      <div className="mt-[20px] mb-[20px]">
        <TextField
          id="outlined-basic"
          fullWidth
          label="Date"
          type="month"
          variant="outlined"
          value={props.awards.date}
          onChange={(e) => props.updateValue(e.target.value, "date", props.id_)}
        />
      </div>

      {/* summary */}

      <div className="mt-[20px] mb-[20px]">
        <RichtextEditor
          label="Description"
          value={props.awards.summary}
          name="Description"
          onChange={(htmlOutput) =>
            props.updateValue(htmlOutput, "summary", props.id_)
          }
        />
      </div>
    </div>
  );
};

export default Paticular_Award;
