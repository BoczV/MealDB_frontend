import Axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Meal } from './Meal';

function RandomMeal() {
    const [meal, setMeal] = useState<MealType | undefined>()

    useEffect(() => {
        const url = `http://localhost:8762/mealservice/meal/random`
        Axios.get(url).then((data) => {
            let newMeal: MealType = {
                idMeal: data.data.meals[0].idMeal,
                strMeal: data.data.meals[0].strMeal,
                strMealThumb: data.data.meals[0].strMealThumb
            }
            setMeal(newMeal)
        })
    }, [])
    return (
        <div>
            
            {meal !== undefined && meal !== null ? (
                <>
                    <h1>{meal?.strMeal}</h1>
                    <Meal meal={meal}/>
                </>
            ): null}
        </div>
    )
}

export default RandomMeal
