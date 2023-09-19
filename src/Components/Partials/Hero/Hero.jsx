import { React } from "react";
import "./Hero.scss";
import { Link } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import IconLeft from "../../../Assets/Layout/icon-arrow-left.svg";
import IconRight from "../../../Assets/Layout/icon-arrow-right.svg";

const handleDragStart = (e) => e.preventDefault();

/* Make an array with all the images to be used in the carousel*/
const items = [
  <img
    src={require("../../../Assets/Slideshow/affald-skov-1.jpg")}
    onDragStart={handleDragStart}
    alt="trash_forrest_img"
  />,
  <img
    src={require("../../../Assets/Slideshow/affald-strand-2.jpg")}
    onDragStart={handleDragStart}
    alt="trash_beach_img"
  />,
  <img
    src={require("../../../Assets/Slideshow/malerspande.jpg")}
    onDragStart={handleDragStart}
    alt="artist_trashcan"
  />,
];

const Hero = () => {
  return (
    <>
      <AliceCarousel
        /* Render the carousel component*/
        renderPrevButton={() => {
          return (
            <img src={IconLeft} alt="button_prev" className="prevButton" />
          );
        }}
        renderNextButton={() => {
          return (
            <img src={IconRight} alt="button_next" className="nextButton" />
          );
        }}
        /* Enable autoplaying*/
        autoPlay="true"
        /* Set the interval for changing between images*/
        autoPlayInterval="1500"
        /* Desable dots controls*/
        disableDotsControls="true"
        /* Make the images run in a loop*/
        infinite="true"
        /* Enable control from arrows on keyboard*/
        keyboardNavigation="true"
        /* Duration of animation*/
        animationDuration="1500"
        /* Define the images used*/
        items={items}
      />
      <div className="ctoFP">
        <h1>Find og anmeld genbrugsstationer</h1>
        <button className="btnCarousel">
          <Link to="/stationer">Find station</Link>
        </button>
        <button className="btnCarousel">
          <Link to="/login">Log ind</Link>
        </button>
      </div>
    </>
  );
};

export default Hero;
