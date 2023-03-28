import { Fragment, useState } from "react";

import { INavMenuItemProps } from "./menuItem.interface";
import Image from "next/image";
import { NavMenuPopover } from "./NavMenuPopover";
import { Button } from "@mui/material";
import DropDown from "../../../../../../../assets/icons/down-arrow-backup-2-svgrepo-com (2).svg";
// import { StyledButton } from './StyledButton';

export const NavMenuItem = ({
  caption,
  popoverChildren,
}: INavMenuItemProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <Button
        variant="text"
        onClick={handleClick}
        aria-describedby={"mark"}
        endIcon={
          <Image
            src={DropDown}
            alt="dropdown-arrow"
            width="20"
            height="20"
            className={`${anchorEl ? "scale-y-[-1]" : ""}`}
          />
        }
      >
        {caption}
      </Button>
      <NavMenuPopover
        isOpen={!!anchorEl}
        anchorElement={anchorEl}
        id="mark"
        onClose={handleClose}
      >
        {popoverChildren}
      </NavMenuPopover>
    </Fragment>
  );
};
