import React from "react";
import Logo from "./sidebar/Logo";
import DownloadButton from "./header/DownloadButton";
import { TemplateSelect } from "./header/templates/TemplateSelect";
import { NavMenuItem } from "./header/templates/MenuItem";
import { NavBarMenu } from "./header/templates/NavbarMenu";
import { AVAILABLE_TEMPLATES } from "../../../../../helpers/constants";

const TOTAL_TEMPLATES_AVAILABLE = Object.keys(AVAILABLE_TEMPLATES).length;

const Header = () => {
  return (
    <div className="bg-white p-[20px] px-[32px] rounded-xl shadow-xl flex flex-row justify-between items-center">
      <NavBarMenu>
        <NavMenuItem
          caption={`Templates (${TOTAL_TEMPLATES_AVAILABLE})`}
          popoverChildren={<TemplateSelect />}
        />
      </NavBarMenu>
      <DownloadButton />
    </div>
  );
};

export default Header;
