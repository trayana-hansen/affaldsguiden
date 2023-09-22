import axios from "axios";
import { useState, useEffect } from "react";
import { useAuth } from "../../App/Auth/AuthProvider";
import { useForm } from "react-hook-form";
import "./PostReview.scss";
import GreenBubble from "../../../Assets/Layout/icon-speech-bubble.svg";

const PostReview = () => {
  const { loginData } = useAuth();
  const [rating, setRating] = useState(1);


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitted },
  } = useForm();

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value, 10));
  };

  const currentDate = new Date();

  const formSubmit = async (data) => {
    const formData = new URLSearchParams();
    formData.append("org_id", data.org_id);
    formData.append("subject", data.subject);
    formData.append("comment", data.comment);
    formData.append("num_stars", rating);
    formData.append("date", currentDate.toISOString());
    console.log(...formData);

    const options = {
      headers: {
        Authorization: `Bearer ${loginData.access_token}`,
      },
    };

    try {
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
    reset();
  };
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
