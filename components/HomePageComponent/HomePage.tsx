import React from "react";
import DisplayTemplates from "./DisplayTemplates";
import GetStarted from "./GetStarted";
import GuideToMakeBetterResume from "./GuideToMakeBetterResume";

const HomePage = (): JSX.Element => {
  return (
    <>
      <GetStarted />
      <DisplayTemplates />
      <GuideToMakeBetterResume />
    </>
  );
};

export default HomePage;
