import Axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';

function Meals() {
    const {mealCategory} = useParams()

    useEffect(() => {
        const url = `http://localhost:8762/mealservice/meal/${mealCategory}`
        Axios.get(url).then((data) => {
            console.log(data.data);
        })
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default Meals
