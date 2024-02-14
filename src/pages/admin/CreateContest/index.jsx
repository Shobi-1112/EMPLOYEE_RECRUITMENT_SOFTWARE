import React, { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import AddMCQandCoding from "./AddMCQCoding";
import AddContestants from "./AddContestants";
import HRassign from "./HRassign";
import Progressbar from "../../../components/ProgressBar";
import Button from "../../../components/Button";
import "./CreateContest.scss"

const CreateContest = () => {
  const [progress, setProgress] = useState(-1);
  const [select, setSelect] = useState(0);

  const handleNext = () => {
    setProgress(progress + 1);
    setSelect(select + 1);
  };
  const handleBack = () => {
    setProgress(progress - 1);
    setSelect(select - 1);
  };

  return (
    <div style={{ width: "100%" }} className="createContainer">
      <h1 style={{ background: "rgb(245, 243, 243)", paddingLeft:"2rem",paddingTop:"1rem" }}>
        Create Contest
      </h1>
      <div className="headingProgress">
        <Progressbar
          className={"progressInCreateContest"}
          actives={progress}
          select={select}
        />
      </div>
      {progress === -1 ? (
        <AddMCQandCoding />
      ) : progress === 0 ? (
        <HRassign />
      ) : (
        <AddContestants />
      )}
      <div className="nextbackbuttons">
        {progress > -1 && (
          <Button
            icon={<MdArrowBackIosNew />}
            text={"Back"}
            className={"navigationButton"}
            onClick={() => {
              handleBack();
            }}
          />
        )}
        <Button
          icon={"Next"}
          text={<MdArrowForwardIos />}
          className={"navigationButton"}
          onClick={() => {
            handleNext();
          }}
        />
      </div>
    </div>
  );
};

export default CreateContest;
