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

const icons = {
    [CLOUD]: 'cloud',
    [CLOUDY]: 'cloudy',
    [SUN]: 'day-sunny',
    [RAIN]: 'rain',
    [WINDY]: 'windy',
};

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    if (icon) {
        return <WeatherIcons name={icon} size='2x' />;
    } else {
        return <WeatherIcons name={RAIN} size='2x' />;
    }
}; 

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div>
        {
            getWeatherIcon(weatherState)
        }
        <span>{`${temperature} Cº `}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: Proptypes.number.isRequired,
    weatherState: Proptypes.string.isRequired,
}

export default WeatherTemperature;