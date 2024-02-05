import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Button from "../Button";
import "./SearchBox.scss";

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="searchBox">
      <input
        type="text"
        placeholder="Search"
        className="searchBar"
        value={searchTerm}
        onChange={handleChange}
      />
      <Button  className="searchIcon" icon={<FaSearch />}/>
    </div>
  );
};

export default SearchBox;
