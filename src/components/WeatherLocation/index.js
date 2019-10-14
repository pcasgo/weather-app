import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
    SUN,
} from './../../constants/weathers'

const data = {  
    temperature: 15,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',
}

const location = "Santiago,cl";
const api_key = "0be287a862944bb325b297f4cfbb01e0";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";
const api_weather = `${url_base_weather}?q=${location}&APPID=${api_key}`;


class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: 'Santiago',
            data: data,
        };
    }

    getWeatherState = weather_data => {
        return SUN;
    }

    getData = weather_data => {
        const { humidity, temp } = weather_data.main;
        const { speed } = weather_data.wind;
        const weatherState = this.getWeatherState(weather_data);

        const data = {
            humidity,
            temperature: temp,
            weatherState,
            wind: `${speed} m/s`,
        }

        return data;
    }

    handleUpdateClick = () => {
        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data => {
            const newWeather = this.getData(data);
            debugger;
            this.setState({
                data: newWeather,
            }) 
        });
        console.log("actualizado");
    }

    render() {
        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick} >Actualizar</button>
            </div>
        );
    }
}

export default WeatherLocation;