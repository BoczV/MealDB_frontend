import Axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { Meal } from './Meal';

function MealsByArea() {
    const { mealArea } = useParams()
    const [meals, setMeals] = useState<Meal[]>()

    useEffect(() => {
        const url = `http://localhost:8762/mealservice/meal-area/${mealArea}`
        Axios.get(url).then((data) => {
            setMeals(data.data.meals)
        })
    }, [])
    return (
        <div>
            <h1>{mealArea}</h1>
            {meals?.map((meal) => (
                 <Meal key={meal.idMeal} meal={meal}/>
            ))}
        </div>
    )
}

export default MealsByArea
