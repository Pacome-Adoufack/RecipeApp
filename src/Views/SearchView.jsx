import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";


const SearchView = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

const [searchParams] = useSearchParams();

  useEffect(() => {
    const searchWord = searchParams.get("q");
    if (searchWord) {
      setLoading(true);
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchWord}`;

      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Fehler beim Abrufen der Rezepte");
          }
          return response.json();
        })
        .then((data) => {
          setMeals(data.meals);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Fehler:", err);
          setError(
            "Fehler beim Abrufen der Rezepte. Bitte versuche es später erneut."
          );
          setLoading(false);
        });
    } else {
      setMeals([]);
    }
  }
  , []);

  return (
    <div>
      
      <div className="category-wrapper">
        {loading && <p>Lade Rezepte...</p>}
        {error && <p>{error}</p>}
        {meals.length > 0 ? (
          meals.map((meal) => (
            <Link
              to={`/meal/${meal.idMeal}`}
              className="category-detail"
              key={meal.idMeal}
            >
              <div className="category-card">
                <div className="category-card-face category-card-front">
                  <h3 className="category-h3">{meal.strMeal}</h3>
                  <img
                    className="category-image"
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                  />
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>Keine Rezepte gefunden</p>
        )}
      </div>
    </div>
  );
};

export default SearchView;
