import React, { useState } from "react";
import BasicDetailStore from "../../../../../../store/basic_store";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Image from "next/image";
import PersonalDetail from "./PersonalDetail";
import PortfolioLink from "./PortfolioLink";

import save from "../../../../../../assets/icons/save-svgrepo-com.svg";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../../../FirebaseConfig/FirebaseConfig";
import { UserData } from "../../../../../../store/SignIn_SignOut";

import Loading from "../../../../../Loading_Button";
import { toast } from "react-toastify";
import { CircularIntegration } from "../SaveButton";

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
  const [loading, setLoading] = useState(false);
  const [compo, setCompo] = useState(0);

  const notify = (content: string) => {
    toast(content);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const { values, changeValue } = BasicDetailStore((state) => ({
    values: state.values,
    changeValue: state.changeValue,
  }));

  // function to save Basic Detail data

  const saveBasicDetail = async () => {
    let value = localStorage.getItem("userInfo");
    if (typeof value === "string") {
      setLoading(true);
      let userInfo: UserData = JSON.parse(value);
      console.log(userInfo.userId);
      const ref = doc(db, "resumedata", userInfo.userId);
      await updateDoc(ref, {
        basics: values,
      });
      setLoading(false);
      // notify("data saved successfully");
    }
  };

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
      <div className="flex justify-between items-center">
        <div>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 800 }}>
            Edit Profile Details
          </Typography>
        </div>
        <div>
          <CircularIntegration save={saveBasicDetail} />
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
