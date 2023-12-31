import axios from "axios";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import StepTwo from "../../../Assets/SVG/trin2.svg";
import "./Order.scss";
import { useEffect } from "react";



const Order = () => {

  //Retrieve the container_id from the URL
  const { container_id } = useParams();

  //Set up the use of react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, isValid},
    reset,
  } = useForm();

  const formSubmit = async (formObject) => {
    if (!isValid) {
      return; // Don't submit if the form is not valid
    }

    const api_endpoint = "http://localhost:4000/orders";


    //Append all info to be posted to the API
    const formData = new URLSearchParams();
    formData.append("container_id", container_id); // Use the container_id from URL params
    formData.append("fullname", formObject.fullname);
    formData.append("address", formObject.address);
    formData.append("zipcode", formObject.zipcode);
    formData.append("city", formObject.city);
    formData.append("email", formObject.email);
    formData.append("phone", formObject.phone);

    //console.log(...formData);

    try {
      const result = await axios.post(api_endpoint, formData);
      if (result.data) {
        console.log(result.data);
        reset();
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (isSubmitted) {
    }
  }, [isSubmitted]);

  return (
    <>
      <div className="pageWrapper">
        <div className="sideBar">
          <img src={StepTwo} alt="step_two" />
        </div>
        <div>
          <div className="info">
            <p>Trin 2</p>
            <h2>Hvor skal den leveres?</h2>
            <p>
              Tation argumentum et usu, dicit viderer evertitur te has. Eu
              dictas concludaturque usu, facete detracto patrioque an per,
              lucilius pertinacia eu vel.
            </p>
          </div>

          <form onSubmit={handleSubmit(formSubmit)}>
             {/* the container_id from url */}
            <input
              type="hidden"
              value={container_id}
              {...register("container_id")}
            />
             {/* get all the values from the form and with error handling and validation */}
            <div>
              <input
                placeholder="Navn"
                {...register("fullname", {
                  required: "Du skal indtaste dit fuldenavn",
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: "Du skal indtaste et gyldigt navn",
                  },
                })}
              />
              {errors.fullname && <span>{errors.fullname.message}</span>}
            </div>
            <div>
              <input
                placeholder="Email"
                {...register("email", {
                  required: "Du skal indtaste din email",
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Du skal indtaste en gyldig mailadresse",
                  },
                })}
              />
              {errors.email && <span>{errors.email.message}</span>}
            </div>
            <div>
              <input
                placeholder="Telefon"
                {...register("phone", {
                  required: "Du skal indtaste din telefon nummer",
                  pattern: {
                    value: /^[0-9]{8}$/,
                    message: "Du skal indtaste en gyldig telefonnummer",
                  },
                })}
              />
              {errors.phone && <span>{errors.phone.message}</span>}
            </div>
            <div>
              <input
                placeholder="Address"
                {...register("address", {
                  required: "Du skal indtaste din adresse",
                })}
              />
              {errors.address && <span>{errors.address.message}</span>}
            </div>
            <div>
              <input
                placeholder="Postnummer"
                {...register("zipcode", {
                  required: "Du skal indtaste dit postnummer",
                  pattern: {
                    value: /^[0-9]+$/i,
                    message: "Du skal indtaste et gyldigt postnummer",
                  },
                  min: {
                    value: 999,
                    message: "Postnummer kan ikke være mindre end 1000",
                  },
                  max: {
                    value: 9990,
                    message: "Postnummer kan ikke være større end 9990",
                  },
                })}
              />
              {errors.zipcode && <span>{errors.zipcode.message}</span>}
            </div>

            <div>
              <input
                placeholder="By"
                {...register("city", {
                  required: "Du skal indtaste et bynavn",
                })}
              />
              {errors.city && <span>{errors.city.message}</span>}
            </div>

            <div className="btnForm">
              <button>Send</button>
            </div>

                 {/* Success message */}
            {isSubmitted && (
              <div className="success">Tak for din bestilling</div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Order;
