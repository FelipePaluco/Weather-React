import React from 'react';
import styles from './hourlyForecast.module.css';
import Image from 'next/image';

const HourlyForecast = ({ data, unit }) => {
  return (
    <div className={styles.hourlyForecastCard}>
      <div className={styles.cardTitle}>Today Forecast</div>
      <div className={styles.hourlyForecastInformation}>
        {data.slice(0, 5).map((hour, index) => {
          const temperature =
            unit === 'metric' ? hour.temp : (hour.temp * 9) / 5 + 32;
          const unitSymbol = unit === 'metric' ? '°C' : '°F';
          return (
            <div key={index} className={styles.hour}>
              <div className={styles.hourTemp}>
                {Math.round(temperature)}
                {unitSymbol}
              </div>
              <Image
                alt={hour.weather[0].description}
                height={50}
                width={50}
                src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
              />
              <p className={styles.hourCondition}>
                {hour.weather[0].description}
              </p>
              <div className={styles.hourTime}>
                {new Date(hour.dt * 1000).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HourlyForecast;
