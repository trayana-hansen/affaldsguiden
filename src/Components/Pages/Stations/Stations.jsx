import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Stations.scss";
import { Link } from "react-router-dom";


const Stations = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = `
    http://localhost:4000/orgs?attributes=id,name,address,zipcode,city,longtitude, latitude`;

    const getData = async () => {
      try {
        const result = await axios.get(url);

        console.log(result);

        setData(result.data);
      } catch (err) {
        console.error(err);
      }
    };

    getData();
  }, [setData]);

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
