import React from 'react';
import './style/App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import MealsByCategory from './components/MealsByCategory';
import Home from './components/Home';
import DetailedMeal from './components/DetailedMeal';
import Categories from "./components/Categories";
import Areas from './components/Areas';
import MealsByArea from './components/MealsByArea';

function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/category" component={Categories} />
        <Route exact path="/category/:mealCategory" component={MealsByCategory} />
        <Route exact path="/meal/:mealId" component={DetailedMeal} />
        <Route exact path="/area" component={Areas}/>
        <Route exact path="/area/:mealArea" component={MealsByArea} />
      </Router>
    </div>
  );
}

export default App;
