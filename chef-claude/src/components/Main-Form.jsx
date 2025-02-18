/* eslint-disable react/prop-types */
export default function MainForm({setIngredients}) {
  const formAction = (formData) => {
    const newIngredient = formData.get('ingredient')

    if (newIngredient) {
      setIngredients(prev => [...prev, newIngredient])
    }

  }

  return (
    <form className='add-ingredient-form' action={formAction}>
      <input name='ingredient' aria-label='Add ingredient' type="text" placeholder="e.g. oregano" />
      <button type="submit">Add ingredient</button>
    </form>
  )
}