import React from 'react';
import "../style/Ingredient.css"

interface IngredientProps {
    ingredient: IngredientType
}

export const Ingredient: React.FC<IngredientProps> = ({ingredient}) => {
    return(
        <div className="Card2 ph1">
            <div className="overlay" style={{backgroundImage: `url(${`https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}.png`})`,
                backgroundSize: "20rem auto", }}>
                <h2 className="title">{ingredient.strIngredient}</h2>
                <a className="link" href={`/meals-by-ingredient/${ingredient.strIngredient}`}>Show meals</a>
            </div>
        </div>
    )
}