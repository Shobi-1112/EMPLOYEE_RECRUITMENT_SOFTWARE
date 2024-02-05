import React from "react";
import "./CreateContest.scss";
import SearchBox from "../../components/SearchBox";
import Dropdown from "../../components/DropDown";
import DateTime from "../../components/DateTime";
import ProgressBar from "../../components/ProgressBar";

const CreateContest = () => {
  const options = ["Easy", "Medium", "Hard"]; // props options for dropdown
  return (
    <div className="CreateContest">
      CreateContest
      <SearchBox />
      <Dropdown options={options} />
      <DateTime />
      <ProgressBar />
    </div>
  );
};

export default CreateContest;
