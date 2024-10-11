import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { MealContext } from "./Components/MealContext";
import Layout from "./Components/Layout";
import Rezept from "./Components/Rezept";
import RandomRecipeView from "./Views/RandomRecipeView";
import CategoryView from "./Views/categoryView";
import Start from "./Components/Start";
import "./App.css";
import SearchView from "./Views/SearchView";
import Login from "./Views/LoginView";
import LoginView from "./Views/LoginView";


function App() {
  const [query, setQuery] = useState("");
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(null);
  const [checkedIngredients, setCheckedIngredients] = useState({});
  const [darkMode, setDarkMode] = useState(false);
  const [randomRecipe, setRandomRecipe] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [rezept, setRezept] = useState(null);
  const [recipes, setRecipes] = useState([]);

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <MealContext.Provider
        value={{
          query,
          setQuery,
          meals,
          setMeals,
          error,
          setError,
          checkedIngredients,
          setCheckedIngredients,
          darkMode,
          setDarkMode,
          randomRecipe,
          setRandomRecipe,
          loading,
          setLoading,
          categories,
          setCategories,
          selectedCategory,
          setSelectedCategory,
          rezept,
          setRezept,
          recipes,
          setRecipes,
        }}
      >
        <div>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Start />} />
              <Route path="meal/:id" element={<Rezept />} />
              <Route path="random" element={<RandomRecipeView />} />
              <Route path="category" element={<CategoryView />} />
              <Route path="search" element={<SearchView />} />
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<LoginView />} />

            </Route>
          </Routes>
          <div>
           
          </div>
        </div>
      </MealContext.Provider>
    </div>
  );
}

export default App;
