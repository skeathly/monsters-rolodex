import React from "react";
import "./SearchBox.css";

const SearchBox = ({ placeholder, handleChange, searchTerm }) => {
  return (
    <input
      type="search"
      className="search"
      placeholder={placeholder}
      value={searchTerm}
      onChange={handleChange}
    />
  );
};

export default SearchBox;
