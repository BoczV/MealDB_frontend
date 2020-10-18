import React from "react";
import "../style/Navbar.css";

export default function NavBar() {
  return (

    <div className="header">
      <p className="home" id="logo">
        Meal DB
      </p>

      <nav>
        <ul>
        <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/area">Areas</a>
          </li>
          <li>
            <a href="/category">Categories</a>
          </li>
          <li>
            <a href="/random-meal">Surprise me!</a>
          </li>
          <li>
            <a href="/ingredients">Ingredients</a>
          </li>
          <li>
            <a href="/contact-me">Contact me</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}