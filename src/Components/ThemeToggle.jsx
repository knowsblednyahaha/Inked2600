import React from 'react'
// import {useState, useEffect} from 'react';
import "./ThemeToggle.scss"

export default function ThemeToggle() {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };
  setDarkMode();
  function toggleTheme(e) {
    if (e.target.checked)
      setLightMode();
    else
      setDarkMode();
  }

  const selectedTheme = localStorage.getItem("selectedTheme");

  // if(selectedTheme === "dark"){
  //   setDarkMode();
  // }

  return (
    <div>
      <input 
        id="toggle"
        className="toggle"
        type="checkbox"
        onChange={toggleTheme}
        // defaultChecked={selectedTheme === "dark"}
        ></input>
    </div>
  )
}