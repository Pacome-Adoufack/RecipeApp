
const RandomRecipe = (props) => {
const {loading,randomRecipe} = props.data;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!randomRecipe) {
    return <div>No recipes found</div>;
  }



  return (
    <div>
      <div className="start-wrapper">
        <div className="recipe-detail" key={randomRecipe.idMeal}>
          <div className="recipe-card">
            <div className="card-face card-front">
              <h3>{randomRecipe.strMeal}</h3>
              <img
                className="start-image"
                src={randomRecipe.strMealThumb}
                alt={randomRecipe.strMeal}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default RandomRecipe;
