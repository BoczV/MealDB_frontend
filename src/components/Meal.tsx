import { url } from 'inspector';
import React from 'react';
import "../style/Meal.css"

interface MealProps {
    meal: Meal
}

export const Meal: React.FC<MealProps> = ({meal}) => {
    return(
        <div className="Card2 ph1">
            <div className="overlay" style={{backgroundImage: `url(${meal.strMealThumb})`,
                backgroundSize: "20rem auto",}}>
                <h2 className="title">{meal.strMeal}</h2>
                <a className="link" href={`/meal/${meal.idMeal}`}>Open</a>
            </div>
        </div>
    )
}