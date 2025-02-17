import { useState } from 'react'
import '../styles/main.css'

export default function Main() {
  const [ingredients, setIngredients] = useState([])
  const ingredientsLi = ingredients.map((ingredient, key) => <li key={key}>{ingredient}</li>)

  const formAction = (formData) => {
    const newIngredient = formData.get('ingredient')

    setIngredients(prev => [...prev, newIngredient])
  }

  return (
    <main>
      <form className='add-ingredient-form' action={formAction}>
        <input name='ingredient' aria-label='Add ingredient' type="text" placeholder="e.g. oregano" />
        <button type="submit">Add ingredient</button>
      </form>
      <ul>
        {ingredientsLi}
      </ul>
    </main>
  )
}