import React from "react";
import TextField from "@mui/material/TextField";
import { IBasicDetailsItem } from "../../../../../../store/basic.interface";

interface Props {
  Handler: (value: any, key: string) => void;
  values: IBasicDetailsItem;
}

const PortfolioLink = (props: Props) => {
  return (
    <div>
      <div>
        {props.values.profiles.map((profile) => {
          return (
            <>
              <div className="mt-[20px] mb-[20px]">
                <TextField
                  id="outlined-basic"
                  fullWidth
                  label={profile.profile_name}
                  variant="outlined"
                  value={profile.profile_url}
                  onChange={(e) =>
                    props.Handler(e.target.value, `${profile.profile_name}`)
                  }
                />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default PortfolioLink;
