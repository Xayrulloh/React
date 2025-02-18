/* eslint-disable react/prop-types */
export default function MainIngredients({ingredients, setRecipe}) {
  const suggestedRecipe = () => {
    setRecipe(prev => !prev)
  }

  const ingredientsLi = ingredients.map((ingredient, key) => <li key={key}>{ingredient}</li>)

  return (
    ingredients.length > 0 && (
      <section>
        <h2>Ingredients on hand:</h2>
        <ul className='ingredients-list' aria-live='polite'>{ingredientsLi}</ul>
        {ingredients.length > 3 && (
          <div className="get-recipe-container">
            <div>
              <h3>Ready for a recipe?</h3>
              <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button onClick={suggestedRecipe}>Get a recipe</button>
          </div>
        )}
      </section>
    )
  )
}