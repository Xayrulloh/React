import { useState } from 'react'
import '../styles/main.css'
import MainForm from './Main-Form'
import MainIngredients from './Main-Ingredients'
import MainRecipe from './Main-Recipe'

export default function Main() {
  const [ingredients, setIngredients] = useState([])
  const [recipe, setRecipe] = useState(false)

  return (
    <main>
      <MainForm setIngredients={setIngredients} />
      <MainIngredients ingredients={ingredients} setRecipe={setRecipe} />
      {recipe && <MainRecipe />}
    </main>
  )
}