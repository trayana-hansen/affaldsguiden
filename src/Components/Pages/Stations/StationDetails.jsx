import { React, useState, useEffect } from "react";
import "./StationDetails.scss";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Reviews from "../../Pages/Reviews/Reviews";
import PostReview from "../../Pages/Reviews/PostReview";
import { useAuth } from "../../App/Auth/AuthProvider";

const StationDetails = () => {
  const [stationDetails, setStationDetails] = useState([]);
  const { station_id } = useParams();
  const { loginData } = useAuth();

  useEffect(() => {
    // Define the endpoint to fetch from
    const url = `http://localhost:4000/orgs/${station_id}`;
    const getData = async () => {
      try {
        const result = await axios.get(url);
        console.log(result);
        // Set the data in the state
        setStationDetails(result.data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, [station_id]);

  return (
    <>
      <div className="contentWrap">
        <div className="stationDetWrap">
          {stationDetails && (
            <div key={station_id} className="stationDetDiv">
              <div className="imgStation">
                <iframe
                  title="googlemapsimage"
                  className="googleMaps"
                  src={`https://maps.google.com/maps?q=${stationDetails.longtitude},${stationDetails.latitude}&hl=es;&output=embed`}
                ></iframe>
              </div>
              <div className="detailsSection">
                <h3>{stationDetails.name}</h3>
                <p>{stationDetails.address}</p>
                <p>
                  {stationDetails.zipcode} {stationDetails.city}
                </p>
                <p>{stationDetails.country}</p>
              </div>
               {/* use a conditional turnary operator to handle if the user is logged in and can post a comment or get a message and a CTO to log in*/}
              {loginData ? (
                <div>
                  <PostReview />
                </div>
              ) : (
                <div className="notLoggedIn">
                  <p>Du skal være logget ind for at skrive en kommentar</p>
                  <Link to="/login">
                    {" "}
                    <button id="login">LOG IND</button>{" "}
                  </Link>
                </div>
              )}

              <div>
                <Reviews />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default StationDetails;
