import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp() {
    const [weatherInfo , setweatherInfo] = useState({
        city:"delhi",
        temp : 34,
        tempMin : 33,
        tempMax : 35,
        humidity: 51,
        feelsLike : 41,
        weather: "dusty",
    });

    let updateInfo = (newInfo)=>{
        setweatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}