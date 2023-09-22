import React, { useState } from "react";
import "./Sorting.scss";
import SortingCards from "./SortingCards";
import SearchBar from "./SearchBar";

const Sorting = () => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearch = (keyword) => {
    setSearchKeyword(keyword);
  };
  return (
    <div className="sortingPage">
      <h1 className="sortingHeading">
        <span> Din guide </span> til en sund affaldssortering
      </h1>
      <SearchBar onSearch={handleSearch} />
      <SortingCards keyword={searchKeyword} />
    </div>
  );
};

export default Sorting;
