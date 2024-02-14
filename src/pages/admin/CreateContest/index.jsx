import React from "react";
import "./CreateContest.scss";
import SearchBox from "../../../components/SearchBox";
import Dropdown from "../../../components/DropDown";
import DateTime from "../../../components/DateTime";
import Filter from "../../../components/Filter";

const CreateContest = () => {
  const options = ["Easy", "Medium", "Hard"]; // props options for dropdown
  return (
    <div className="CreateContest">
      CreateContest
      <SearchBox />
      <Dropdown options={options} />
      <DateTime />
      <Filter options={["Logical","Aptitude","Technical"]}/>
    </div>
  );
};

export default CreateContest;
