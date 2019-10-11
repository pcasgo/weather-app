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

class WeatherLocation extends Component {
    render() {
        return (
            <div className="weatherLocationCont">
                <Location city={'Barcelona'}></Location>
                <WeatherData data={data}></WeatherData>
            </div>
        );
    }
}

export default WeatherLocation;