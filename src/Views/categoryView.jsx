import { useState, useEffect } from "react";
import Category from "../Components/Category";

const CategoryView = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Fehler beim Abrufen der Kategorien");
        }
        return response.json();
      })
      .then((data) => {
        setCategories(data.categories);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fehler:", err);
        setError(
          "Fehler beim Abrufen der Kategorien. Bitte versuche es später erneut."
        );
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      setLoading(true);
      const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`;

      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Fehler beim Abrufen der Rezepte");
          }
          return response.json();
        })
        .then((data) => {
          setRecipes(data.meals);
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
      setRecipes([]);
    }
  }, [selectedCategory]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="category-search">
        <h1 className="category-title">Search recipe by category</h1>

        {loading && <p>Laden...</p>}
        {error && <p>{error}</p>}
        <div className="dropdown">
          <label className="dropdown-label" htmlFor="category">
          Category:
          </label>
          <select
            className="dropdown-select"
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option className="option" value="">
            Choose a category
            </option>
            {categories.map((category) => (
              <option className="option-category" key={category.idCategory} value={category.strCategory}>
                {category.strCategory}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Category data={{ meals: recipes }} />
    </div>
  );
};

export default CategoryView;