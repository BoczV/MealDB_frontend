import Axios from 'axios'
import React, {useEffect, useState} from 'react'
import "../style/MealCategory.css"


function Categories() {

    const [mealCategories, setMealCategories] = useState<MealCategory[] | undefined>()

  useEffect(() => {
    const url = "http://localhost:8762/mealservice/meal-category"
    Axios.get(url).then((data) => {
      setMealCategories(data.data.categories)
    })
  }, [])
    return (
        <div>
            <h1>Meal Categories</h1>
         {mealCategories?.map((category: MealCategory) => (
          <div className="Card2 ph1" key={category.idCategory}>
            <div className="overlay" style={{backgroundImage: `url(${category.strCategoryThumb})`,
                backgroundSize: "auto 18rem", backgroundPosition: "center center"}}>
                <h2 className="title">{category.strCategory}</h2>
                <a className="link" href={`/category/${category.strCategory}`}>Open</a>
            </div>
        </div>
        ))} 
        </div>
    )
}

export default Categories

