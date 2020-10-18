import Axios from 'axios'
import React, {useState, useEffect} from 'react'
import "../style/MealCategory.css"

function Areas() {
    const [mealAreas, setMealAreas] = useState<MealArea[] | undefined>()

  useEffect(() => {
    const url = "http://localhost:8762/mealservice/meal-area"
    Axios.get(url).then((data) => {
        setMealAreas(data.data.meals)
    })
  }, [])
    return (
        <div>
            <h1>Meal Categories</h1>
         {mealAreas?.map((area: MealArea) => (
          <div className="Card2 ph1" key={area.strArea}>
            <div className="overlay">
                <h2 className="title">{area.strArea}</h2>
                <a className="link" href={`/area/${area.strArea}`}>Open</a>
            </div>
        </div>
        ))} 
        </div>
    )
}

export default Areas
