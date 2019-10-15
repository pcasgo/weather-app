const location = "Santiago,cl";
const api_key = "0be287a862944bb325b297f4cfbb01e0";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

export const api_weather = `${url_base_weather}?q=${location}&APPID=${api_key}`;

