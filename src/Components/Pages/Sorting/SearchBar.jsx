import React, { useState } from "react";
import Search from "../../../Assets/Layout/icon-search.svg";
import "./SearchBar.scss";

const SearchBar = ({ onSearch }) => {
  const [keyword, setKeyword] = useState("");

  /* create a function to to handle the search */

  const handleSearch = () => {
    onSearch(keyword);
  };
  return (
    <>
      <div className="wrapper">
        <div className="searchBar">
          <div className="searchBoxWithIcon">
            <input
              type="text"
              placeholder="Søg på affald"
              className="searchBox"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <button
              id="searchSubmit"
              type="button"
              name="searchSubmit"
              className="searchIcon"
              onClick={handleSearch}
            >
              <img src={Search} alt="search_submit" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
