import React from "react";
import { IBasicDetailsItem, IProfiles } from "../../../store/index.interface";
import { ProfileName } from "../atoms/ProfileName";
import { SectionSubtitle } from "../atoms/SectionSubtitle";
import { ProfileContact } from "../atoms/ProfileContact";
import { ProfileImage } from "../../../helpers/common/components/ProfileImage";
import ProfileLink from "../atoms/ProfileLink";

const Basics = ({ basics }: { basics: IBasicDetailsItem }) => {
  return (
    <div className="flex justify-between items-center p-2">
      <div>
        <ProfileName name={basics.name} />
        <SectionSubtitle label={basics.label} />
        <div className="flex gap-3">
          <ProfileContact text={basics.phone} />
          <ProfileContact text={basics.email} />
        </div>
        <div className="flex flex-row justify-between">
          {basics.profiles.map((item: IProfiles, id: number) => {
            return (
              <div>
                <ProfileLink props={item} />
              </div>
            );
          })}
        </div>
      </div>
      <ProfileImage src={basics.image} height="100px" width="100px" />
    </div>
  );
};

export default Basics;
