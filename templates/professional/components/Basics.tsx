import React from "react";
import { IBasicDetailsItem, IProfiles } from "../../../store/index.interface";
import { ProfileName } from "../atoms/ProfileName";
import { SectionSubtitle } from "../atoms/SectionSubtitle";
import { ProfileContact } from "../atoms/ProfileContact";
import { ProfileImage } from "../../../helpers/common/components/ProfileImage";
import ProfileLink from "../atoms/ProfileLink";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import BasicDetailStore from "../../../store/basic_store";

const Basics = () => {
  const { basics, changeValue } = BasicDetailStore((state) => ({
    basics: state.values,
    changeValue: state.changeValue,
  }));
  return (
    <div className="p-2" style={{ paddingBottom: "0px" }}>
      <ProfileName name={basics.name} />
      <div
        className="flex flex-row justify-between items-center"
        style={{ padding: "8px 200px", paddingTop: "0px" }}
      >
        <div className="flex flex-row">
          <AiFillPhone style={{ color: "#0062b4", margin: "2px" }} />
          <ProfileContact text={basics.phone} />
        </div>
        <div className="flex flex-row">
          <MdEmail style={{ color: "#0062b4", margin: "3px" }} />
          <ProfileContact text={basics.email} />
        </div>
      </div>
      <div
        className="flex flex-row justify-between"
        style={{ padding: "0px 100px", color: "#0062b4" }}
      >
        {basics.profiles.map((item: IProfiles, id: number) => {
          return (
            <div key={id}>
              <ProfileLink props={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Basics;
