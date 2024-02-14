import React, { useState, useEffect, useRef } from "react";
import "./Filter.scss";
import { FiFilter } from "react-icons/fi";
import Button from "../Button";

const Filter = ({ options, defaultOptions, className }) => {
  const [isFilterUp, setIsFilterUp] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const filterRef = useRef(null);
  const setupDefaultOptions = ["Easy", "Medium", "Hard"];
  defaultOptions = defaultOptions ? defaultOptions : setupDefaultOptions;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsFilterUp(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    setIsFilterUp(!isFilterUp);
  };

  const handleCheckboxChange = (event) => {
    const { value } = event.target;
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    } else {
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  const handleApply = () => {
    if (defaultOptions === setupDefaultOptions) {
      const difficultyOptions = selectedOptions.filter((option) =>
        defaultOptions.includes(option)
      );
      const categoryOptions = selectedOptions.filter(
        (option) => !defaultOptions.includes(option)
      );

      console.log("Difficulty:", difficultyOptions.join(", "));
      console.log("Category:", categoryOptions.join(", "));
    }
    if (defaultOptions !== setupDefaultOptions) {
      console.log("Selected Options : ", selectedOptions);
    }

    setIsFilterUp(false);
  };

  const handleClearAll = () => {
    setSelectedOptions([]);
  };

  return (
    <div
      className={className ? "Filter " + className : "Filter"}
      ref={filterRef}
    >
      <div className="Filtericon" onClick={handleClick}>
        <FiFilter />
      </div>
      {isFilterUp && (
        <div className="FilterPopup">
          <div className="buttonContainer">
            <Button
              className="clearButton"
              text="Clear All"
              onClick={handleClearAll}
            />
          </div>
          <div className="optionsGroup">
            {defaultOptions.map((option, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  id={option}
                  name={option}
                  value={option}
                  onChange={handleCheckboxChange}
                  checked={selectedOptions.includes(option)}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
            {options && <hr />}
            {options &&
              options.map((option, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    id={option}
                    name={option}
                    value={option}
                    onChange={handleCheckboxChange}
                    checked={selectedOptions.includes(option)}
                  />
                  <label htmlFor={option}>{option}</label>
                </div>
              ))}
          </div>

          <Button className="applyButton" text="Apply" onClick={handleApply} />
        </div>
      )}
    </div>
  );
};

export default Filter;
