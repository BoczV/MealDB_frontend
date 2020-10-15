import React, { useContext, useState, useEffect } from "react";
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
            <a href="/book">Books</a>
          </li>
          <li>
            <a href="/chapter">Chapters</a>
          </li>
          <li>
            <a href="/movie">Movies</a>
          </li>
          <li>
            <a href="/character">Characters</a>
          </li>
          <li>
            <a href="/quote">Quotes</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}