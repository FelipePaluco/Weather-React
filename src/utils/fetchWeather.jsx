import axios from 'axios';

const fetchWeatherData = async ({ latitude, longitude }) => {
  const response = await axios
    .get(`https://api.openweathermap.org/data/3.0/onecall`, {
      params: {
        lat: latitude,
        lon: longitude,
        exclude: 'minutely,alerts',
        units: 'metric',
        appid: process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY,
      },
    })
    .catch(function (error) {
      if (error.response) {
        throw new Error(error.response);
      } else if (error.request) {
        throw new Error(error.request);
      } else {
        throw new Error(error.message);
      }
    });
  return response.data;
};

export default fetchWeatherData;
