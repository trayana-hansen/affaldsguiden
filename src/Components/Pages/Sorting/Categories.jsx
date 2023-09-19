import { React, useState, useEffect } from "react";
import "./SortingCards.scss";
import axios from "axios";
import { useParams } from "react-router-dom";

const Categories = () => {
  // State to store the cards
  const [details, setSectionDetails] = useState([]);

  const { section_id } = useParams();

  // Fetch data from the API
  useEffect(() => {
    // Define the endpoint to fetch from
    const url = `http://localhost:4000/section/${section_id}`;

    // Function to get data from endpoint
    const getData = async () => {
      try {
        const result = await axios.get(url);
        console.log(result);
        // Set the data in the state
        setSectionDetails(result.data);
      } catch (err) {
        console.error(err);
      }
    };

    // Call the function to fetch data
    getData();
  }, [section_id]);

  return (
    <>
      <div className="sectionDetWrap">
        {details && (
          // Render section if details is available
          <div key={section_id} className="sectionDetFig">
            <div id="detailsSection">
              {/* Display section name */}
              <h1>{details.title}</h1>
            </div>
          </div>
        )}

        <h2>Categories</h2>
        <div className="categoryContainer">
          {details.categories &&
            details.categories.map((category) => {
              return (
                <div key={category.id} className="categoryWrap">
                  <p>{category.title}</p>
                  <button>show more</button>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Categories;
