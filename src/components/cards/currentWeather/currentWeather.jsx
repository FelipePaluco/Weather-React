import React from 'react';
import styles from './currentWeather.module.css';
import Image from 'next/image';
import getGradientForWeather from 'weather/utils/weatherGradient';

const CurrentWeather = ({ data, location, unit }) => {
  const gradient = getGradientForWeather(data.weather[0].id);
  const temperature = unit === 'metric' ? data.temp : (data.temp * 9) / 5 + 32;
  const unitSymbol = unit === 'metric' ? '°C' : '°F';
  return (
    <div style={{ background: gradient }} className={styles.currentWeatherCard}>
      <div>
        <p className={styles.temperature}>
          {Math.round(temperature)}
          {unitSymbol}
        </p>
        <div className={styles.condition}>
          <p>Condition: {data.weather[0].main}</p>
          <p>Humidity: {data.humidity}%</p>
          <p>Wind Speed: {data.wind_speed} m/s</p>
        </div>
      </div>
      <div className={styles.location}>
        {location.city}, {location.country}
      </div>
      <div>
        <Image
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          width={100}
          height={100}
          alt={data.weather[0].description}
        />
      </div>
    </div>
  );
};

export default CurrentWeather;
