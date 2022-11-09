import "./App.css";
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import { WEATHER_API_URL } from "./api/api";
import { useState } from "react";
import Forecast from "./components/forecast/forecast";
import NoResults from "./components/no-results/no-results";
import { SLOGANS } from "./constants/constants";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [foreCast, setForeCast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    const city = searchData.label;

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
    );

    const foreCastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, foreCastFetch])
      .then(async (res) => {
        const weatherResponse = await res[0].json();
        const foreCastResponse = await res[1].json();

        setCurrentWeather({ city, ...weatherResponse });
        setForeCast({ city, ...foreCastResponse });
      })
      .catch((err) => alert(err));
  };

  console.log(currentWeather, "currentWeather");
  console.log(foreCast, "foreCast");
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {foreCast && <Forecast data={foreCast} />}
      {!currentWeather && !foreCast && (
        <NoResults delayInMs={8000} data={SLOGANS}/>
      )}
    </div>
  );
}

export default App;
