import Axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { Meal } from './Meal';


function Meals() {
    const {mealCategory} = useParams()
    const [meals, setMeals] = useState<Meal[]>()

    useEffect(() => {
        const url = `http://localhost:8762/mealservice/meal-category/${mealCategory}`
        Axios.get(url).then((data) => {
            setMeals(data.data.meals)
        })
    }, [])
    return (
        <div>
            <h1>{mealCategory}</h1>
            {meals?.map((meal) => (
                <Meal key={meal.idMeal} meal={meal}/>
            ))}
        </div>
    )
}

export default Meals
