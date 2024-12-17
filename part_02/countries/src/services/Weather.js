import axios from "axios"

const api_key = import.meta.env.VITE_SOME_KEY
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q='

const getData = (city, country) => {
    const url = `${baseUrl}${city},${country}&APPID=${api_key}&units=metric`
    const request = axios.get(url)
    return request.then(response => response.data)
}

export default { getData }