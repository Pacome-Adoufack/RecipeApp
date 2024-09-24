import { useEffect, useContext } from "react";
import { MealContext } from "./MealContext";
import { useParams } from "react-router-dom";

const Rezept = () => {
    const { id } = useParams();
    const {rezept, setRezept} = useContext(MealContext);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((response) => response.json())
        .then((data) => {
            setRezept(data.meals[0]);
        });
    }
    , [id]);

    if (!rezept) {
        return <div>Loading...</div>;
    }

    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = rezept[`strIngredient${i}`];
        const measure = rezept[`strMeasure${i}`];
        if (ingredient) {
            ingredients.push(
                <li key={i}>
                    {ingredient} - {measure}
                </li>
            );
        }
    }
  return (
    <div className='recipe-detail recipe-glasscard'>
    <div className='recipe-card'>
        <h1 className="recipe-h1">{rezept.strMeal}</h1>
        <img className="recipe-image" style={{height:"300px", width:"300px"}} src={rezept.strMealThumb} alt={rezept.strMeal} />
    </div>
    <div className="ingredient-container">
        <h2 className="ingredient-h2">Ingredients</h2>
        <ul className="ingredient-ul">
            {ingredients.map((ingredient, index) => (
                <li className="ingredient-liste" key={index}>{ingredient}</li>
            ))}
        </ul>
    </div>
    <div className="instruction-container">
        <h2 className="instruction-h2">Instructions</h2>
        <p className="instruction-paragraphe">{rezept.strInstructions}</p>
    </div>
</div>
  )
}

export default Rezept
