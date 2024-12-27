import { useContext, useEffect, useState } from "react";
import { MealContext } from "./MealContext";
import { Link } from "react-router-dom";
import "../App.css";
import RandomRecipeView from "../Views/RandomRecipeView";

const Start = () => {
  const { rezept, setRezept, meals, setMeals } = useContext(MealContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        return response.json();
      })
      .then((data) => {
        setRezept(data.meals);
        setMeals(data.meals);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [setRezept, setMeals]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!rezept || rezept.length === 0) {
    return <div>No recipes found</div>;
  }

  return (
    <div>
      <div className="category-random">
        <Link to="/category">
          <p className="category-paragraph">Search by category</p>
        </Link>
        <RandomRecipeView />
      </div>
      <div className="start-wrapper">
        {meals.length > 0 ? (
          meals.map((meal) => (
            <Link
              style={{ textDecoration: "none" }}
              to={`/meal/${meal.idMeal}`}
              className="recipe-detail"
              key={meal.idMeal}>
              <div className="recipe-card">
                <div className="card-face card-front">
                  <h3>{meal.strMeal}</h3>
                  <img
                    className="start-image"
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                  />
                </div>
              </div>
              <button className="button-readmore">read more...</button>
            </Link>
          ))
        ) : (
          <p>Search something...</p>
        )}
      </div>
    </div>
  );
};

export default Start;
