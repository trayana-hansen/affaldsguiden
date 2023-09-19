import { React } from "react";
import "./Sorting.scss";
import SortingCards from "./SortingCards";
import SearchBar from "./SearchBar";

const Sorting = () => {
  return (
    <div className="sortingPage">
      <h1 className="sortingHeading">
        <span> Din guide </span> til en sund affaldssortering
      </h1>
      <SearchBar />
      <SortingCards />
    </div>
  );
};

export default Sorting;
