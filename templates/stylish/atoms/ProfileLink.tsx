import React from "react";
import { IProfiles } from "../../../store/index.interface";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaHackerrank } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";
import { SiHackerearth } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";

const switchIcons = (props: IProfiles): JSX.Element => {
  switch (props.profile_name) {
    case "github":
      return (
        <a href={props.profile_url}>
          <AiFillGithub />
        </a>
      );
    case "twitter":
      return (
        <a href={props.profile_url}>
          <AiOutlineTwitter />
        </a>
      );
    case "linkedin":
      return (
        <a href={props.profile_url}>
          <AiFillLinkedin />
        </a>
      );
    case "hackerrank":
      return (
        <a href={props.profile_url}>
          <FaHackerrank />
        </a>
      );
    case "hackerearth":
      return (
        <a href={props.profile_url}>
          <SiHackerearth />
        </a>
      );
    case "codechef":
      return (
        <a href={props.profile_url}>
          <SiCodechef />
        </a>
      );
    case "leetcode":
      return (
        <a href={props.profile_url}>
          <SiLeetcode />
        </a>
      );
    default:
      return <></>;
  }
};

const ProfileLink = ({ props }: { props: IProfiles }) => {
  return <>{switchIcons(props)}</>;
};

export default ProfileLink;
