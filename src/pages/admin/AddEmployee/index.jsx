import React, { useState } from "react";
import SearchBox from "../../../components/SearchBox";
import Button from "../../../components/Button";
import Table from "../../../components/Table";
import Filter from "../../../components/Filter";
import Switching from "../../../components/Switching/Switching";
import Popup from "../../../components/Popup";
import {
  employeeTypes,
  initialData,
  addEmployeeStructure,
} from "../../../helpers/addEmployeeHelper";
import "./addEmployee.scss";

const AddEmployee = () => {
  const [data, setData] = useState(initialData);
  const [isEditPopupOpen, setEditPopupOpen] = useState(false);
  const [empId, setEmpId] = useState("");
  const [newEmployeeName, setNewEmployeeName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [type, setType] = useState("Employee");

  const handleEdit = (data) => {
    console.log("edit", data);
  };

  const handleDelete = (data) => {
    console.log("delete", data);
  };

  const handleAddEmployee = () => {
    setEditPopupOpen(true);
  };

  const handleSaveEmployee = () => {
    const newEmployee = {
      "Emp ID": empId,
      Name: newEmployeeName,
      "Email Id": emailId,
      Type: type,
    };
    setData([...data, newEmployee]);
    setEmpId("");
    setNewEmployeeName("");
    setEmailId("");
    setType("Employee");
    setEditPopupOpen(false);
    console.log("-->",newEmployee);
  };

  return (
    <div className="AddEmployee">
      <Switching Arrayofvalue={["Employee Table"]} />
      <div className="addEmployeeTopContainer">
        <div className="addEmployeeTopContainerLeft">
          <SearchBox />
          <Filter
            defaultOptions={["Manager", "Employee"]}
            className={"AddEmployeeFilter"}
          />
        </div>
        <Button
          text="Add Employee"
          className="AddEmployeeButton"
          onClick={handleAddEmployee}
        />
      </div>
      <div className="addEmployeeTableContainer">
        <Table
          data={data}
          isDeletable={true}
          isEditable={true}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </div>

      <Popup trigger={isEditPopupOpen}>
        <div className="AddEmployeepopup">
          <div className="popup_inner">
            <h2>Add New Employee</h2>
            {addEmployeeStructure.map((label, index) => (
              <React.Fragment key={index}>
                <label>{label}</label>
                <input
                  type="text"
                  value={
                    label === "Emp ID"
                      ? empId
                      : label === "Employee Name"
                      ? newEmployeeName
                      : label === "Email Id"
                      ? emailId
                      : ""
                  }
                  onChange={(e) =>
                    label === "Emp ID"
                      ? setEmpId(e.target.value)
                      : label === "Employee Name"
                      ? setNewEmployeeName(e.target.value)
                      : label === "Email Id"
                      ? setEmailId(e.target.value)
                      : ""
                  }
                />
              </React.Fragment>
            ))}
            <div className="AddEmployeeType">
              <label>Type:</label>
              {employeeTypes.map((typeOption, index) => (
                <div key={index} className="AddEmployeeTypeInner">
                  <input
                    type="radio"
                    value={typeOption}
                    checked={type === typeOption}
                    onChange={() => setType(typeOption)}
                  />
                  <label>{typeOption}</label>
                </div>
              ))}
            </div>
            <Button
              className="AddEmployeeSaveBtn"
              text="Save"
              onClick={handleSaveEmployee}
            />
            <Button
              className="AddEmployeeCancelBtn "
              text="Cancel"
              onClick={() => setEditPopupOpen(false)}
            />
          </div>
        </div>
      </Popup>
    </div>
  );
};

export default AddEmployee;
