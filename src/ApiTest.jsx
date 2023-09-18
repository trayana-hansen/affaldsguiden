import React, { useEffect, useState } from "react";
import axios from "axios";

const ApiTest = () => {
  // State to store the list of events
  const [events, setEvents] = useState([]);

  // Fetch data from the API when the component mounts
  useEffect(() => {
    // API URL with query parameters
    const url = `http://localhost:4000/section`;

    // Function to make the API request
    const getData = async () => {
      try {
        const result = await axios.get(url);
        console.log(result);
        // Set the retrieved data in the state
        setEvents(result.data);
      } catch (err) {
        console.error(err);
      }
    };

    // Call the function to fetch data
    getData();
  }, [setEvents]);

  return (
    <>
      <div className="eventsbox">
        {events &&
          events.map((data) => {
            console.log(data);
            return (
              <figure key={data.id}>
                <div>{data.title}</div>
                <img
                    src={`http://localhost:4000/Assets/Images/Guide/Categories/${data.filename}`}
                    alt={data.title}
                  />
                <div>{data.title}</div>
              </figure>
            );
          })}
      </div>
    </>
  );
};

export default ApiTest;
