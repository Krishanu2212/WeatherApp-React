import { useState } from "react";
import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"

export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({
        city: "New Delhi",
        feelsLike: 36.17,
        humidity: 74,
        temp: 30.05,
        tempMax: 30.05,
        tempMin: 30.05,
        weather: "haze"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign: "center"}} className="weather-app">
            <h2>Weather App</h2>


            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}