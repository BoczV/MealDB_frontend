import Axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Meal } from './Meal'

function MealsByIngredient() {
    const {ingredient} = useParams()
    const [mealsByIng, setMealsByIng] = useState<MealType[]>()

    useEffect(() => {
        let url = `http://localhost:8762/mealservice/ingredients/meals/${ingredient}`
        if(ingredient.includes(" ")){
            let new_ingr = ""
            for(let element of ingredient.split(" ")){
                new_ingr += element.toLowerCase() + "_"
            }
            url = `http://localhost:8762/mealservice/ingredients/meals/${new_ingr.substring(0, new_ingr.length - 1)}`
        }
        Axios.get(url).then((data) => {
            setMealsByIng(data.data.meals)
        })
    }, [])

    return (
        <div>
            <h1>Meals based on {ingredient}</h1>
            {mealsByIng !== null && mealsByIng !== undefined ? mealsByIng?.map((meal) => (
                <Meal key={meal.idMeal} meal={meal}/>
            )): <h1>{"No results :("}</h1>}
        </div>
    )
}

export default MealsByIngredient
