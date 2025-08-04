import React from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"
import { GetRecipeByAI } from "../ai.js"

export default function Main()
{
    
    

    let [ingredients, setIngredients] = React.useState([])
    
    let [recipe, setRecipe] = React.useState("")

    
    
    async function GetRecipe()
    {
        const recipeMarkdown = await GetRecipeByAI(ingredients);
        setRecipe( prev => recipeMarkdown )
        console.log(recipeMarkdown);
    }

    
    function submitClicked(event) {
        event.preventDefault() // page wont reload everytime
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        
        setIngredients( prev => [...prev, newIngredient])
        //console.log(ingredients)
        event.target.reset();
        
    }
    
    return (
      <main>
        <form className="ingredient-input" onSubmit={submitClicked}>
          <input
            type="text"
            aria-label="Add ingredient"
            placeholder="e.g. ketchup"
            name="ingredient"
          />
          <button> + Add Ingredient </button>
        </form>

        {ingredients.length > 0 && (
          <IngredientsList ingredients={ingredients} GetRecipe={GetRecipe} />
        )}

        {recipe && (
          
            <ClaudeRecipe recipe={recipe} />
          
        )}
      </main>
    );
}