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
        <Link to="/category" className="category">
          <img style={{width:"100px", height:"100px", borderRadius:"50%"}}
            src="data:image/jpeg;base64,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"
            alt=""
          />
        </Link>
        <RandomRecipeView />
      </div>
      <div className="start-wrapper">
        {meals.length > 0 ? (
          meals.map((meal) => (
            <Link
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
