import React from "react";
import { TextField } from "@mui/material";
import { IEducationItem } from "../../../../../../store/education.interface";

interface PEducation {
  academic: IEducationItem;
  id_: number;
  updateValue: (id: number, value: string, key: string) => void;
}

const Paticular_Educational = (props: PEducation) => {
  return (
    <div>
      {/* institution name input */}
      <div className="mt-[20px] mb-[20px]">
        <TextField
          id="outlined-basic"
          fullWidth
          label="Institution"
          variant="outlined"
          value={props.academic.institution}
          inputProps={{ maxLength: 40 }}
          onChange={(e) =>
            props.updateValue(props.id_, e.target.value, "institution")
          }
        />
      </div>

      {/* degree input */}
      <div className="mt-[20px] mb-[20px]">
        <TextField
          id="outlined-basic"
          fullWidth
          label="Degree"
          variant="outlined"
          value={props.academic.degree}
          onChange={(e) =>
            props.updateValue(props.id_, e.target.value, "degree")
          }
        />
      </div>

      {/* course input */}
      <div className="mt-[20px] mb-[20px]">
        <TextField
          id="outlined-basic"
          fullWidth
          label="Course"
          variant="outlined"
          value={props.academic.course}
          onChange={(e) =>
            props.updateValue(props.id_, e.target.value, "course")
          }
        />
      </div>

      {/* startDate */}
      <div className="mt-[20px] mb-[20px]">
        <TextField
          id="outlined-basic"
          fullWidth
          label="Start Date"
          variant="outlined"
          type="month"
          value={props.academic.startDate}
          onChange={(e) =>
            props.updateValue(props.id_, e.target.value, "startDate")
          }
        />
      </div>

      {/* endDate input */}
      <div className="mt-[20px] mb-[20px]">
        <TextField
          id="outlined-basic"
          fullWidth
          label="End Date"
          variant="outlined"
          type="month"
          value={props.academic.endDate}
          onChange={(e) =>
            props.updateValue(props.id_, e.target.value, "endDate")
          }
        />
      </div>

      {/* CGPA/ Percentage input */}
      <div className="mt-[20px] mb-[20px]">
        <TextField
          id="outlined-basic"
          fullWidth
          label="CGPA/Percentage"
          variant="outlined"
          value={props.academic.score}
          onChange={(e) =>
            props.updateValue(props.id_, e.target.value, "score")
          }
        />
      </div>
    </div>
  );
};

export default Paticular_Educational;
