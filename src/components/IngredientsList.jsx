export default function IngredientsList(props)
{


    const ingredientsList = props.ingredients.map((ingredient, index) => (
      <li key={index}>{ingredient}</li>
    ))


    return (
      <section>
        <h2> Ingredients on Hand: </h2>
        <ul className="ingredients-list"> {ingredientsList} </ul>

        {props.ingredients.length >= 4 && (
          <div className="recipe-container">
            <div>
              <h3> Ready for a recipe? </h3>
              <p> Generate a recipe from your list of ingredients </p>
            </div>
            <button onClick={props.GetRecipe}> Get Recipe </button>
          </div>
        )}
      </section>
    );
}

