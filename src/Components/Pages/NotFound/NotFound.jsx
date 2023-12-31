import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.scss";

const NotFound = () => {
  /* Creating a variable to use as useNavigate hook */

  const navigate = useNavigate();
  useEffect(() => {
    /* Setting a timer before the navigation takes place */

    setTimeout(() => {
      /* Rerouting to home page after the times is done */

      navigate("/");
    }, 5000);
  });
  return (
    <>
      <h1>Siden blev ikke fundet</h1>
      <p>Du kommer tilbage til forsiden om 5 sekunder</p>
    </>
  );
};

export default NotFound;
