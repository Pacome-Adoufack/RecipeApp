
import { Link } from "react-router-dom";

const Category = (props) => {
  const { meals } =
    props.data;

  return (
    <div>
      <div className="category-wrapper">
        {meals.length > 0 ? (
          meals.map((meal) => (
            <Link
              to={`/meal/${meal.idMeal}`}
              className="category-detail"
              key={meal.idMeal}>
              <div className="category-card">
                <div className="-category-card-face category-card-front">
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
          <p>Search something...</p>
        )}
      </div>
    </div>
  );
};

export default Category;
