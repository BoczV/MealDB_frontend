import Axios from 'axios';
import React, { useState, useEffect } from 'react'
import "../style/Search.css";
import { Meal } from './Meal';

function Search() {
    const [searchString, setSearchString] = useState<string>()
    const [searchLetter, setSearchLetter] = useState<string>()
    const [meals, setMeals] = useState<MealType[]>([])

    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


    const sendSearch = () => {
        let url = "";
        if(searchString){
            url = `http://localhost:8762/mealservice/meal/search/${searchString}`;
            if(searchString.includes(" ")){
                let modifiedSearchString = ""
                for(let element of searchString.split(" ")){
                    modifiedSearchString += element + "_"
                }
                url = `http://localhost:8762/mealservice/meal/search/${modifiedSearchString.substring(0, modifiedSearchString.length - 1)}`
            }
        } else if(searchLetter){
            url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchLetter}`;
        }
        Axios.get(url).then((data) => {
            setMeals(data.data.meals)
        })
        setSearchLetter("")
        setSearchString("")
    }


    return (
        <div>
            <div className="searchField">
                <input
                type="text"
                placeholder="Search by food name"
                onChange={(e) => setSearchString(e.target.value)}
                disabled={searchLetter? true: false}
                />
                <span>Or by first letter </span>
                <select onChange={(e) => setSearchLetter(e.target.value)} disabled={searchString? true: false}>
                        {alphabet.map((letter) => (
                        <option value={letter}>{letter}</option>
                        ))}
                </select>
                <button onClick={() => sendSearch()}>Search</button>
            </div>
            {meals !== null && meals !== undefined? meals.map((meal) => (
                <Meal meal={meal} key={meal.idMeal}/>
            )): <><h1>{"No results :("}</h1></>}
        </div>
    )
}

export default Search
