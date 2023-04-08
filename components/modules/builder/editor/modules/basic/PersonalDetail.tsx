import React from "react";
import TextField from "@mui/material/TextField";
import { IBasicDetailsItem } from "../../../../../../store/basic.interface";

interface Props {
  Handler: (value: any, key: string) => void;
  values: IBasicDetailsItem;
}

const PersonalDetail = (props: Props) => {
  return (
    <div>
      <div>
        {/*  for name input */}
        <div className="mt-[20px] mb-[20px]">
          <TextField
            id="outlined-basic"
            fullWidth
            label="Name"
            value={props.values.name}
            variant="outlined"
            onChange={(e) => props.Handler(e.target.value, "name")}
          />
        </div>

        {/* for email input */}
        <div className="mt-[20px] mb-[20px]">
          <TextField
            id="outlined-basic"
            fullWidth
            label="Email"
            value={props.values.email}
            variant="outlined"
            onChange={(e) => props.Handler(e.target.value, "email")}
          />
        </div>

        {/* for phone number input   */}
        <div className="mt-[20px] mb-[20px]">
          <TextField
            id="outlined-basic"
            fullWidth
            label="Phone no."
            value={props.values.phone}
            variant="outlined"
            onChange={(e) => props.Handler(e.target.value, "phone")}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalDetail;
