import React, { useState } from "react";
import "../Table/Table.scss";
import Pagination from "../Pagination";
import Button from "../Button";
import { MdDelete, MdModeEdit } from "react-icons/md";
import Popup from "../Popup";

const Table = ({
  data = "",
  isEditable,
  isDeletable,
  onEdit,
  onDelete,
  className,
  isPopupUp
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedRow, setSelectedRow] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const handleClickRow = (rowData) => {
    setSelectedRow(rowData);
    setShowPopup(!showPopup);
    document.body.style.overflow = "hidden";
  };

  const closePopup = () => {
    setShowPopup(!showPopup);
    setSelectedRow({});
    document.body.style.overflow = "auto";
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const DynamicTable = (data, isEditable, isDeletable, onEdit, onDelete) => {
    const headers = data.length > 0 ? Object.keys(data[0]) : [];

    return (
      <>
        <table>
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header.replace(/_/g, " ")}</th>
              ))}
              {(isEditable || isDeletable) && <th>Action</th>}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {headers.map((header, headerIndex) => (
                  <td key={headerIndex} onClick={() => handleClickRow(row)}>
                    {row[header]}
                  </td>
                ))}

                {isEditable && isDeletable && (
                  <td>
                    <Button
                      icon={<MdModeEdit />}
                      className="Edit ButtonIcon"
                      onClick={(e) => onEdit(row)}
                    />
                    <Button
                      icon={<MdDelete />}
                      className="Delete ButtonIcon"
                      onClick={(e) => onDelete(row)}
                    />
                  </td>
                )}
                {isEditable && !isDeletable && (
                  <td>
                    <Button
                      icon={<MdModeEdit />}
                      className="Edit ButtonIcon"
                      onClick={(e) => onEdit(row)}
                    />
                  </td>
                )}
                {!isEditable && isDeletable && (
                  <td>
                    <Button
                      icon={<MdDelete />}
                      className="Delete ButtonIcon"
                      onClick={(e) => onDelete(row)}
                    />
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  };

  return (
    <div className="TableStyle">
      {DynamicTable(currentData, isEditable, isDeletable, onEdit, onDelete)}

      <Popup trigger={showPopup} setTrigger={closePopup} data={selectedRow}>
        <div >
          <div className="PopupContent">
            <ul>
              {Object.entries(selectedRow)?.map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Popup>

      <Pagination
        totalItems={data.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Table;
