import React, { useEffect, useState } from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";


const App = () => {
  let [weather,setWeather]=useState()
  // function handleWeather(e){
  //   // console.log(e.target.value)
  //   setWeather(e.target.value)
  // }
  // setWeather(25)
  useEffect(()=>{
    setWeather(25)
  },[])
  return (
    <div>
        {/* Do not remove the main div */}
        {/* <input type="number" onChange={handleWeather}/> */}
        <WeatherDisplay weather={weather} />
    </div>
  )
}

export default App
