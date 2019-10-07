import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const WeatherExtraInfo = ({ humidity, wind }) => (
    <div className='weatherExtraInfoCont'>
        <span>{`${humidity}% Humedad    - `}    </span>
        <span>{`${wind} viento ` }
        </span>
    
    </div>     
);

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}

export default WeatherExtraInfo;