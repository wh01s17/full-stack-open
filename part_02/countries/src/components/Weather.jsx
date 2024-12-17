import { useState, useEffect } from 'react'
import weatherService from '../services/Weather'

const Weather = ({ capital, country }) => {
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        weatherService
            .getData(capital, country.toLowerCase())
            .then(data => setWeather(data))
    }, [])

    if (weather === null) {
        return
    }

    const iconUrl = weather
        ? `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
        : ''

    return (
        <div>
            temperature {weather.main.temp} Celsius
            <br />
            <img src={iconUrl} alt="weatherIcon" />
            <br />
            wind {weather.wind.speed} m/s
        </div>
    )
}

export default Weather