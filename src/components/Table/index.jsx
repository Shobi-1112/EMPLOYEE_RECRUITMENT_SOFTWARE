import React, { useState } from "react";
import "./Table.scss";
import Pagination from "../Pagination";

const Table = () => {
  function DynamicTable({ data }) {
    const [headers, setHeaders] = useState([]);

    useState(() => {
      if (data.length > 0) {
        const firstDataItem = data[0];
        const extractedHeaders = Object.keys(firstDataItem);
        setHeaders(extractedHeaders);
      }
    }, [data]);

    const alertBox = () => {
      alert("Alert box is triggered");
    };

    return (
      <table>
        <thead>
          <tr>
            {headers.map((header, headerIndex) => (
              <th key={headerIndex}>{header.replace(/_/g, "  ")}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} onClick={alertBox}>
              {headers.map((header, RowNumber) => (
                <td key={RowNumber}>{row[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  const SampleData = [
    {
      No: 1,
      Contestant_Name: "Contestant 01",
      email_Id: "student@mail.com",
      College_Name: "College",
      Assigned_HR: "1",
    },
    {
      No: 1,
      Contestant_Name: "Contestant 01",
      email_Id: "student@mail.com",
      College_Name: "College",
      Assigned_HR: "1",
    },
    {
      No: 1,
      Contestant_Name: "Contestant 01",
      email_Id: "student@mail.com",
      College_Name: "College",
      Assigned_HR: "1",
    },
    {
      No: 1,
      Contestant_Name: "Contestant 01",
      email_Id: "student@mail.com",
      College_Name: "College",
      Assigned_HR: "1",
    },
    {
      No: 1,
      Contestant_Name: "Contestant 01",
      email_Id: "student@mail.com",
      College_Name: "College",
      Assigned_HR: "1",
    },
    {
      No: 1,
      Contestant_Name: "Contestant 01",
      email_Id: "student@mail.com",
      College_Name: "College",
      Assigned_HR: "1",
    },
    {
      No: 1,
      Contestant_Name: "Contestant 01",
      email_Id: "student@mail.com",
      College_Name: "College",
      Assigned_HR: "1",
    },
    {
      No: 1,
      Contestant_Name: "Contestant 01",
      email_Id: "student@mail.com",
      College_Name: "College",
      Assigned_HR: "1",
    },
    {
      No: 1,
      Contestant_Name: "Contestant 01",
      email_Id: "student@mail.com",
      College_Name: "College",
      Assigned_HR: "1",
    },
    {
      No: 1,
      Contestant_Name: "Contestant 01",
      email_Id: "student@mail.com",
      College_Name: "College",
      Assigned_HR: "1",
    },
    {
      No: 1,
      Contestant_Name: "Contestant 01",
      email_Id: "student@mail.com",
      College_Name: "College",
      Assigned_HR: "1",
    },
    {
      No: 1,
      Contestant_Name: "Contestant 01",
      email_Id: "student@mail.com",
      College_Name: "College",
      Assigned_HR: "1",
    },
  ];
const totalPages= 10;        //  pagination count
 
  return (
    <div className="TableStyle">
      <DynamicTable data={SampleData} />
      <Pagination totalPages={totalPages}/>
    </div>
  );
};

export default Table;
