import React, { useState } from "react";
import "./Pagination.scss";
import Button from "../Button/index";

const Pagination = ({ totalPages }) => {
  const [activePage, setActivePage] = useState(1);

  const handlePageClick = (pageNum) => {
    setActivePage(pageNum);
  };

  const handlePrevClick = () => {
    if (activePage > 1) {
      setActivePage(activePage - 1);
    }
  };

  const handleNextClick = () => {
    if (activePage < totalPages) {
      setActivePage(activePage + 1);
    }
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(
      <Button
        key={i}
        className={`page-num ${activePage === i ? "active" : ""}`}
        onClick={() => handlePageClick(i)}
        text={i}
      />
    );
  }

  return (
    <div className="pagination">
      <Button
        className="page-arrow"
        onClick={handlePrevClick}
        disabled={activePage === 1}
        text="&lsaquo;"
      />

      {pageNumbers}

      <Button
        className="page-arrow"
        onClick={handleNextClick}
        disabled={activePage === totalPages}
        text="&rsaquo;"
      />
    </div>
  );
};

export default Pagination;
