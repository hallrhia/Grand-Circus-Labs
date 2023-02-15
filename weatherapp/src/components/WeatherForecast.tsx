import { useEffect, useState } from "react";
import { Weather } from "../models/Weather";
import { GetWeatherData } from "../services/WeatherService";

export function WeatherForecast() {
  const [weather, setWeather] = useState<Weather>();

  useEffect(() => {
    //call API
    GetWeatherData().then((data) => setWeather(data));
  }, []);

  useEffect(() => {
    console.log(weather);
    //weather in the brackets is a dependency
    //if dependency changes then runs
  }, [weather]);

  //question mark says if the value before exists run the rest of the code otherwise return null
  //check the json info in the interface to find the correct information you want
  let periods = weather?.properties.periods;

  //can also do this only in the jsx
  let displayPeriods = periods?.map((period) => (
    <ul>
      <li className="name">{period.name}</li>
      <li>
        <img src={period.icon}></img>
      </li>
      <li>{period.detailedForecast}</li>
      <li>
        {period.temperature}
        {period.temperatureUnit}
      </li>
    </ul>
  ));

  return (
    <div className="WeatherForecast">
      {weather !== undefined && <>{displayPeriods}</>}
    </div>
  );
}
