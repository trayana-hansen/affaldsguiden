import { React, useState, useEffect } from "react";
import axios from "axios";
import "./ContainerOrder.scss";
import { Link } from "react-router-dom";
import StepOne from "../../../Assets/SVG/trin1.svg"


const ContainerOrder = () => {
  const [data, setContainer] = useState([]);

  useEffect(() => {
    const url = `http://localhost:4000/containers`;

    const getData = async () => {
      try {
        const result = await axios.get(url);
        console.log(result);

        setContainer(result.data);
      } catch (err) {
        console.error(err);
      }
    };

    getData();
  }, [setContainer]);

  return (
    <div className="pageContainer">
      <div
        className="formContainer">
			 <img src={StepOne} alt="step_one" />
		</div>

      <div className="dataContainer">
        <div className="info">
          <p>Trin 1</p>
          <h2>Vælg type</h2>
          <p>
            Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas
            concludaturque usu, facete detracto patrioque an per, lucilius
            pertinacia eu vel.
          </p>
        </div>
        <div className="containersWrapper">
          {data &&
            data.map((container) => {
              return (
                <div key={container.id} class="containerCard">
                  <figure>
                    <Link to={`/bestil/${container.id}`}>
                      <div className="imgDiv">
                        <img
                          src={`http://localhost:4000/Assets/Images/Icons/${container.icon_filename}`}
                          alt={container.name}
                        />
                      </div>
                      <figcaption>
                        <p>{container.name}</p>
                      </figcaption>
                    </Link>
                  </figure>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ContainerOrder;
