import { React } from "react";
import "./FrontSections.scss";
import { Link } from "react-router-dom";

const FrontSections = () => {
  return (
    <>
    <div className="ctoFP">
        <h1>Find og anmeld genbrugsstationer</h1>
        <button className="btnCarousel">
          <Link to="/stationer">Find station</Link>
        </button>
        <button className="btnCarousel">
          <Link to="/login">Log ind</Link>
        </button>
      </div>
      <section>
        <div className="descriptionLead">
          <h2>
            Din <span> guide til sortering </span>
          </h2>
          <p>
            Her kan du se hvordan du skal sortere og hvad der skal i hvilke
            beholdere. Du får også tips og tricks til, hvordan du gør det nemt
            at sortere hjemme hos dig.
          </p>
          <button className="btnSolid">
            <Link to="/sortering">Se affaldsguide</Link>
          </button>
          <button className="btnWhite">
            <Link to="/bestil">Bestil storskrald</Link>
          </button>
        </div>
        <div className="gridReverse">
          <figure>
            <img
              src={require("../../../Assets/Images/trashcan_metal.webp")}
              alt="trash_trashcan"
            />
          </figure>
        </div>
      </section>
      <section>
        <div>
          <figure>
            <img
              src={require("../../../Assets/Images/recycling_trashcans.webp")}
              alt="recycling_trashcans"
            />
          </figure>
        </div>
        <div className="descriptionLead">
          <h2>
            Bestil <span>din nye affaldsbeholder</span>
          </h2>
          <p>
            when an unknown printer took a galley of type and scramble it to
            make a type specimen book. It has survived not only
          </p>
          <button className="btnSolid">
            <Link to="/bestil">Bestil nu</Link>
          </button>
        </div>
      </section>
    </>
  );
};

export default FrontSections;
