import React, { useState } from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";
// import { event } from "cypress/types/jquery";

const App = () => {
  let [weather,setWeather]=useState()
  function handleWeather(e){
    // console.log(e.target.value)
    setWeather(e.target.value)
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <input type="number" onChange={handleWeather}/>
        <WeatherDisplay weather={weather} />
    </div>
  )
}

export default App
