import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Stations.scss";
import { Link } from "react-router-dom";

const Stations = () => {
  // State to store all event data
  const [data, setData] = useState([]);

  useEffect(() => {
    // Construct the URL to fetch all stations with specific attributes
    const url = `
    http://localhost:4000/orgs?attributes=id,name,address,zipcode,city,longtitude, latitude`;

    // Function to fetch all events' data from the API
    const getData = async () => {
      try {
        // Send a GET request to the API endpoint
        const result = await axios.get(url);

        // Log the result to the console for debugging
        console.log(result);

        // Update the `allEvents` state with the received event data
        setData(result.data);
      } catch (err) {
        // Handle any errors by logging them to the console
        console.error(err);
      }
    };

    // Call the `getData` function to fetch all event data
    getData();
  }, [setData]); // Run the effect whenever `setAllEvents` changes

  return (
    <>
      <div className="allStations">
        {data &&
          data.map((station) => {
            console.log(station);

            return (
              <div key={station.id} className="singleStation">
                <div className="imgStation">
                  <iframe
                    title="googlemapsimage"
                    className="googleMaps"
                    src={`https://maps.google.com/maps?q=${station.longtitude},${station.latitude}&hl=es;&output=embed`}
                  ></iframe>
                </div>
                <Link to={`/stationer/${station.id}`}>
                  <div className="infoStation">
                    <h3>{station.name}</h3>
                    <p>{station.address}</p>
                    <p>
                      {station.zipcode} {station.city}
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Stations;
