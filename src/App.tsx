import React, {useEffect, useState} from 'react';
import './style/App.css';
import Axios from 'axios'
import { BrowserRouter as Router, Route } from "react-router-dom";
import MealCategories from './components/MealCategories';
import NavBar from './components/NavBar';
import Meals from './components/Meals';

function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route exact path="/" component={MealCategories} />
        <Route exact path="/meal/:mealCategory" component={Meals} />
        
      </Router>
    </div>
  );
}

export default App;
