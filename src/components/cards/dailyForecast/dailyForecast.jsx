import React from 'react';
import styles from './dailyForecast.module.css';
import Image from 'next/image';

const DailyForecast = ({ data, unit }) => {
  return (
    <div className={styles.dailyForecastCard}>
      <div className={styles.cardTitle}>Daily Forecast</div>
      <div className={styles.dailyForecastInformation}>
        {data.slice(0, 5).map((day, index) => {
          const temperature =
            unit === 'metric' ? day.temp.day : (day.temp.day * 9) / 5 + 32;
          const unitSymbol = unit === 'metric' ? '°C' : '°F';

          return (
            <div key={index} className={styles.day}>
              <div className={styles.dayTemp}>
                {Math.round(temperature)}
                {unitSymbol}
              </div>
              <Image
                alt={day.weather[0].description}
                height={50}
                width={50}
                src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              />
              <p className={styles.dayCondition}>
                {day.weather[0].description}
              </p>
              <div className={styles.dayName}>
                {new Date(day.dt * 1000).toLocaleDateString([], {
                  weekday: 'short',
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DailyForecast;
