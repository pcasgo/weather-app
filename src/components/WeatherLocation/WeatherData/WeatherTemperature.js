import React from 'react';
import WeatherIcons from 'react-weathericons';
import Proptypes from 'prop-types';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    WINDY,
} from './../../../constants/weathers';
import './styles.css';

const icons = {
    [CLOUD]: 'cloud',
    [CLOUDY]: 'cloudy',
    [SUN]: 'day-sunny',
    [RAIN]: 'rain',
    [WINDY]: 'windy',
};

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    const sizeIcon = "4x";
    if (icon) {
        return <WeatherIcons className="wicon" name={icon} size={sizeIcon} />;
    } else {
        return <WeatherIcons className="wicon" name={RAIN} size={sizeIcon} />;
    }
}; 

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div className="weatherTemperatureCont">
        {
            getWeatherIcon(weatherState)
        }
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperatureType">{` Cº`}</span>
    </div>
);
 
WeatherTemperature.propTypes = {
    temperature: Proptypes.number.isRequired,
    weatherState: Proptypes.string.isRequired,
}

export default WeatherTemperature;