import { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";

const Main = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => setItems(res.data.meals))
      .catch((err) => console.log(err));
  }, []);

  const itemsList = items.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <section className="card" key={Math.random() * 100}>
        <img src={strMealThumb} />
        <section className="content">
          <p>{strMeal}</p>
        </section>
        <section className="id">
          <p>#{idMeal}</p>
        </section>
      </section>
    );
  });

  return (
    <>
      <h1>SEA FOODS</h1>
      <div className="items-container">{itemsList}</div>;
    </>
  );
};

export default Main;
