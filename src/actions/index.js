import axios from 'axios';
const API_KEY ='f46e74112b467ffa3664c56db5091470';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},dz`;
    const request=axios.get(url);


    return {
        type: FETCH_WEATHER,
        payload:request
    };

}