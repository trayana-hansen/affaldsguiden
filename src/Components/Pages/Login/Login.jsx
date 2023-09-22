import { useAuth } from "../../App/Auth/AuthProvider";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./Login.scss";
import Logo from "../../../Assets/SVG/logo_text.svg";

const Login = () => {
  // Get authentication data from useAuth hook
  const { loginData, setLoginData } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Create a function to set in the login
  // Retrieve username and password from API

  const formSubmit = async (form) => {
    const formData = new URLSearchParams();
    formData.append("username", form.username);
    formData.append("password", form.password);
    const endpoint = `http://localhost:4000/login`;

    try {
      const result = await axios.post(endpoint, formData);
      handleSessionData(result.data);
    } catch (err) {
      console.error(`Kunne ikke logge ind: ${err}`);
    }
  };
  const handleSessionData = async (data) => {
    if (data) {
      sessionStorage.setItem("token", JSON.stringify(data));
      setLoginData(data);
    }
  };
  const logOut = () => {
    // Removes the login information from the current session
    sessionStorage.removeItem("token");
    setLoginData("");
  };

  return (
    <>
      <div className="pageContainerLogin">
        <div className="branding">
          <img src={Logo} alt="logo" />
          <p>Log ind på Affaldsguiden for at anmelde stationer</p>
        </div>
        <div className="loginContainer">
          <h1>Login</h1>
          {/* If data is incorrect: */}
          {!loginData && !loginData.username ? (
            // onSubmit event with closing
            <form onSubmit={handleSubmit(formSubmit)}>
              <div>
                {/* Input username with form hook settings */}

                <input
                  type="text"
                  placeholder="Email"
                  {...register("username", { required: true })}
                />
                {/* Validation on the data with errors */}
                {errors.username && (
                  <p className="error">Du skal indtaste dit brugernavn</p>
                )}
              </div>
              <div>
                <input
                  placeholder="Password"
                  type="password"
                  {...register("password", { required: true })}
                />
                {/* Show message if there is an error */}
                {errors.password && (
                  <p className="error">
                    Forkert adgangskode. Tjek og prøve igen
                  </p>
                )}
              </div>

              <div className="submit">
                <button type="submit" id="login">
                  LOGIN
                </button>
              </div>
            </form>
          ) : (
            // Show login data if user is logged in
            <section className="profile">
              <p>
                {`Du er logget ind som ${loginData.user.firstname} ${loginData.user.lastname} `}{" "}
              </p>{" "}
              <br />
              <button onClick={() => logOut()} id="logout">
                LOG UD
              </button>
            </section>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
