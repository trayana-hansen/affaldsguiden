import { React, useState, useEffect } from "react";
import "./SortingCards.scss";
import axios from "axios";
import { Link } from "react-router-dom";

const SortingCards = () => {
  // State to store the cards
  const [sortingCards, setSortingCards] = useState([]);

  // Fetch data from the API
  useEffect(() => {
    // Define the endpoint to fetch from
    const url = `http://localhost:4000/section`;

    // Function to get data from endpoint
    const getData = async () => {
      try {
        const result = await axios.get(url);
        console.log(result);
        // Set the data in the state
        setSortingCards(result.data);
      } catch (err) {
        console.error(err);
      }
    };

    // Call the function to fetch data
    getData();
  }, [setSortingCards]);

  return (
    <>
      <div className="sortingWrapper">
        {sortingCards &&
          sortingCards.map((data) => {
            return (
              <div className="sortingCard" key={data.id}>
                <figure>
                  <Link to={`/sortering/${data.id}`}>
                    <img
                      src={`http://localhost:4000/Assets/Images/Guide/Categories/${data.filename}`}
                      alt={data.title}
                    />{" "}
                  </Link>
                  <figcaption style={{ backgroundColor: `#${data.color}` }}>
                    {data.title}
                  </figcaption>
                </figure>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default SortingCards;
