import { React, useState, useEffect } from "react";
import "./Categories.scss";
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
    <div className="detailContainer">
      {details && (
        <div>
          <figure className="detailsWrap">
            <div className="info">
              <figcaption style={{ backgroundColor: `#${details.color}` }}>
                <h2>{details.title}</h2>
              </figcaption>
              </div>
              <div className="icon">
              <img
                src={
                  details && details.filename
                    ? `http://localhost:4000/Assets/Images/Guide/Categories/${details.filename}`
                    : ""
                }
                alt="logoicons"
              />
            </div>
          </figure>
          <div>
            {details.categories &&
              details.categories.map((category) => (
                <div key={category.id} className="categoryWrap">
                  <div className="categoryInfo" >
                  {category.icon_filename && (
                    <img
                      src={`http://localhost:4000/Assets/Images/Guide/Icons/${category.icon_filename}`}
                      alt={category.title}
                    />
                  )}
                  <p>{category.title}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;
