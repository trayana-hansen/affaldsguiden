import Search from "../../../Assets/Layout/icon-search.svg";
import "./SearchBar.scss";

const SearchBar = () => {
  return (
    <>
      <div className="wrapper">
        <div className="searchBar">
          <div className="searchBoxWithIcon">
            <input
              type="text"
              placeholder="Søg på affald"
              className="searchBox"
            />
            <button
              id="searchSubmit"
              type="submit"
              name="searchSubmit"
              className="searchIcon"
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
