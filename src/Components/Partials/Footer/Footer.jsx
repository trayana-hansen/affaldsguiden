import { React } from "react";
import "./Footer.scss";
import LogoF from "../../../Assets/SVG/footer_logo.svg";
import ArrowUp from "../../../Assets/Layout/icon-arrow-up.svg";
import { Link } from "react-router-dom";
import Waves from "../../../Assets/SVG/waves.svg";

const Footer = () => {
  return (
    <>
    <img src={Waves} alt="wave_design" className="waves" />
    <footer className="footer">

      <div className="logoDiv">
        <img src={LogoF} alt="footer_logo" />
        <h2>Affaldsguiden</h2>
        <p>
          Vi arbejder for at informere om korrekt affaldssortering. Ved at
          sortere hjælper du os, men også klimaet.
        </p>
      </div>
      <div className="flexFooter">
        <p>©2023 Affaldsguiden. </p>
        <Link
          onClick={() => {
            window.scroll(0, 0);
          }}
        >
          <p>
            Back to top <img src={ArrowUp} alt="navigation_to_top" />
          </p>
        </Link>
      </div>
    </footer>
    </>
  );
};

export default Footer;
