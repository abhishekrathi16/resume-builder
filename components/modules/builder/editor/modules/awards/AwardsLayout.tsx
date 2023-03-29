import React, { useEffect } from "react";
import { AwardDetailStore } from "../../../../../../store/awards_store";
import { IAwardItem } from "../../../../../../store/awards.interface";

const AwardsLayout = () => {
  const { awards, setAwards, onmoveup, onmovedown, updateAward } =
    AwardDetailStore((state) => ({
      awards: state.awards,
      setAwards: state.setAwards,
      onmoveup: state.onmoveup,
      onmovedown: state.onmovedown,
      updateAward: state.updateAward,
    }));

  const moveUp = (id: number) => {
    onmoveup(id);
    console.log(awards);
  };
  const moveDown = (id: number) => {
    onmovedown(id);
    console.log(awards);
  };
  const addAward = () => {
    let newAward: IAwardItem = {
      id: awards.length,
      title: "",
      date: "",
      organisation: "",
      summary: "",
    };
    awards.push(newAward);
    setAwards(awards);
    console.log(awards);
  };
  const removeAward = (id: number) => {
    let newArray: IAwardItem[] = awards;
    newArray.splice(id, 1);
    setAwards(newArray);
    console.log(awards);
  };

  const onChangeHandler = (value: string, key: string, id: number) => {
    let newObj: IAwardItem = awards[id];
    if (
      key == "title" ||
      key == "organisation" ||
      key == "date" ||
      key == "summary"
    ) {
      newObj[key] = value;
    }
    updateAward(id, newObj);
    console.log(awards);
  };

  useEffect(() => {
    console.log(awards);
  }, []);
  return <div>AwardLayout</div>;
};

export default AwardsLayout;
