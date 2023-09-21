import axios from "axios";
import { useState } from "react";
import { useAuth } from "../../App/Auth/AuthProvider";
import { useForm } from "react-hook-form";

const PostReview = () => {
  const { loginData } = useAuth();
  const [rating, setRating] = useState(1);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value, 10));
  };

  const currentDate = new Date();

  const formSubmit = async (data) => {
    const formData = new URLSearchParams();
    formData.append("org_id", 1);
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

  return (
    <>
      <form onSubmit={handleSubmit(formSubmit)}>
        <h2>Skriv en kommentar</h2>
        <div>
          <label htmlFor="rating">Rating:</label>
          <select id="rating" value={rating} onChange={handleRatingChange}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
        <div>
          <input
            type="text"
            placeholder="Indtast en titel"
            {...register("subject", { required: true })}
          />
          {errors.subject && (
            <>
              <span>Titel er required</span>
            </>
          )}
        </div>
        <div>
          <textarea
            placeholder="Din kommentar"
            {...register("comment", { required: true })}
          ></textarea>
          {errors.comment && <span>Kommentar er required</span>}
        </div>
        <div>
          <button>Send</button>
        </div>
      </form>
    </>
  );
};

export default PostReview;
