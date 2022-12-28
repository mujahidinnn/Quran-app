import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({ handleSearchSurah }) => {
  return (
    <div className="search">
      <MdSearch className="search-icons" size="1.3em" />
      <input
        onChange={(event) => handleSearchSurah(event.target.value)}
        type="text"
        placeholder="type to search..."
        spellCheck="false"
      />
    </div>
  );
};

export default Search;
