import Axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Ingredient } from './Ingredient'

function Ingredients() {
    const [ingredients, setIngredients] = useState<IngredientType[]>()

    useEffect(() => {
        const url = `http://localhost:8762/mealservice/ingredients`
        Axios.get(url).then((data) => {
            setIngredients(data.data.meals)
        })
    })
    return (
        <div>
            <h1>Ingredients</h1>
            {ingredients?.map((ingredient) => (
                <Ingredient ingredient={ingredient} key={ingredient.idIngredient}/>
            ))}
        </div>
    )
}

export default Ingredients
