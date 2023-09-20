import { React, useState, useEffect } from "react";
import axios from "axios";
import "./ContainerOrder.scss";
import { Link } from "react-router-dom";

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
    <div className="containersWrapper">
      {data &&
        data.map((container) => {
          return (
            <>
              <div className="containerCard" key={container.id}>
                <Link to={`/bestil/${container.id}`}>
                  <img
                    src={`http://localhost:4000/Assets/Images/Icons/${container.icon_filename}`}
                    alt={container.name}
                  />
                  <label htmlFor={`container_${container.id}`}>
                    {container.name}
                    <input
                      type="radio"
                      name="container"
                      id={`container_${container.id}`}
                    />
                  </label>
                </Link>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default ContainerOrder;
