import React, { useRef, useState } from "react";
import BasicDetailStore from "../../../../../../store/basic_store";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Image from "next/image";
import PersonalDetail from "./PersonalDetail";
import PortfolioLink from "./PortfolioLink";

import save from "../../../../../../assets/icons/save-svgrepo-com.svg";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const BasicLayout = () => {
  const [value, setValue] = React.useState(0);

  const [compo, setCompo] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // function to save basicDetail data to firebase
  const saveBasicDetail = async () => {};

  const { values, changeValue } = BasicDetailStore((state) => ({
    values: state.values,
    changeValue: state.changeValue,
  }));

  const onChangeHandler = (value: any, key: string) => {
    const newValue = values;
    let arrayValue = newValue["profiles"];
    if (
      key == "name" ||
      key == "email" ||
      key == "phone" ||
      key == "image" ||
      key == "label"
    )
      newValue[key] = value;
    if (
      key == "github" ||
      key == "linkedin" ||
      key == "leetcode" ||
      key == "codeforces" ||
      key == "codechef" ||
      key == "twitter" ||
      key == "hackerrank" ||
      key == "hackerearth"
    ) {
      arrayValue = [
        ...arrayValue.map((item) => {
          if (item.profile_name == key) {
            return {
              profile_name: key,
              profile_url: value,
            };
          } else return item;
        }),
      ];
    }
    newValue["profiles"] = arrayValue;
    changeValue(newValue);
    console.log(values);
  };

  return (
    <div>
      <div className="flex justify-between">
        <div>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 800 }}>
            Edit Profile Details
          </Typography>
        </div>
        <div>
          <button
            className="bg-gradient-to-r  from-[#2491f7] to-[#67c5fc] text-white rounded-md px-[20px] py-[4px] flex flex-row justify-center items-center "
            onClick={saveBasicDetail}
          >
            <Image
              src={save}
              alt="teri ma ki"
              className="h-[30px] w-[30px] mr-[10px]"
            />
            <span className="text-lg">Save</span>
          </button>
        </div>
      </div>
      <div>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              variant="fullWidth"
            >
              <Tab
                label="Personal Detail"
                {...a11yProps(0)}
                onClick={() => setCompo(0)}
                sx={{ textTransform: "capitalize" }}
              />
              <Tab
                label="Portfolio Link"
                {...a11yProps(1)}
                onClick={() => setCompo(1)}
                sx={{ textTransform: "capitalize" }}
              />
            </Tabs>
          </Box>
          <div className="mt-[24px]">
            {compo == 0 ? (
              <>
                <PersonalDetail
                  Handler={(value: any, key: string) =>
                    onChangeHandler(value, key)
                  }
                  values={values}
                />
              </>
            ) : (
              <>
                <PortfolioLink
                  Handler={(value: any, key: string) =>
                    onChangeHandler(value, key)
                  }
                  values={values}
                />
              </>
            )}
          </div>
        </Box>
      </div>
    </div>
  );
};

export default BasicLayout;
