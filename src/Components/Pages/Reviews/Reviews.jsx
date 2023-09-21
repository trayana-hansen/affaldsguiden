import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Reviews.scss";
import { useParams } from "react-router-dom";
import UserPicture from "../../../Assets/SVG/user.svg";


const Reviews = () => {
  const [reviews, setReviews] = useState();
  const { station_id } = useParams();

  // Function to format a date in a user-friendly format
  const formatDate = (dateNew) => {
    const date = new Date(dateNew);
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return date.toLocaleDateString("da-DK", options);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios.get(
          `http://localhost:4000/reviews/${station_id}`
        );
        setReviews(result.data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, [station_id]);

  return (
    <>
      {reviews &&
        reviews.map((review) => {
          return (
            <div className="reviewWrapper" key={review.id}>
              <div>
                <img src={UserPicture} alt="user_avatar" />
              </div>
              <div>
                <h3>{review.subject}</h3>
                <div class="reviewInfo">
                  <p>{review.user.firstname}</p>
                  <p>{formatDate(review.created_at)}</p>
                </div>
                <div>
                  <p>{review.comment}</p>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Reviews;
