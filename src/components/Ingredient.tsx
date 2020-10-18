import React, { useState, useEffect } from 'react';
import "../style/Ingredient.css"

interface IngredientProps {
    ingredient: IngredientType
}

export const Ingredient: React.FC<IngredientProps> = ({ingredient}) => {
    const [picPath, setPicPath] = useState<string | undefined | null>()

    useEffect(() => {
        setPicPath(ingredient.strIngredient)
        if(ingredient.strIngredient?.includes(" ")){
            let elementList = ingredient.strIngredient.split(" ")
            let newPicPath = ""
            for(let element of elementList){
                newPicPath += element + "%20"
            }
            setPicPath(newPicPath.substring(0, newPicPath.length - 3))
        }
    }, [])

    return(
        <div className="Card2 ph1">
            <div className="overlay" style={{backgroundImage: `url(${`https://www.themealdb.com/images/ingredients/${picPath}.png`})`,
                backgroundSize: "20rem auto", }}>
                <h2 className="title">{ingredient.strIngredient}</h2>
                <a className="link" href={`/meals-by-ingredient/${ingredient.strIngredient}`}>Show meals</a>
            </div>
            
        </div>
    )
}