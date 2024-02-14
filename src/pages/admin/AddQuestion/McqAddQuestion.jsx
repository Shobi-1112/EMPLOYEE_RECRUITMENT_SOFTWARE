import React from "react";
import Filter from "../../../components/Filter";
import Button from "../../../components/Button";
import SearchBox from "../../../components/SearchBox";
import Table from "../../../components/Table";
import { McqData, mcqFilterOptions } from "../../../helpers/addQuestionsHelper";

const McqAddQuestion = () => {
  const handleEdit = (data) => {
    console.log("edit", data);
  };
  const handleDelete = (data) => {
    console.log("delete", data);
  };

  return (
    <div className="McqContainer">
      <div className="addQuestionTopContainer">
        <div className="addQuestionTopContainerLeft">
          <SearchBox />
          <Filter options={mcqFilterOptions} />
        </div>
        <Button text="Add New" className="addNewButton" />
      </div>
      <div className="addQuestionTableContainer">
        <Table
          data={McqData}
          isEditable={true}
          isDeletable={true}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default McqAddQuestion;
