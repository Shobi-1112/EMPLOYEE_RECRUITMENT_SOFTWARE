import React, { useState } from "react";
import "./RoundFilerDetails.scss";
import {
  roundFilterOptions,
  topContainerContent,
} from "../../../helpers/roundFilterDetails";
import Button from "../../../components/Button";
import Table from "../../../components/Table";

const RoundFilerDetails = () => {
  const [filterType, setFilterType] = useState("percentage");
  const [filterValue, setFilterValue] = useState(0);

  const handleFilterTypeChange = (e) => {
    setFilterType(e.target.value);
  };

  const handleValueChange = (e) => {
    setFilterValue(e.target.value);
  };

  const handleIncrement = () => {
    const numericValue = Number(filterValue);
    setFilterValue(numericValue + 1);
  };

  const handleDecrement = () => {
    const numericValue = Number(filterValue);
    if (numericValue > 0) {
      setFilterValue(numericValue - 1);
    }
  };

  const handleApply = () => {
    console.log("Filter Type:", filterType);
    console.log("Filter Value:", filterValue);
  };

  return (
    <div className="RoundFilerDetails">
      <h1>Round Details</h1>
      <div className="RoundFilerDetailsTopContainer">
        <div className="RoundFilerDetailsTopContent">
          {topContainerContent.map((field, index) => {
            return (
              <p key={index}>
                {field.label} : <span>{field.value} </span>
              </p>
            );
          })}
        </div>
        <div className="RoundFilerDetailsTopContentRight">
          <p>Filter Type :</p>
          <div className="RoundFilterRadioButtons">
            {roundFilterOptions.map((option, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={option}
                  value={option}
                  checked={filterType === option}
                  onChange={handleFilterTypeChange}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </div>
          <div className="RoundFilterInputField">
            <input
              type="text"
              value={filterValue}
              onChange={handleValueChange}
            />

            <Button text="+" onClick={handleIncrement} className="plus" />
            <Button text="-" onClick={handleDecrement} className="minus" />
          </div>
          <Button text="Apply" onClick={handleApply} />
        </div>
      </div>
      <div className="tableContainer">
        <h1>Contestant List</h1>
        <Table data={roundFilterOptions} />
      </div>
    </div>
  );
};

export default RoundFilerDetails;
