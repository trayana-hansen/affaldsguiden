import { React, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Type = () => {
  // State to store the cards
  const [type, setType] = useState([]);

  const { category_id } = useParams();

  // Fetch data from the API
  useEffect(() => {
    // Define the endpoint to fetch from
    const url = `http://localhost:4000/types/{category_id}`;

    // Function to get data from endpoint
    const getData = async () => {
      try {
        const result = await axios.get(url);
        console.log(result);
        // Set the data in the state
        setType(result.data);
      } catch (err) {
        console.error(err);
      }
    };

    // Call the function to fetch data
    getData();
  }, [category_id]);
};

export default Type;
