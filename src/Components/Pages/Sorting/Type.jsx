import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Type.scss";

const Type = () => {
  const [types, setTypes] = useState([]);
  const { section_id, category_id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/types/${section_id}/${category_id}`
        );
        setTypes(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [section_id, category_id]);

  return (
    <div>
      {types.map((type) => (
        <div key={type.id}>
          <h3>{type.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Type;
