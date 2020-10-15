import Axios from 'axios'
import React, {useEffect, useState} from 'react'


function MealCategories() {

    const [mealCategories, setMealCategories] = useState<MealCategory[] | undefined>()

  useEffect(() => {
    const url = "http://localhost:8762/mealservice/meal-category"
    Axios.get(url).then((data) => {
      setMealCategories(data.data.meals)
    })
  }, [])
    return (
        <div>
            <h1>Meal Categories</h1>
        {mealCategories?.map((category: MealCategory) => (
          <a href={`/meal/${category.strCategory}`}><p>{category.strCategory}</p></a>
        ))}
        </div>
    )
}

export default MealCategories

