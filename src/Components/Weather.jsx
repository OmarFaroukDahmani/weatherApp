import { useState } from "react";
import '../Styling/Weather.css'

const api = {
  key: "api key",
  base: "https://api.openweathermap.org/data/2.5/",
};

export default function Weather() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});


  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        console.log(weather)
      });
  };

  return (
    <div className="main" >
        <h1>Weather App</h1>
        <div className="inputs">
          <input
            type="text"
            placeholder="Enter city/town..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed}>Search</button>
        </div>

        {typeof weather.main !== "undefined" ? (
          <div className="results">
            <p>{weather.name}, {weather.sys.country}</p>
            <p>{weather.main.temp} °C</p>
            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
          </div>
        ) : (
          <p className="results">Check your city name or enter one</p>
        )}
    </div>
  )};