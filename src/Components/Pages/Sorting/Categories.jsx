import { React, useState, useEffect } from "react";
import "./SortingCards.scss";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Categories = () => {

  // State to store the cards
  const [categories, setCategories] = useState([]);

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
        // Set the in the state
        setCategories(result.data);
        console.log(result.data);
      } catch (err) {
        console.error(err);
      }
    };

    // Call the function to fetch data
    getData();
  }, [section_id]);
};

export default Categories;
