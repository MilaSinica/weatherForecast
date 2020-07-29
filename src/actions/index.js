import axios from 'axios';

const API_KEY = '23853879fd8119e1a47508c6260ae7d5';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city, countrycode) {
    const uri = `${ROOT_URL}&q=${city},${countrycode}`;
    const request = axios.get(uri);
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}