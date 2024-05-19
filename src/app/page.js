'use client';

import React, { useState } from 'react';
import fetchWeatherData from '../utils/fetchWeather';
import CurrentWeather from '../components/cards/currentWeather/currentWeather';
import HourlyForecast from '../components/cards/hourlyForecast/hourlyForecast';
import DailyForecast from '../components/cards/dailyForecast/dailyForecast';
import SearchField from 'weather/components/fields/search/searchField';
import MetricSwitch from 'weather/components/fields/metric/metricSwitch';
import styles from './page.module.css';
import CardPlaceholder from 'weather/components/cards/placeholder/cardPlaceholder';
import Image from 'next/image';

export default function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [unit, setUnit] = useState('metric');

  const handleLocationSelected = async (location) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchWeatherData(location);
      setWeatherData(data);
      setLocation(location);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const toggleUnit = () => {
    setUnit(unit === 'metric' ? 'imperial' : 'metric');
  };

  return (
    <div className={styles.weatherContainer}>
      <h1 style={{ marginBottom: '15px' }}>Weather App</h1>

      <div className={styles.fields}>
        <SearchField onLocationSelected={handleLocationSelected} />

        <MetricSwitch onChange={toggleUnit} />
      </div>
      <p className={styles.tipDescription}>
        Tip: you can switch the measurement unit clicking on the switch button.
      </p>

      {loading && (
        <>
          <CardPlaceholder />
          <CardPlaceholder />
          <CardPlaceholder />
        </>
      )}

      {error && (
        <>
          <h1 className={styles.errorh1}>
            Oops, Something went wrong! Please insert a new location and try
            again.
          </h1>
          <Image
            src="/error.png"
            width={150}
            height={150}
            alt="API Error"
          ></Image>
        </>
      )}

      {weatherData && location && !loading && !error && (
        <>
          <CurrentWeather
            data={weatherData.current}
            location={location}
            unit={unit}
          />
          <HourlyForecast data={weatherData.hourly} unit={unit} />
          <DailyForecast data={weatherData.daily} unit={unit} />
        </>
      )}
    </div>
  );
}
