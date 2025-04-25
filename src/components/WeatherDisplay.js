import React from 'react'

function WeatherDisplay({weather}) {

    let color = '';
    let condition = '';
  
    if (weather >= 20) {
        const red = 'rgb(255, 0, 0)';
      color = red;
      condition = 'Sunny';
    } else {
      color = 'blue';
      condition = 'Cool';
    }
  return (
    <div>
        
            <p>Temperature: {weather}</p>
            <span style={{color:color}} >{color}</span>
            <p>Conditions: {condition}</p>
        
    </div>
  )
}

export default WeatherDisplay