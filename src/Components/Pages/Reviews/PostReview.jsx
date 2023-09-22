import axios from "axios";
import { useState, useEffect } from "react";
import { useAuth } from "../../App/Auth/AuthProvider";
import { useForm } from "react-hook-form";
import "./PostReview.scss";
import GreenBubble from "../../../Assets/Layout/icon-speech-bubble.svg";

const PostReview = () => {
  // Get authentication data from the context
  const { loginData } = useAuth();

  // State to track the selected rating
  const [rating, setRating] = useState(1);

  // Initialize the form using the react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitted },
  } = useForm();

  // Function to handle changes in the rating select input
  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value, 10));
  };

  // Get the current date
  const currentDate = new Date();

  // Function to handle form submission
  const formSubmit = async (data) => {
    // Create form data for POST request
    const formData = new URLSearchParams();
    formData.append("org_id", data.org_id);
    formData.append("subject", data.subject);
    formData.append("comment", data.comment);
    formData.append("num_stars", rating);
    formData.append("date", currentDate.toISOString());
    console.log(...formData);

    // Axios request headers with the authentication token
    const options = {
      headers: {
        Authorization: `Bearer ${loginData.access_token}`,
      },
    };

    try {
      // Send a POST request to the server to submit the review
      const result = await axios.post(
        `http://localhost:4000/reviews`,
        formData,
        options
      );
      if (result.data) {
        console.log(result.data);
      }
    } catch (err) {
      console.error(err);
    }
    // Reset the form after submission
    reset();
  };

  // Effect to perform actions when the form is submitted
  useEffect(() => {
    if (isSubmitted) {
    }
  }, [isSubmitted]);

  return (
    <div className="reviewForm">
      <form onSubmit={handleSubmit(formSubmit)}>
        <div className="flexBox">
          <h2>Skriv en kommentar </h2>
          <div className="rating">
            <label htmlFor="rating">Rating:</label>
            <select id="rating" value={rating} onChange={handleRatingChange}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>
        </div>
        <div className="infoForm">
          <div>
            <input type="text" {...register("subject", { required: true })} />
            {errors.subject && (
              <>
                <span>Titel er nødvendig</span>
              </>
            )}
          </div>
          <div>
            <textarea {...register("comment", { required: true })}></textarea>
            {errors.comment && <span>Kommentar er nødvendig</span>}
          </div>
        </div>
        <div className="commentBtn">
          <button>
            <img src={GreenBubble} alt="green_speech_bubble" />
            Kommenter
          </button>
        </div>
        {isSubmitted && <div className="success">Tak for din anmeldelse</div>}
      </form>
    </div>
  );
};

export default PostReview;
