import React from "react";
import DisplayTemplates from "./DisplayTemplates";
import GetStarted from "./GetStarted";
import GuideToMakeBetterResume from "./GuideToMakeBetterResume";

const HomePage = (): JSX.Element => {
  return (
    <>
      <div className="h-[auto]">
        <GetStarted />
        <DisplayTemplates />
        <GuideToMakeBetterResume />
      </div>
    </>
  );
};

export default HomePage;
